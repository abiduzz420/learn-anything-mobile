import React, { Component } from 'react';
import { View, Text, ScrollView, ToastAndroid } from 'react-native';
import axios from 'axios';
import _ from 'lodash';

import SearchBox from './SearchBox.js';
import ResourcesCard, { RelatedResources } from './ResourcesCard.js';
import Suggestions from './Suggestions.js';

const BASE_URL = `https://learn-anything.xyz/api`;

export default class ResultScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestionsList: [],
      visible: false,
      resources: [],
      query: ''
    };
  }
  fetchSuggestions = value => {
    const query = value.trim();
    if (query !== '' && query !== ' ') {
      axios
        .get(`${BASE_URL}/maps?q=${query}`)
        .then(response => {
          this.setState({
            suggestionsList: response.data
          });
          return Promise.resolve(response);
        })
        .catch(error => {
          console.log(`Error: ${error}`);
        });
    } else {
      this.setState({ suggestionsList: [] });
    }
  };
  setInputText = query => {
    this.setState({ query });
  };
  onClickSuggest = () => {
    this.setState({ visible: false });
  };
  showSuggestions = () => {
    this.setState({ visible: true });
  };
  setResourceState = data => {
    console.log('full resource:', data);
    this.setState({ resources: data.nodes, query: data.key });
  };
  onClickNode = url => {
    console.log('updating', this.state.resources);
    console.log('urls', url);
    axios
      .get(`${BASE_URL}/maps/${url}`)
      .then(response =>
        this.setState({
          resources: response.data.nodes,
          query: response.data.key
        })
      )
      .catch(error => console.log(error));
  };
  render() {
    const nodeResources = [];
    console.log('nodeResources', nodeResources);
    console.log('suggestionsList', this.state.suggestionsList);
    console.log('resources:', this.state.resources);
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#000',
          marginRight: 15,
          marginLeft: 15,
          marginTop: 10
        }}
      >
        <SearchBox
          setInputText={this.setInputText}
          query={this.state.query}
          showSuggestions={this.showSuggestions}
          onFetchSuggestions={this.fetchSuggestions}
        />
        {this.state.visible ? (
          <Suggestions
            setResourceState={this.setResourceState}
            hideSuggestListHandler={this.onClickSuggest}
            suggestionsList={this.state.suggestionsList}
          />
        ) : null}
        <ScrollView horizontal>
          {this.state.resources.length > 0 ? (
            this.state.resources.map((res, i) => {
              if (res.nodes.length === 0) {
                nodeResources.push(res);
              }
              return (
                <ResourcesCard
                  onClickNode={this.onClickNode}
                  key={i}
                  data={res}
                  text={res.text}
                />
              );
            })
          ) : null}
          <RelatedResources
            url=""
            text="Related resources"
            data={nodeResources}
            onClickNode={this.onClickNode}
          />
        </ScrollView>
      </View>
    );
  }
}

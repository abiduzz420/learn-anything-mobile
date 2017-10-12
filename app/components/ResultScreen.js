import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';
import _ from 'lodash';

import SearchBox from './SearchBox.js';
import ResourcesCard from './ResourcesCard.js';
import Suggestions from './Suggestions.js';

const BASE_URL = `https://learn-anything.xyz/api`;

export default class ResultScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestionsList: [],
      visible: false,
      resources: []
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
  onClickSuggest = () => {
    this.setState({ visible: false });
  };
  showSuggestions = () => {
    this.setState({ visible: true });
  };
  setResourceState = data => {
    console.log('full resource:', data);
    this.setState({ resources: data.nodes });
  };
  onClickNode = url => {
    console.log('urls', url);
    axios
      .get(`${BASE_URL}/maps/${url}`)
      .then(response => this.setResourceState(response.data));
  };
  render() {
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
        <ScrollView ref={ref => (this.scrollView = ref)} horizontal>
          {this.state.resources.length > 0 ? (
            this.state.resources.map((res, i) => {
              return (
                <ResourcesCard
                  onClickNode={this.onClickNode}
                  key={i}
                  data={res}
                />
              );
            })
          ) : null}
          {/*<RelatedResources />*/}
        </ScrollView>
      </View>
    );
  }
}

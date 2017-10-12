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
    console.log('fetching suggestions');
    const query = value.trim();
    console.log(query);
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
    this.setState({ resources: data });
  };
  render() {
    console.log('suggestionsList', this.state.suggestionsList);
    console.log('resources:', this.state.resources);
    const fetchSuggestions = _.debounce(this.fetchSuggestions, 200);
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
          onFetchSuggestions={fetchSuggestions}
        />
        {this.state.visible ? (
          <Suggestions
            setResourceState={this.setResourceState}
            hideSuggestListHandler={this.onClickSuggest}
            suggestionsList={this.state.suggestionsList}
          />
        ) : null}
        <ScrollView horizontal>
          {this.state.resources.nodes.map((res, i) => {
            return <ResourcesCard key={i} title={res.text} nodes={res.nodes} />;
          })}
        </ScrollView>
      </View>
    );
  }
}

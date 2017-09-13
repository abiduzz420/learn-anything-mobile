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
      suggestionsList: []
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
          this.setState({ suggestionsList: response.data });
          return Promise.resolve(response);
        })
        .catch(error => {
          console.log(`Error: ${error}`);
        });
    } else {
      this.setState({ suggestionsList: [] });
    }
  };
  render() {
    console.log('suggestionsList', this.state.suggestionsList);
    const fetchSuggestions = _.debounce(this.fetchSuggestions, 400);
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
        <SearchBox onFetchSuggestions={fetchSuggestions} />
        <Suggestions suggestionsList={this.state.suggestionsList} />
        <ScrollView horizontal>
          <ResourcesCard
            title="Basics"
            nodes={[
              { icon: 'edit', text: 'So you to learn Physics' },
              {
                icon: 'play-circle-filled',
                text: 'Resource guide to theoretical Physics'
              },
              { icon: 'edit', text: 'Why cant Elephants jump' },
              {
                icon: 'play-circle-filled',
                text: 'The character of Physical Law'
              },
              { icon: 'play-circle-filled', text: 'Theory of Relativity' },
              { icon: 'edit', text: 'The Feyman Lectures on Physics' },
              { icon: 'book', text: 'Crash course Physics' },
              {
                icon: 'edit',
                text: 'The astonishing simplicity of everything'
              },
              { icon: 'play-circle-filled', text: 'Map of Physics' },
              { icon: 'book', text: 'Theory of Relativity' },
              {
                icon: 'play-circle-filled',
                text: 'The Feyman Lectures on Physics'
              },
              { icon: 'play-circle-filled', text: 'Crash course Physics' },
              { icon: 'edit', text: 'AP Physics essentials' },
              {
                icon: 'edit',
                text: 'The astonishing simplicity of everything'
              },
              { icon: 'play-circle-filled', text: 'Map of Physics' }
            ]}
          />
          <ResourcesCard
            title="Help"
            nodes={[
              { icon: 'edit', text: 'So you to learn Physics' },
              {
                icon: 'book',
                text: 'Resource guide to theoretical Physics'
              },
              { icon: 'edit', text: 'Why cant Elephants jump' }
            ]}
          />
          <ResourcesCard
            title="Interesting"
            nodes={[
              { icon: 'edit', text: 'Theory of Relativity' },
              {
                icon: 'book',
                text: 'The Feyman Lectures on Physics'
              },
              { icon: 'edit', text: 'Crash course Physics' },
              { icon: 'play-circle-filled', text: 'AP Physics essentials' },
              {
                icon: 'book',
                text: 'The astonishing simplicity of everything'
              },
              { icon: 'book', text: 'Map of Physics' }
            ]}
          />
        </ScrollView>
      </View>
    );
  }
}

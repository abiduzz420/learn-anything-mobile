import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, Text, View } from 'react-native';
import axios from 'axios';
import _ from 'lodash';

const BASE_URL = `https://learn-anything.xyz/api`;

class Suggestions extends Component {
  selectSubject = id => {
    console.log('Clicked on ', id);
    const FETCH_MAP = `${BASE_URL}/maps/${id}`;
    axios
      .get(FETCH_MAP)
      .then(response => this.props.setResourceState(response.data));
    this.props.hideSuggestListHandler();
  };
  render() {
    const { suggestionsList } = this.props;
    if (suggestionsList.length === 0) return null;
    return (
      <View
        style={{
          backgroundColor: '#ffffff',
          borderRadius: 4,
          height: 240,
          width: '100%',
          top: 50,
          position: 'absolute',
          zIndex: 10000,
          elevation: 5
        }}
      >
        <ScrollView>
          {suggestionsList.map(suggestion => {
            return (
              <TouchableOpacity
                key={suggestion.id}
                onPress={() => this.selectSubject(suggestion.id)}
              >
                <Text
                  style={{
                    color: '#000',
                    padding: 4,
                    fontSize: 15,
                    color: '#000'
                  }}
                >
                  {suggestion.key}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

export default Suggestions;

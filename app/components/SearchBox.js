import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { SearchBar } from 'react-native-elements';
import _ from 'lodash';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.fetchSuggestions = _.debounce(props.onFetchSuggestions, 500);
  }

  onInputChange = value => {
    this.props.setInputText(value);
    this.props.showSuggestions();
    this.fetchSuggestions(value);
  };
  render() {
    return (
      <View>
        <SearchBar
          placeholder="Start new Search"
          clearIcon
          value={this.props.query}
          onChangeText={this.onInputChange}
          containerStyle={{
            backgroundColor: '#ffffff',
            borderRadius: 5
          }}
          inputStyle={{
            color: '#000',
            backgroundColor: '#ffffff',
            fontSize: 15,
            padding: 10
          }}
        />
      </View>
    );
  }
}

export default SearchBox;

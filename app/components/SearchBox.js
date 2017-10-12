import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { SearchBar } from 'react-native-elements';
import _ from 'lodash';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  onInputChange = value => {
    this.setState({
      query: value
    });
    this.props.showSuggestions();
    const fetchSuggestions = _.debounce(this.props.onFetchSuggestions, 1000);
    fetchSuggestions();
  };
  render() {
    return (
      <View>
        <SearchBar
          placeholder="Start new Search"
          clearIcon
          value={this.state.query}
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

import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { SearchBar } from 'react-native-elements';

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
    this.props.onFetchSuggestions(value);
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

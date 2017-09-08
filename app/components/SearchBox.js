import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import { SearchBar } from 'react-native-elements'

class SearchBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
  }
  render() {
    return (
      <View>
        <SearchBar
          placeholder="Start new Search"
          clearIcon
          value={this.state.query}
          onChangeText={query => this.setState({ query })}
          containerStyle={{
            backgroundColor: '#ffffff',
            borderRadius: 5,
            marginLeft: 15,
            marginRight: 15,
            marginTop: 10
          }}
          inputStyle={{
            color: '#000',
            backgroundColor: '#ffffff',
            fontSize: 15,
            padding: 10
          }}
        />
      </View>
    )
  }
}

export default SearchBox

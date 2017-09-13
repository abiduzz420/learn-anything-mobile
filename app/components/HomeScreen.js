import React, { Component } from 'react';
import { View, Image } from 'react-native';

import SearchBox from './SearchBox.js';
import icon from '../../android/app/src/main/res/drawable-mdpi/icon.png';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={{ justifyContent: 'center' }}>
        <Image source={{ uri: 'https://twitter.com/learnanything_' }} />
        <SearchBox
          containerStyle={{
            backgroundColor: '#ffffff',
            borderRadius: 5,
            marginLeft: 5,
            marginRight: 5
          }}
        />
      </View>
    );
  }
}

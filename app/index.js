import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

import ResultScreen from './components/ResultScreen.js';
import HomeScreen from './components/HomeScreen.js';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#000' }}>
        <ResultScreen />
      </View>
    );
  }
}

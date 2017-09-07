import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'

import ResourcesCard from './components/ResourcesCard.js'

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#000' }}>
        <ScrollView horizontal>
          <ResourcesCard
            title="Basics"
            nodes={[
              'So you to learn Physics',
              'Resource guide to theoretical Physics',
              'Why cant Elephants jump',
              'The character of Physical Law',
              'Theory of Relativity',
              'The Feyman Lectures on Physics',
              'Crash course Physics',
              'AP Physics essentials',
              'The astonishing simplicity of everything',
              'Map of Physics',
              'Theory of Relativity',
              'The Feyman Lectures on Physics',
              'Crash course Physics',
              'AP Physics essentials',
              'The astonishing simplicity of everything',
              'Map of Physics'
            ]}
          />
          <ResourcesCard
            title="Basics"
            nodes={[
              'So you to learn Physics',
              'Resource guide to theoretical Physics',
              'Why cant Elephants jump',
              'The character of Physical Law',
              'Theory of Relativity',
              'The Feyman Lectures on Physics',
              'Crash course Physics',
              'AP Physics essentials',
              'The astonishing simplicity of everything',
              'Map of Physics',
              'Theory of Relativity',
              'The Feyman Lectures on Physics',
              'Crash course Physics',
              'AP Physics essentials',
              'The astonishing simplicity of everything',
              'Map of Physics'
            ]}
          />
          <ResourcesCard
            title="Basics"
            nodes={[
              'So you to learn Physics',
              'Resource guide to theoretical Physics',
              'Why cant Elephants jump',
              'The character of Physical Law',
              'Theory of Relativity',
              'The Feyman Lectures on Physics',
              'Crash course Physics',
              'AP Physics essentials',
              'The astonishing simplicity of everything',
              'Map of Physics',
              'Theory of Relativity',
              'The Feyman Lectures on Physics',
              'Crash course Physics',
              'AP Physics essentials',
              'The astonishing simplicity of everything',
              'Map of Physics'
            ]}
          />
        </ScrollView>
      </View>
    )
  }
}

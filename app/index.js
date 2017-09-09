import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

import SearchBox from './components/SearchBox.js';
import ResourcesCard from './components/ResourcesCard.js';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#000' }}>
        <SearchBox />
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

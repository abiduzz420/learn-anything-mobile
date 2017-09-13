import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, Text, View } from 'react-native';

const Suggestions = ({ suggestionsList }) => {
  if (suggestionsList.length === 0) return null;
  return (
    <View style={{ backgroundColor: '#ffffff', borderRadius: 4, height: 240 }}>
      <ScrollView>
        {suggestionsList.map(suggestion => {
          return (
            <TouchableOpacity key={suggestion.id}>
              <Text key={suggestion.id} style={{ color: '#000', padding: 4 }}>
                {suggestion.key}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Suggestions;

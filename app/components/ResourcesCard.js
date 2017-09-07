import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

class ResourcesCard extends Component {
  render() {
    console.log(this.props)
    return (
      <View style={styles.card}>
        <Text style={styles.resourceHeader}>{this.props.title}</Text>
        <View
          style={{
            borderBottomColor: '#E0E0E0',
            borderBottomWidth: 2
          }}
        />
        <ScrollView pagingEnabled>
          {this.props.nodes.map((node, i) => {
            return (
              <Text style={styles.resourceItem} key={i}>
                {node}
              </Text>
            )
          })}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    margin: 14,
    width: 310,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8
  },
  resourceHeader: {
    fontSize: 20,
    padding: 5,
    color: '#000',
    fontWeight: 'bold'
  },
  resourceItem: {
    fontSize: 15,
    padding: 8,
    color: '#000'
  }
})

export default ResourcesCard

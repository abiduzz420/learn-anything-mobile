import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

class ResourcesCard extends Component {
  render() {
    console.log(this.props)
    return (
      <View style={styles.card}>
        <View style={styles.resourceHeader}>
          <Text style={styles.resourceTitle}>{this.props.title}</Text>
          <Text style={styles.articleCount}>
            {this.props.nodes.length} articles
          </Text>
        </View>
        <View
          style={{
            borderBottomColor: '#E0E0E0',
            borderBottomWidth: 2
          }}
        />
        <ScrollView>
          <View style={styles.resourceItem}>
            {this.props.nodes.map((node, i) => {
              return (
                <Text style={styles.resourceItem} key={i}>
                  {node}
                </Text>
              )
            })}
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    marginBottom: 15,
    width: 330,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8
  },
  resourceHeader: {
    padding: 5,
    flexDirection: 'row'
  },
  resourceTitle: {
    flex: 1,
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold'
  },
  articleCount: {
    fontSize: 15
  },
  resourceItem: {
    fontSize: 15,
    marginTop: 5,
    padding: 8,
    color: '#000'
  }
})

export default ResourcesCard

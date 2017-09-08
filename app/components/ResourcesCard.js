import React, { Component } from 'react'
import {
  View,
  Text,
  Icon,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import { Card, ListItem } from 'react-native-elements'

class ResourceItem extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity>
          <Text style={styles.resourceItem}>{this.props.item}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

class ResourcesCard extends Component {
  render() {
    return (
      <Card title={this.props.title} style={styles.card}>
        <ScrollView>
          <View>
            {this.props.nodes.map((node, i) => (
              <ResourceItem key={i} item={node} />
            ))}
          </View>
        </ScrollView>
      </Card>
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
  articleCount: {
    fontSize: 15
  },
  resourceItem: {
    fontSize: 15,
    padding: 8,
    color: '#000',
    backgroundColor: '#F5F5F5',
    margin: 5,
    elevation: 1,
    borderRadius: 5
  }
})

export default ResourcesCard

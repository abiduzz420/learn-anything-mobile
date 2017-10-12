import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

class ResourceItem extends Component {
  render() {
    return (
      <TouchableOpacity>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Icon name="edit" size={20} color="#000" />
          <Text style={styles.resourceItem}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

class ResourcesCard extends Component {
  render() {
    if (this.props.nodes.length !== 0) {
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
            <View>
              {this.props.nodes.map((node, i) => (
                <ResourceItem url={node.url} key={i} text={node.text} />
              ))}
            </View>
          </ScrollView>
        </View>
      );
    } else return null;
  }
}

const styles = StyleSheet.create({
  card: {
    marginTop: 15,
    marginBottom: 15,
    width: 330,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    zIndex: 50
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
    color: '#000',
    marginLeft: 5
  }
});

export default ResourcesCard;

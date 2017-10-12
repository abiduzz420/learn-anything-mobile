import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

class ResourceItem extends Component {
  render() {
    const iconName =
      this.props.category === 'wiki'
        ? 'wikipedia-w'
        : this.props.category === 'video'
          ? 'play'
          : this.props.category === 'reddit'
            ? 'reddit'
            : this.props.category === 'non-free book'
              ? 'book'
              : this.props.category === 'github'
                ? 'github'
                : this.props.category === 'article'
                  ? 'sticky-note'
                  : this.props.category === 'stack exchange'
                    ? 'stack-exchange'
                    : this.props.category === 'mindmap'
                      ? 'sitemap'
                      : 'comment-o';
    return (
      <TouchableOpacity
        onPress={
          this.props.category === 'mindmap' ? (
            () => this.props.onClickNode(this.props.url)
          ) : (
            () => Linking.openURL(this.props.url)
          )
        }
      >
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Icon name={iconName} size={20} color="#000" />
          <Text style={styles.resourceItem}>
            {this.props.text.trim().length !== 0 ? (
              this.props.text
            ) : (
              this.props.category
            )}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

class ResourcesCard extends Component {
  render() {
    const { nodes, text, url } = this.props.data;
    if (nodes.length !== 0) {
      return (
        <View style={styles.card}>
          <ResourceHeader {...this.props.data} />
          <View
            style={{
              borderBottomColor: '#E0E0E0',
              borderBottomWidth: 2
            }}
          />
          <ScrollView>
            <View>
              {nodes.map((node, i) => (
                <ResourceItem
                  onClickNode={this.props.onClickNode}
                  category={node.category}
                  url={node.url}
                  key={i}
                  text={node.text}
                />
              ))}
            </View>
          </ScrollView>
        </View>
      );
    } else return null;
  }
}

const ResourceHeader = ({ url, text, nodes }) => {
  return (
    <View style={styles.resourceHeader}>
      <Text onPress={() => Linking.openURL(url)} style={styles.resourceTitle}>
        {text}
      </Text>
      <Text style={styles.articleCount}>
        {`${nodes.length} ${nodes.length === 1 ? 'resource' : 'resources'}`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginTop: 15,
    marginBottom: 15,
    padding: 10,
    width: 330,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    zIndex: 50,
    marginRight: 10
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

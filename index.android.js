/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
} = React;

var DialogAndroid = require('react-native-dialogs');

var ReactNativeDialogsExample = React.createClass({
  showDialog: function () {
    var dialog = new DialogAndroid();
    dialog.set({
      title: 'Hello, World!',
      content: 'I\'m just simple Dialog',
      positiveText: 'OK',
      negativeText: 'Cancel'
    });
    dialog.show();
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
        <TouchableNativeFeedback onPress={this.showDialog}>
          <View><Text>Click me!</Text></View>
        </TouchableNativeFeedback>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactNativeDialogsExample', () => ReactNativeDialogsExample);

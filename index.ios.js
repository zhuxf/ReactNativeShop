/* jshint esversion: 6 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  PixelRatio,
  View
} from 'react-native';

import Main from './Components/Main/Main.js';

class MyBox extends Component {
  render() {
    return (
      <Main />
    );
  }
}

const styles = StyleSheet.create({



});
// alert(AppRegistry.runApplication);
AppRegistry.registerComponent('Box', () => MyBox);

/* jshint esversion: 6 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import BottomCommonCell from './BottomCommonCell.js';

class HomeGeustYouLike extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BottomCommonCell leftIcon="cnxh" leftTitle= "猜你喜欢" rightTitle= '' />


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
  },

});

module.exports = HomeGeustYouLike;

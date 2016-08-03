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

class HomeShopCenter extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BottomCommonCell leftIcon="gwzx" leftTitle= "购物中心" rightTitle= "全部4家"/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#dddddd',
    marginTop: 15
  },

});

module.exports = HomeShopCenter;

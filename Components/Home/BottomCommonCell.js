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
  View,
  Image,
  PixelRatio
} from 'react-native';

class BottomCommonCell extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cellViewStyle}>
          <Image source={{uri: this.props.leftIcon}} style={{width: 22 , height: 22 , marginLeft: 8, marginRight: 5}}/>
          <Text>{this.props.leftTitle}</Text>
        </View>
        <View style={styles.cellViewStyle}>
          <Text style={{color: 'gray' , marginRight: 5}}>{this.props.rightTitle}</Text>
          <Image source={{uri: 'home_arrow'}} style={{width: 10 , height:20 , marginRight: 8}} />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 38,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#dddddd',
  },

  cellViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },



});

module.exports = BottomCommonCell;

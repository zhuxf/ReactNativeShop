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
  Image
} from 'react-native';

class ItemCell extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: this.props.imageSource}} style={{width:30,height:25}}/>
        <Text style={{color:'gray',marginTop:5}}>{this.props.title}</Text>
      </View>
    );
  }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: 'white',
  },

});

module.exports = ItemCell;

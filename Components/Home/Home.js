/* jshint esversion: 6 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Image,
  TextInput,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Platform
} from 'react-native';

import HomeTopView from './HomeTopView.js';

var Dimensions = require('Dimensions');
var {width , height} = Dimensions.get('window');

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.renderNavBar()}
        <ScrollView>
          <HomeTopView />
        </ScrollView>

      </View>
    );
  }

  renderNavBar(){
    return(
      <View style={styles.navtopViewStyle}>

        <Text style={{color: 'white' , marginLeft: 5}}>广州</Text>

        <TextInput
          placeholder="请输入"
          style={styles.topTextInputStyle}
          clearButtonMode='always' />
        <View style={styles.topRightViewStyle}>
          <TouchableOpacity onPress={()=> {alert('点击');}}>
            <Image source={{uri: 'icon_homepage_message'}} style={[styles.navRightImageStyle,{marginRight:3}]}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> {alert('点击');}}>
          <Image source={{uri: 'icon_homepage_scan'}} style={styles.navRightImageStyle}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },

  navtopViewStyle: {
    height:Platform.OS == 'ios' ?64 : 54,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255 , 96 ,0 ,1.0)',
    paddingTop: Platform.OS == 'ios' ?20:0,
  },

  topTextInputStyle: {
    width: width * 0.7 ,
    height: 38,
    backgroundColor: 'white',
    borderRadius: 20,
    marginLeft: 8,
    marginRight: 8,
    paddingLeft: 10,
  },

  navRightImageStyle: {
    width: Platform.OS == 'ios' ?28:25,
    height: Platform.OS == 'ios' ?28:25
  },

  topRightViewStyle: {
    flexDirection: 'row',
  },

});

module.exports = Home;

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

import Dimensions from 'Dimensions';
var {width} = Dimensions.get("window");
import MiddleComponentsView from './MiddleComponentsView.js' ;
import HomeTopMiddleLeft from '../../LocalData/HomeTopMiddleLeft.json';

class HomeMiddleView extends Component {
  render() {
    return (
      <View style={styles.container}>

        {this.renderLeftView()}
        <View>
          {this.renderRightView()}
        </View>

      </View>
    );
  }

  renderLeftView(){
    var dataLeft = HomeTopMiddleLeft.dataLeft[0];
    return (
      <View style={{width: width * 0.5 , height: 141 , marginRight: 1 ,backgroundColor: 'white' }}>
        <Image source={{uri: dataLeft.img1}}/>
        <Image source={{uri: dataLeft.img2}}/>
        <Text>{dataLeft.title}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text>{dataLeft.price}</Text>
          <Text>{dataLeft.sale}</Text>
        </View>
      </View>
    );
  }

  renderRightView(){
    var itemArr = [] ;
    var dataRight = HomeTopMiddleLeft.dataRight;
    for (var i = 0; i < dataRight.length; i++) {
      var dataItem = dataRight[i];
      itemArr.push(
        <MiddleComponentsView key={i}
          title = {dataItem.title}
          subTitle = {dataItem.subTitle}
          rightImage = {dataItem.rightImage}
          titleColor = {dataItem.titleColor}
          />
      );
    }

    return itemArr;

  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dddddd',
    flexDirection: 'row',
    marginTop: 15,

  },

});

module.exports = HomeMiddleView;

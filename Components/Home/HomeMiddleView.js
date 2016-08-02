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
  TouchableOpacity
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
      <TouchableOpacity onPress={()=> {alert('点击了' + dataLeft.title);}}>
        <View style={{width: width * 0.5 , height: 129 , backgroundColor: 'white' , justifyContent: 'center' , alignItems: 'center', }}>
          <Image source={{uri: dataLeft.img1}} style={{width: 128 ,height: 42}}/>
          <Image source={{uri: dataLeft.img2}} style={{width: 54 , height: 42 }}/>
          <Text style={{color: 'gray' , fontSize: 16}}>{dataLeft.title}</Text>
          <View style={{flexDirection: 'row' , marginTop: 5 , alignItems: 'center'}}>
            <Text style={{color: 'blue' , fontSize: 11}}>{dataLeft.price}</Text>
            <Text style={{color: 'orange' , fontSize: 9 , backgroundColor: 'yellow'}}>{dataLeft.sale}</Text>
          </View>
        </View>
      </TouchableOpacity>

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

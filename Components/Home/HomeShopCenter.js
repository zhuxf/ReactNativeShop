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
  ScrollView,
  TouchableOpacity
} from 'react-native';

import BottomCommonCell from './BottomCommonCell.js';
import Home_D5 from '../../LocalData/XMG_Home_D5.json';

class HomeShopCenter extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BottomCommonCell leftIcon="gwzx" leftTitle= "购物中心" rightTitle= {Home_D5.tips} />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {this.renderShopItems()}
        </ScrollView>
      </View>
    );
  }

  renderShopItems(){
    var itemArr = [];
    var dataArr = Home_D5.data;
    for (var i = 0; i < dataArr.length; i++) {
      var dataItem = dataArr[i];
      itemArr.push(
        <ShopCenterCell key={i}
          shopImage={dataItem.img}
          shopSale={dataItem.showtext.text}
          shopName={dataItem.name} />
      );
    }

    return itemArr;
  }
}

class ShopCenterCell extends Component {
  render() {
    return(
      <TouchableOpacity onPress={()=> {alert('点击了'+this.props.shopName);}}>
        <View style={{marginRight: 8 , marginTop: 8 , marginLeft: 5 , marginBottom: 8}}>
          <Image source={{uri: this.props.shopImage}} style={{width: 120 , height: 87 , borderRadius: 7}}/>
          <Text style={{position: 'absolute' , bottom: 25, backgroundColor: 'orange', color: 'white', fontSize: 11 , padding: 3}} >{this.props.shopSale}</Text>
          <Text style={{marginTop: -10}}>{this.props.shopName}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 15
  },

});

module.exports = HomeShopCenter;

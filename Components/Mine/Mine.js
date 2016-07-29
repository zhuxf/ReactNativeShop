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

import MyCell from './MyCell.js';
import ItemCell from './ItemCell.js';
import Dimensions from 'Dimensions';
var {width , height} = Dimensions.get("window");


class Mine extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{height: 120,paddingTop:20,backgroundColor: 'rgba(255 , 96 ,0 ,1.0)'}}>
          {this.navTopView()}
          {this.renderButtomView()}
        </View>
        <View>
          <MyCell imageSource='collect' title="我的订单" rightTitle="查看全部订单"/>
          <View style={{flexDirection: 'row' , justifyContent: 'space-around'}}>
            <ItemCell title="代付款" imageSource='order1' />
            <ItemCell title="代使用" imageSource='order2' />
            <ItemCell title="代评价" imageSource='order3' />
            <ItemCell title="退款/售后" imageSource='order4' />

          </View>
        </View>
        <View style={{marginTop:20}}>
          <MyCell imageSource='draft' title="我的钱包" rightTitle="账户余额：100¥"/>
          <MyCell imageSource='like' title="抵用券" rightTitle="0" />
        </View>

        <View style={{marginTop:20}}>
          <MyCell imageSource='card' title="商城积分" />
        </View>

        <View style={{marginTop:20}}>
          <MyCell imageSource='new_friend' title="今日推荐" rightImageSource='me_new'/>
        </View>

        <View style={{marginTop:20}}>
          <MyCell imageSource='pay' title="我要合作" rightTitle="轻松开店，招财进宝" />
        </View>


      </View>
    );
  }

  navTopView(){
    return(
      <View style={styles.navViewStyle}>
        <Image source={{uri: 'see'}} style={{width: 50 , height: 50 ,borderRadius:25 , marginRight: 8,marginLeft:8}}/>
        <Text style={{color: 'white' , fontSize: 16 , fontWeight: 'bold'}}>我的电商</Text>
        <Image source={{uri: 'avatar_vip'}} style={{width: 18, height: 18}}/>
        <Image source={{uri: 'icon_cell_rightarrow'}} style={{marginTop:18,position: 'absolute' , right: 8,width: 10 , height: 20 }}/>

      </View>
    );
  }

  renderButtomView(){
    return(
      <View style={{flexDirection: 'row' ,backgroundColor: 'rgba(255 , 255 ,255 ,0.4)' , position: 'absolute' , bottom: 0}}>
        {this.renderBottomViewItems()}
      </View>
    );
  }

  renderBottomViewItems(){
    var itemArry = [];
    var data = [{'topTitle':'100','bottomTitle':'优惠券'} , {'topTitle':'12','bottomTitle':'评论'},{'topTitle':'50','bottomTitle':'收藏'}];
    for(var i = 0 ; i < data.length; i++){
      var item = data[i];
      itemArry.push(
        <View style={{alignItems: 'center' , width: width*0.34 , height: 40 , borderRightWidth: 1/PixelRatio.get() , borderRightColor: 'white'}} >
          <Text style={{color:'white',marginTop:2}}>{item.topTitle}</Text>
          <Text style={{color:'white',marginTop:2}}>{item.bottomTitle}</Text>
        </View>
      );

    }
    return itemArry;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddddd',
  },
  navViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',

  },



});

module.exports = Mine;

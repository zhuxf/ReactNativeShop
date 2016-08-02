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

import MiddleComponentsView from './MiddleComponentsView.js';
import Home_D4 from '../../LocalData/XMG_Home_D4.json' ;

class HomeMiddleBottomView extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style = {{flexDirection: 'row' , flexWrap: 'wrap'}}>
          {this.renderBottomView()}
        </View>

      </View>
    );
  }

  dealWithImageUrl(url){
      if(url.search("w.h") == -1){
        return url;
      }else{
        var dealUrl = url.replace("w.h" , "120.90");
        return dealUrl;
      }

    }

  renderBottomView(){
    var itemArr = [] ;
    var dataArr = Home_D4.data;
    for (var i = 0; i < dataArr.length; i++) {var dataItem = dataArr[i];
      itemArr.push(
        <MiddleComponentsView key={i}
          title = {dataItem.maintitle}
          subTitle = {dataItem.deputytitle}
          rightImage = {this.dealWithImageUrl(dataItem.imageurl)}
          titleColor = {dataItem.typeface_color}
          />
      );
    }
    return itemArr ;
  }



}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    backgroundColor: "#dddddd"
  },

});

module.exports = HomeMiddleBottomView;

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
  ListView
} from 'react-native';

import BottomCommonCell from './BottomCommonCell.js';
import YouLikeData from '../../LocalData/HomeGeustYouLike.json';


class HomeGeustYouLike extends Component {

  constructor(props) {
  super(props);
  var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  this.state = {
    dataSource: ds.cloneWithRows(YouLikeData.data),
  }
}

  render() {
    return (
      <View style={styles.container}>
        <BottomCommonCell leftIcon="cnxh" leftTitle= "猜你喜欢" rightTitle= '' />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData, sectionID, rowID, highlightRow) => this._renderRow(rowData, sectionID, rowID, highlightRow)}
      />

      </View>
    );
  }

  _renderRow(rowData, sectionID, rowID, highlightRow){
      return(
        <View>
          <View>
            <Image source={{uri: this.dealWithImageUrl(rowData.imageUrl)}} style={{width: 80 , height: 80}}/>
          </View>
          <View>
            <Text>{rowData.title}</Text>
            <Text>{rowData.subTitle}</Text>
            <Text>{rowData.subMessage}</Text>
          </View>
          <View>
            <Text>">"+{rowData.topRightInfo}</Text>
            <Text>{rowData.bottomRightInfo}</Text>
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



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
  },

});

module.exports = HomeGeustYouLike;

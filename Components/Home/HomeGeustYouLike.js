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
  ListView,
  PixelRatio
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
        <View style={{flexDirection: 'row', padding: 8, backgroundColor: 'white',borderBottomColor: '#dddddd', borderBottomWidth: 1/PixelRatio.get()}}>
          <View>
            <Image source={{uri: this.dealWithImageUrl(rowData.imageUrl)}} style={{width: 90 , height: 80, borderRadius: 8}}/>
          </View>
          <View style={{marginLeft: 5, flex: 1}}>
            <View style={styles.titleViewStyle}>
              <Text style={{fontSize: 16, fontWeight: 'bold' }}>{rowData.title}</Text>
              <Text>{rowData.topRightInfo}</Text>
            </View>
            <Text style={{color: 'gray' ,fontSize: 13 , marginTop: 10, marginBottom: 13}}>{rowData.subTitle}</Text>
            <View style={styles.titleViewStyle}>
                <Text style={{color: 'red'}}>{rowData.subMessage}</Text>
                <Text>{rowData.bottomRightInfo}</Text>
            </View>
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

  titleViewStyle:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },


});

module.exports = HomeGeustYouLike;

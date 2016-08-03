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
  ListView
} from 'react-native';

import BottomCommonCell from './BottomCommonCell.js';

class HomeGeustYouLike extends Component {

  constructor(props) {
  super(props);
  // var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  this.state = {
    dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
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
        </View>
      );
  }

  componentDidMount(){
        // 从网络上请求数据
        this.loadDataFormNet();
    }

    loadDataFormNet(){
      var api_url = 'http://api.meituan1.com/group/v2/recommend/homepage/city/20?userId=160495643&userid=160495643&__vhost=api.mobile.meituan.com&position=23.134643%2C113.373951&movieBundleVersion=100&utm_term=6.6&limit=40&wifi-mac=64%3A09%3A80%3A10%3A15%3A27&ci=20&__skcy=X6Jxu5SCaijU80yX5ioQuvCDKj4%3D&__skua=5657981d60b5e2d83e9c64b453063ada&__skts=1459731016.350255&wifi-name=Xiaomi_1526&client=iphone&uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&__skno=FEB757F5-6120-49EC-85B0-D1444A2C2E7B&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_source=AppStore&utm_medium=iphone&version_name=6.6&wifi-cur=0&wifi-strength=&offset=0&utm_campaign=AgroupBgroupD100H0&__skck=3c0cf64e4b039997339ed8fec4cddf05&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594';
        fetch(api_url)
            .then((response) => response.json()) // 下一步
            .then((responseData) => {
               // 更新数据源
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.data)
                });
            })
            .catch((error)=>{
                // 更新数据源
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(youLikeData.data)
                });
            })
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
  },

});

module.exports = HomeGeustYouLike;

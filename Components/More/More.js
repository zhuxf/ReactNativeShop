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

import CompenentCell from './ComponentCell.js';

class More extends Component {
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {this.renderNavigatorView()}
          <View style={{marginTop: 18}}>
            <CompenentCell title="扫一扫"/>
          </View>

          <View style={{marginTop: 18}}>
            <CompenentCell title="省流量模式" isSwitch={true}/>
            <CompenentCell title="消息提醒" />
            <CompenentCell title="邀请好友" />
            <CompenentCell title="清空缓存" rightTitle="15M" />
          </View>

          <View style={{marginTop: 18}}>
            <CompenentCell title="意见反馈"/>
            <CompenentCell title="问卷调查" />
            <CompenentCell title="支付服务" />
            <CompenentCell title="网络诊断" />
            <CompenentCell title="关于应用" />
            <CompenentCell title="我要支付" />
          </View>

          <View style={{marginTop: 18}}>
            <CompenentCell title="精品应用"/>
            <CompenentCell title="热门搜索" />

          </View>

        </View>
      </ScrollView>
    );
  }

renderNavigatorView(){
  return(
    <View style={styles.navtopViewStyle}>
      <Text style={{fontSize: 17 , color: 'white' , fontWeight: 'bold'}}>更多</Text>
      <TouchableOpacity onPress={()=>{alert('点击了头部的设置按钮');}} style={styles.navTopImageStyle} >
        <Image source={{uri: 'icon_mine_setting'}} style={{width: 28 , height: 28}}/>
      </TouchableOpacity>
    </View>
  );
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddddd',
  },

  navtopViewStyle: {
    height:64,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'rgba(255 , 96 ,0 ,1.0)',
    paddingTop: 20,
  },

  navTopImageStyle: {
    position: 'absolute',
    right: 10,
  },

});

module.exports = More;

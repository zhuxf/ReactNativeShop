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
  Text,
  View,
  Navigator,
  Platform
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Home from '../Home/Home';
import HomeDetail from '../Home/HomeDetail.js';
import Shop from '../Shop/Shop';
import More from '../More/More';
import Mine from '../Mine/Mine';



class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedTab: 'home',
    };
  }

  render() {
    return (
      <TabNavigator>
        {/** 首页*/}
        {this.tabNavigatorItem('home' , '首页','','icon_tabbar_homepage' , 'icon_tabbar_homepage_selected', Home)}
        {/** 商城*/}
        {this.tabNavigatorItem('shop' , '商城','','icon_tabbar_merchant_normal' , 'icon_tabbar_merchant_selected' , Shop)}
        {/** 我的*/}
        {this.tabNavigatorItem('mine' , '我的','1' ,'icon_tabbar_mine', 'icon_tabbar_mine_selected' , Mine)}
        {/** 更多*/}
        {this.tabNavigatorItem('more' , '更多','','icon_tabbar_misc' , 'icon_tabbar_misc_selected' , More)}


      </TabNavigator>
    );
  }

 tabNavigatorItem(selectedTab , title , badgeText ,source , selectedSource ,TabView){
   return (
     <TabNavigator.Item
         selected={this.state.selectedTab === selectedTab}
         title={title}
         renderIcon={() => <Image source={{uri: source}} style={styles.iconStyle} />}
         renderSelectedIcon={() => <Image source={{uri: selectedSource}} style={styles.iconStyle} />}
         onPress={() => this.setState({ selectedTab: selectedTab })}
         badgeText= {badgeText}  >

        <Navigator
        initialRoute={{name: {title}, index: 0}}
        renderScene={(route, navigator) =>
          <TabView
            name={route.name}
            onForward={() => {
              var nextIndex = route.index + 1;
              navigator.push({
                name: 'HomeDetail' + nextIndex,
                index: nextIndex,
              });
            }}
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
      />

     </TabNavigator.Item>
   );
 }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  iconStyle: {
    width: Platform.OS == 'ios' ? 30 : 25,
    height: Platform.OS == 'ios' ? 30 : 25
  },

});

export default Main;

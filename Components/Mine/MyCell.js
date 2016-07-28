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

class MyCell extends Component {
  constructor(props){
    super(props);

    console.log(this.props.imageSource);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row',alignItems:'center'}}>
          <Image source={{uri: this.props.imageSource}} style={{width: 28 , height: 28,marginLeft:8 ,marginRight:3,borderRadius:14}}/>
          <Text>{this.props.title}</Text>
        </View>

        <View style={{flexDirection: 'row' , alignItems: 'center'}}>
          {this.rightTitleOrImageView()}
          <Image source={{uri: 'home_arrow'}} style={{width: 10 , height: 20 , marginRight: 8 ,marginLeft:3}}/>

        </View>

      </View>
    );
  }

  rightTitleOrImageView(){
    if(this.props.rightTitle){
      return(
        <Text style={{color: 'gray'}}>{this.props.rightTitle}</Text>
      );
    }else {
      return(
        <Image source={{uri: this.props.rightImageSource}} style={{width: 24 , height: 12 }}/>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:44,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1/PixelRatio.get()
  }
  
});

module.exports = MyCell;

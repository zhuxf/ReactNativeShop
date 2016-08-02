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
  TouchableOpacity,
  PixelRatio
} from 'react-native';

import Dimensions from 'Dimensions';
var {width} = Dimensions.get("window");

class MiddleComponentsView extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <TouchableOpacity onPress={()=> {alert('点击了'+this.props.subTitle);}}>
        <View style={styles.container}>
          <View style={{marginLeft: 5}}>
            <Text style={{fontSize: 17 , color: this.props.titleColor , marginBottom: 5}} >{this.props.title}</Text>
            <Text>{this.props.subTitle}</Text>
          </View>
          <Image source={{uri: this.props.rightImage}} style={{width:  64, height: 42}} />
        </View>
      </TouchableOpacity>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    width: width * 0.5 -1,
    height: 64,
    marginBottom: 1/PixelRatio.get(),
    marginLeft: 1/PixelRatio.get()
  },

});

module.exports = MiddleComponentsView;

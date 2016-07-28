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
  Switch,
  PixelRatio
} from 'react-native';

class CompenentCell extends Component {

  constructor(props){
    super(props);
    this.props = {
      title: '',
      isSwitch: false,
      rightTitle: ''
    };
    this.state = {
      isOn: false
    };

  }



  render() {
    return (
      <View style={styles.container}>
        <Text style={{marginLeft: 8}}>{this.props.title}</Text>
        {this.renderRightView()}
      </View>
    );
  }

  renderRightView(){
    if(this.props.isSwitch){
      return(
        <Switch style={{marginRight: 8}} value={this.state.isOn} onValueChange={()=>{this.setState({isOn:!this.state.isOn});} } />
      );
    }else {
      return(
        <View style={{flexDirection: 'row'}}>
        {this.renderRightTextView()}
        <Image source={{uri: 'home_arrow'}} style={{width: 10 , height:20 , marginRight: 8}} />
        </View>
      );
    }
  }

  renderRightTextView(){

      if(this.props.rightTitle){
        return(
          <Text style={{marginRight:5}}>{this.props.rightTitle}</Text>
        );
      }

  }

}

const styles = StyleSheet.create({
  container: {
    height: 44,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1/PixelRatio.get()
  },

});

export default CompenentCell;

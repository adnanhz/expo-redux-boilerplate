import React, {Component} from "react";
import {Image, Text, View, ActionSheetIOS, Picker, Platform, TouchableOpacity, Button} from "react-native";
import styles from "./style";
import { connect } from 'react-redux';
import { increment } from '../../actions';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
  }

  render() {
    const navigation = this.props.navigation;
    const increment = this.props.increment;
    const i = this.props.i;

    return (
      <View style={{height: 150, backgroundColor: 'green', padding: 50}}>
        <Button onPress={() => {increment(); navigation.navigate('NotHome')}} title="You are at home" />
        <Text>{i}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      i: state.blank.i,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
      increment: () => dispatch(increment()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

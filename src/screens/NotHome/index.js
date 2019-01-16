import React, {Component} from "react";
import {Image, View, ActionSheetIOS, Picker, Platform, TouchableOpacity, Button} from "react-native";
import styles from "./style";
import { connect } from 'react-redux';

class NotHome extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
  }

  render() {
    const navigation = this.props.navigation;

    return (
      <View style={{height: 150, backgroundColor: 'green', padding: 50}}>
        <Button onPress={() => navigation.navigate('Home')} title="You are not at home." />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
    return {
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotHome);

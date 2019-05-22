import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, ButtonGroup } from 'react-native-elements'; // ←追記部分

class HomeScreen extends React.Component {
  constructor(props) { // ← おまじないの入力 props
    super(props); // ← おまじないの文 super(props);

    this.state = {
      selectedIndex: 0,
    };
  }

  
  render() {
    const buttonList = [
      'All',
      'Great (0)',
      'Good (0)',
      'Poor (0)',
    ];

    return (
      <View style={{ flex: 1 }}>
        <ButtonGroup
          buttons={buttonList}
          selectedIndex={this.state.selectedIndex}
        />
      </View>
    );
  }
}


export default HomeScreen;
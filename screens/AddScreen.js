import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements'; // ←追記部分


class AddScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text>This is AddScreen</Text>

        <Icon // ←追記部分
          name="close"
          onPress={() => this.props.navigation.navigate('home')}
        />
      </View>
    );
  }
}


export default AddScreen;
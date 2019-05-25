import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux'; // ←追記部分

import * as actions from '../actions'; // ←追記部分

class DetailScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={{ alignItems: 'center', padding: 20 }}>
            <Text style={{ fontSize: 30, padding: 5 }}>{this.props.detailReview.country}</Text>
            <Text style={{ padding: 5 }}>{this.props.detailReview.dateFrom} ~ {this.props.detailReview.dateTo}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => { // ←追記ここから
  return {
    detailReview: state.review.detailReview
  };
}; // ←追記ここまで


export default connect(mapStateToProps, actions)(DetailScreen); // ←括弧を忘れずに
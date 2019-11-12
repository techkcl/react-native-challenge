import React from 'react'
import { View, TouchableOpacity, StyleSheet, Image, Text} from 'react-native'
import { string } from 'prop-types' //Prop types

//Styles
import Texts from '../styles/Texts';

const CommentItem = ({ comment, name }) => (
  <View style={styles.container}>
    <Text style={Texts.commentTitle}>{name}</Text>
    <Text style={Texts.commentBody}>{comment}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal:20, 
    marginVertical:12
  },
});

CommentItem.propTypes = { 
  name: string,
  comment: string
};

export default CommentItem
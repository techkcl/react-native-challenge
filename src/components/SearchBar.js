import React from 'react'
import { View, TextInput, StyleSheet, ViewPropTypes } from 'react-native'
import { string, number, func} from 'prop-types' //Prop types

//Components
import Icon from 'react-native-vector-icons/Ionicons';

//Styles
import Texts from '../styles/Texts';
import Colors from '../styles/Colors';

const SearchBar = ({ placeholder, style, onChangeText }) => (
  <View style={[styles.container, style]}>
    <TextInput
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={Colors.text.placeholder}
      style={[Texts.searchBar, styles.textInput]}
    />
    <Icon 
      name='ios-search' 
      size={20}
      color={Colors.text.dark}
      style={styles.icon}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.border,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex:1,
  },
  icon:{
    marginRight: 8,
  },
});

SearchBar.propTypes = { 
  placeholder: string,
  style: ViewPropTypes.style,
  onChangeText: func
};

export default SearchBar
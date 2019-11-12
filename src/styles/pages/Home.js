import { StyleSheet, Platform } from 'react-native'
import Colors from '../Colors';

export default StyleSheet.create({
    headerContainer: {
      backgroundColor: Colors.primary,
      paddingHorizontal: 20,
      paddingTop: 20,
      paddingBottom: 48,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    orderByContainer: {
      flexDirection: 'row',
      marginTop:8,
    },
    filters: {
      marginHorizontal: -4,
      marginTop:12
    },
    filterContainer: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-evenly'
    },
    selectedFilterItem: {
      backgroundColor: Colors.secondary,
      flex: 1,
      paddingVertical: 8,
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 4,
    },
    unselectedFilterItem: {
      flex: 1,
      paddingVertical: 8,
      borderWidth:2,
      borderColor: Colors.text.primaryLight,
      borderRadius: 4,
      alignItems: 'center',
      marginHorizontal: 4,
    },  
});
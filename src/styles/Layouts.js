import { StyleSheet, Platform } from 'react-native'
import Colors from './Colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    divider: {
        marginVertical:16,
        borderBottomWidth:1,
        borderColor:Colors.text.grey,
    }
})
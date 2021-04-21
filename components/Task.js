import React from 'react';
import {View, Text, StyleSheet, ProgressViewIOSComponent, TouchableOpacity} from 'react-native';

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
                </View> 
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor: '#F1F8F7',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
            flexDirection:'row',
            alignItems: 'center',
            flexWrap: 'wrap'
        },
    square: {
        width: 13,
        height: 13,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 2,
        marginRight: 15,

    },
    itemText: {
        maxWidth: '80%'
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#DD4B2C',
        borderWidth: 2,
        borderRadius: 5,

    },

});

export default Task;
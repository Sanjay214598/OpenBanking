import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from 'react-navigation'
import FillCardDetailsView from './Views/FillCardDetailsView';
import styles from './UtilComponents/main.style';

class MyPage5 extends Component {
    render() {
        return (
            <ImageBackground  style={styles.main}>
						<FillCardDetailsView/>
             </ImageBackground>
        );
    }
}

export default MyPage5;
import * as React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import { shadow } from 'react-native-paper';




const SettingsScreen = () => {
    return (
        <View style ={styles.container}>
            
            <Text>Settings Screen</Text>
            <View style={styles.neumorphicCardL}>
            <View style={styles.neumorphicCardD}>

            <Button
                title="Click Here"
                onPress={() => alert('Button Clicked')}
            />
            </View>
            </View>
        </View>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
    container:{
        
        
            "position": "absolute",
            "width": 411,
            "height": 823,
            "alignItems": 'center',
            "backgroundColor": "#CCD9E6"
            
    },
    neumorphicCardL:{
        "backgroundColor": "#C7EDED",
        "borderTopLeftRadius": 23,
        "borderTopRightRadius": 23,
        "borderBottomRightRadius": 23,
        "borderBottomLeftRadius": 23,
       

    },
    neumorphicCardD:{
       
    },


});
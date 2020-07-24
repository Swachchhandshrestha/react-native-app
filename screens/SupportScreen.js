import * as React from 'react';
import {View, Text, Button, StyleSheet,ScrollView,StatusBar,Image,ImageBackground} from 'react-native';
import Caraousel from 'react-native-snap-carousel';




const SupportScreen = () => {
    return (
        <View style ={styles.container}>
            <Text>Support Screen</Text>
            <Button
                title="Click Here"
                onPress={() => alert('Button Clicked')}
            />
        </View>
        
        
    );
};

export default SupportScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});
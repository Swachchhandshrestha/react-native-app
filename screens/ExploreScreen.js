import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';


function ExploreScreen({ navigation }) {
    return (
        <View style={styles.container}>        
        <Text>This will contain details of the items added later...</Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.push('Details')}
        />
          <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
          <Button
          title="GoBack"
          onPress={() => navigation.goBack('Details')}
        />
          <Button
          title="Go to first screen"
          onPress={() => navigation.goBack('Details')}
        />
      </View>
    );
  }

  export default ExploreScreen;

  const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

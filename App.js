import * as React from 'react';
import {StyleSheet, Text, View, Button, TextInput, StatusBar, TouchableWithoutFeedback, SafeAreaView} from 'react-native';
import MyBottomPopUp from './app/screens/MyBottomPopUp';

export default function App() {
  let popupRef  = React.createRef();
  const onShowPopup = ()=>{
    popupRef.show();
  }
  
  return(
    <View style={{ flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
          <Button title="Click Me" onPress={onShowPopup} />
          <MyBottomPopUp ref={(target) => popupRef = target}
            title="My Popup"
          >
            <Text>Boom</Text>
          </MyBottomPopUp>
      </SafeAreaView>
    </View>
  );
}


//TODO:
// Check Portal first
// Check BottomNav Settings
// Check navigation
import * as React from 'react';
import {StyleSheet, View, Button, TextInput, StatusBar, TouchableWithoutFeedback, SafeAreaView} from 'react-native';
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
          title="LOGIN"
        >
          <View style={{padding: 4}}>
            <View style={[styles.mt1]}>
              <Button
                onPress={()=>{}}
                title="Login With Facebook"
                color="#3B5998"
              />
            </View>
            <View style={[styles.mt1]}>
              <Button
                onPress={()=>{}}
                title="Login With Google"
                color="grey"
              />
            </View>
            <View style={[styles.mt1]}>
              <Button
                onPress={()=>{}}
                title="Login with Mobile / Email"
                color="#EE743C"
              />
            </View>
          </View>
        </MyBottomPopUp>
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  mt1:{
    marginTop: 15
  }
});

//TODO:
// Check Portal first
// Check BottomNav Settings
// Check navigation
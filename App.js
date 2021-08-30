import * as React from 'react';
import {StyleSheet, View, StatusBar, SafeAreaView} from 'react-native';
import LoginOptions from './app/screens/LoginOptions';
import LoginUI from './app/screens/LoginUI';
export default function App() {
  return(
    <View style={{ flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <LoginOptions />
        <LoginUI />
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
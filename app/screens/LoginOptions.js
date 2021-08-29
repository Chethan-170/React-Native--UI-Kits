import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper';
import CustomBottomSheet from './core/CustomBottomSheet';
import Welcome from './welcome/Welcome';
import WelcomeBottomSheet from './welcome/WelcomeBottomSheet';

export default function LoginOptions() {
    let loginOptionsPopupRef  = React.createRef();
    let welcomePopupRef = React.createRef();

    const showLoginOptionsPopup = ()=>{
        loginOptionsPopupRef.show();
    }
    const handleLoginOption =()=>{
        loginOptionsPopupRef.close();
        welcomePopupRef.show();
    }
    const renderLoginOptionsPopup = ()=>{
        return (
                    <CustomBottomSheet ref={(target)=> loginOptionsPopupRef = target}
                        title="LOGIN"
                        showCancel={true}
                        >
                        <View style={{padding: 4, marginTop: 4}}>
                            <View style={[styles.mt1]}>
                                <Button style={{padding: 5}} color="#3B5998"
                                    icon="facebook" mode="contained" onPress={handleLoginOption}>
                                    Login with Facebook
                                </Button>
                            </View>
                            <View style={[styles.mt1]}>
                                <Button style={{padding: 5}} color="#F2F1F1"
                                    icon="google" mode="contained" onPress={handleLoginOption}>
                                    Login with Google
                                </Button>
                            </View>
                            <View style={[styles.mt1]}>
                                <Button style={{padding: 5}} color="#EE743C"
                                    icon="facebook" mode="contained" onPress={handleLoginOption}>
                                    Login with Mobile / Email
                                </Button>
                            </View>
                        </View>
                    </CustomBottomSheet>
        );
    }
    const renderWelcomePopup = ()=>{
        return (
                    <WelcomeBottomSheet ref={(target)=> welcomePopupRef = target}
                        title="Welcome to Health and Glow"
                        >
                            <Welcome />
                    </WelcomeBottomSheet>
        );
    }
    return (
        <>
            <Button style={{padding: 5}}
                mode="contained" onPress={showLoginOptionsPopup}>
                Click Me
            </Button>
            { renderLoginOptionsPopup() }
            { renderWelcomePopup() }
        </>
    )
}
const styles = StyleSheet.create({
    mt1:{
      marginTop: 15
    }
  });
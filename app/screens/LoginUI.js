import React from 'react'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native-paper';
import LoginBottomSheet from './login/LoginBottomSheet';
import Login from './login/Login';

import { Formik } from 'formik';

export default function LoginUI() {
    let loginPopupRef = React.createRef();

    const showLoginPopup = ()=>{
        loginPopupRef.show();
    }

    const renderLoginPopup = ()=>{
        return (
            <Formik
                initialValues={{ email_or_mobile: 'example@123.com', password: ''}}
                onSubmit={(values)=>{
                    console.log('submitted',values);
                }}
            >
                {
                    (formikProps)=>(
                        <LoginBottomSheet ref={(target)=> loginPopupRef = target}
                            title="Login"
                            formikProps={formikProps}
                            >
                                <Login formikProps={formikProps} />
                        </LoginBottomSheet>
                    )
                }
            </Formik>
        );
    }
    return (
        <>
        
            <Button style={{padding: 5, margin: 5}}
                color={"black"}
                mode="contained" onPress={showLoginPopup}>
                Login UI
            </Button>
            { renderLoginPopup() }
        </>
    )
}
const styles = StyleSheet.create({
    mt1:{
      marginTop: 15
    }
  });
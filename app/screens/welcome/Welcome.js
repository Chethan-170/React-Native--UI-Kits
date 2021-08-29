import React,{ useState } from 'react'
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { TextInput, Text } from 'react-native-paper';

export default function Welcome({formikProps}) {
    const [hidePassword, setHidePassword] = useState(true)
    return (
        <View style={{padding: 4, marginTop: 30}}>
             <TextInput
                label="Email or Mobile number"
                onChangeText={formikProps.handleChange('email_or_mobile')}
                value={formikProps.values.email_or_mobile}
            />
            <View style={{marginTop: 30}}>
                <TextInput
                    label="Password"
                    secureTextEntry={hidePassword}
                    right={
                        <TextInput.Icon 
                        onPress={()=>{ setHidePassword(!hidePassword) }}
                        name= {(hidePassword) ? 'eye-off' : 'eye'} />
                    }
                    onChangeText={formikProps.handleChange('password')}
                    value={formikProps.values.password}
                />
                <View style={{marginTop: 10}}>
                    <View style={{alignSelf: 'flex-end'}}>
                        <TouchableWithoutFeedback onPress={()=>console.log('cliocked')}>
                            <Text style={{fontSize: 16}}>Forgot password?</Text>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>            
        </View>
    )
}

const styles = StyleSheet.create({})

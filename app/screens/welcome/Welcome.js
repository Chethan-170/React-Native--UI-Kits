import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { TextInput, Text } from 'react-native-paper';

export default function Welcome({formikProps}) {
    return (
        <View style={{padding: 4, marginVertical: 30}}>
             <TextInput
                label="Email or Mobile number"
                onChangeText={formikProps.handleChange('email_or_mobile')}
                value={formikProps.values.email_or_mobile}
            />            
        </View>
    )
}

const styles = StyleSheet.create({})

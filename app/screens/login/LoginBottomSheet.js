import React, { Component } from 'react'
import { Text, View, Dimensions, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Button } from 'react-native-paper';
import Modal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Formik } from 'formik';

const deviceHeight = Dimensions.get('window').height;

export default class LoginBottomSheet extends Component {
    constructor(props){
        super(props);
        this.state = {
            showStatus: false
        }
    }
    show = ()=>{
        this.setState({showStatus: true});
    }
    close = ()=>{
        this.setState({showStatus: false});
    }
    renderOutsideTouchable = ()=>{
        const view = <View style={{flex: 1, width: '100%'}}/>
        if(this.showStatus) return view;
        return(
            <TouchableWithoutFeedback onPress={this.close} style={{ flex: 1, width: '100%'}}>
                {view}
            </TouchableWithoutFeedback>
        )
    }
    renderTitle = ()=>{
        const { title, showCancel } = this.props;
        return (
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}> {title} </Text>
                    {
                       (showCancel) && <TouchableWithoutFeedback onPress={this.close}>
                                            <AntDesign name={'close'} size={25} />
                                        </TouchableWithoutFeedback>   
                    }
                </View>
            );
    }
    renderContent = ()=>{
        const { children: content } = this.props;
        return <View>{ content }</View>;
    }
    renderLoginBottomSheet = ()=>{
        return(
                <Modal 
                    isVisible={this.state.showStatus}
                    swipeDirection={'down'}
                    onSwipeComplete={(e) => { this.close() }}
                    backdropOpacity= {0.5}
                    onBackButtonPress={()=>{ this.close() }}
                    style={{ justifyContent: 'flex-end', margin: 0, }}
                >
                    <View style={styles.container}>
                        <View style={styles.bottomViewContainer}>
                            <View style={styles.header}>
                                {this.renderTitle()}
                                {this.renderContent()}
                            </View>
                            <View style={styles.footer}>
                                <Button style={{padding: 5}} color="#48566B" mode="contained" onPress={ this.close }>
                                    Back
                                </Button>
                                <Button style={{padding: 5}} color="#48566B" mode="contained" onPress={this.props.formikProps.handleSubmit}>
                                    Next
                                </Button>
                            </View>
                        </View>
                    </View>
                </Modal>            
        );
    }
    render() {
        return (
            <View>
                {this.renderLoginBottomSheet()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bottomViewContainer:{
        backgroundColor: '#FFFFFF',
        width: '100%',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        maxHeight: deviceHeight * 0.6
    },
    container:{
        flex: 1,
        backgroundColor: 'rgba(116, 117, 116, 0.5)',
        justifyContent:'flex-end',
        alignItems: "center"
    },
    footer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 70,
        width: '100%',
        backgroundColor: '#23344D',
        paddingHorizontal: 10
    },
    footerButton:{
        // width: 100,
    },
    header:{
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    titleContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleText:{
        color: "#1B2E44",
        fontSize: 24,
        fontWeight: '500'
    }
});
import React from 'react'
import { StyleSheet, Text, View, Modal, Dimensions, TouchableWithoutFeedback } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';

const deviceHeight = Dimensions.get('window').height;

export default class MyBottomPopUp extends React.Component {
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
        const { title } = this.props;
        return (
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}> {title} </Text>
                    <TouchableWithoutFeedback onPress={this.close}>
                        <AntDesign name={'close'} size={25} />
                    </TouchableWithoutFeedback>
                </View>
            );
    }
    renderContent = ()=>{
        const { children: content } = this.props;
        return <View>{ content }</View>;
    }
    render() {
        let { showStatus } = this.state;
        return (
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={showStatus}
                onRequestClose={this.close}
            >
                <View style={styles.container}>
                    {/* {this.renderOutsideTouchable()} */}
                    <View style={styles.bottomViewContainer}>
                        {this.renderTitle()}
                        {this.renderContent()}
                    </View>
                </View>
            </Modal>
        )
    }
}
const styles = StyleSheet.create({
    bottomViewContainer:{
        backgroundColor: '#FFFFFF',
        width: '100%',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 15,
        maxHeight: deviceHeight * 0.4
    },
    container:{
        flex: 1,
        backgroundColor: 'rgba(116, 117, 116, 0.5)',
        justifyContent:'flex-end',
        alignItems: "center",
        // shadowOffset: {
        // width: 0,
        // height: 2
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 4,
        // elevation: 5
    },
    titleContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleText:{
        color: "#1B2E44",
        fontSize: 20,
        fontWeight: '400'
    }
});
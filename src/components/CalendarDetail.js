import React, { Component } from 'react';
import { 
    Text,
    View,   
    ActionSheetIOS,
    Button,
    TouchableHighlight
} from 'react-native';
import PopupDialog, { SlideAnimation, DialogTitle, DialogButton } from 'react-native-popup-dialog';
import Icon from 'react-native-vector-icons/Ionicons';

const BUTTONS = [
        'Send via Email',
        'Tweet this',
        'Cancel'
    ];
 const NOTI = [
     'this function is still developed',
     'Got it'
 ];
 const CANCEL_INDEX = 2;
 const GOT_NOTI = 1;

class CalendarDetail extends Component {
    state = {
        clicked: 'none'
    };
    /*ACTION SHEET*/
    showActionSheet = () => {
            ActionSheetIOS.showActionSheetWithOptions({
                options: BUTTONS,
                cancelButtonIndex: CANCEL_INDEX
            },
            (buttonIndex) => {
                this.setState({ clicked: BUTTONS[buttonIndex] })
            });
        };
    showNoti = () => {
        ActionSheetIOS.showActionSheetWithOptions({
            options: NOTI,
            cancelButtonIndex: GOT_NOTI
        },
        (buttonIndex) => {
            this.setState({ clicked: NOTI[buttonIndex] });
        });
    }
    /*END ACTION SHEET*/


    render() {
        console.log(this.props);
        return (  
            <View style={styles.contentStyle}>
                <Text style={styles.nameStyle}>
                    Annual Shareholders' Meeting 2018
                </Text>
                <Text style={styles.timeStyle}>
                    22/02/2018 All day
                </Text>
                    <View style={styles.borderStyle}>
                        <Text style={styles.descriptionStyle}>
                            Event Type <Text style={{ color: '#999' }}>Annual Shareholders' Meeting</Text>
                        </Text>
                     </View> 
                     
                     <View style={styles.socialStyle}>
                         <View style={styles.borderDownload}>
                            <Text                           
                                 onPress={() => {
                                     this.popupDialog.openDialog();
                                 }}
                                 style={styles.downloadBtnStyle}
                            >
                            Download
                            </Text>   
                         </View>
                        
                        <Text 
                            onPress={this.showActionSheet}  
                            style={styles.shareBtnStyle}
                        >
                            Share
                        </Text>
                     </View>  
             <PopupDialog 
                                width={300}
                                height={430}
                                
                                overlayBackgroundColor={'#000'}
                                overlayOpacity={0.7}
                                dialogTitle={<DialogTitle                                           
                                               haveTitleBar={false} 
                                               
                                              />}
                                ref={(popupDialog) => { this.popupDialog = popupDialog; }}
                                dialogAnimation={new SlideAnimation({ slideFrom: 'top' })}
                         >
                                <View>
                                    <Text 
                                        style={ styles.downloadTextStyle}
                                    >
                                        Download All {'\n'} Upcoming Events
                                    </Text>
                                    <Icon 
                                        name='ios-download-outline'
                                        style={styles.iconStyle}
                                    />

                                    <Text style={styles.downloadDescStyle}>
                                        Downloading will add upcoming {'\n'}
                                        events in your phone calendar. {'\n'}
                                        You can delete them anytime.
                                    </Text>
                                
                                <TouchableHighlight>
                                    <View 
                                        style={{ 
                                            flexDirection: 'row', 
                                            justifyContent: 'center',                                                                              
                                        }}
                                    >
                                        <Icon 
                                        name='ios-checkmark-outline'
                                        style={styles.decisionStyle}                      
                                        /> 
                                    <Text style={{ marginTop: 30, fontSize: 18, marginLeft: 10 }}>
                                        Yes
                                    </Text>
                                        </View>                   
                                    </TouchableHighlight>  

                                    <TouchableHighlight>
                                    <View 
                                        style={{ 
                                            flexDirection: 'row', 
                                            justifyContent: 'center',
                                            borderTopColor: '#ddd',
                                            borderTopWidth: 1,
                                            borderStyle: 'solid',
                                            marginTop: -10,
                                            paddingTop: -10
                                        }}
                                    >
                                  
                                        <Icon 
                                        name='ios-close-outline'
                                        style={styles.decisionStyle}                      
                                        /> 
                                    <Text style={{ marginTop: 30, fontSize: 18, marginLeft: 10 }}>
                                        No
                                    </Text>
                                        </View>                   
                                    </TouchableHighlight>                               
                                 </View>
                </PopupDialog>                                                                   
            </View>           
        );
    }
}
const styles = {
    iconStyle: {
        color: '#000',
        fontSize: 85,    
        textAlign: 'center', 
    },
    downloadTextStyle: {
        textAlign: 'center',
        fontSize: 25,       
    },
    downloadDescStyle: {
        fontSize: 19,
        textAlign: 'center'
    },
    decisionStyle: {
        color: '#000',
        fontSize: 70,
    },

    socialStyle: {
        flexDirection: 'row',
        borderTopWidth: 1.5,
        borderStyle: 'solid',
        borderColor: '#ababab',
        marginTop: 330,
        paddingBottom: 10,
        position: 'absolute',
        marginLeft: 2,
        backgroundColor: '#f3f3f3'
    },
    borderDownload: {
        borderStyle: 'solid',
        borderColor: '#ddd',
        borderRightWidth: 1,
        paddingBottom: 10
    },
    downloadBtnStyle: {
        color: '#157efb',
        fontSize: 17,
        paddingLeft: 40,
        paddingTop: 10,
        paddingRight: 70,
        paddingBottom: 20
    },
    shareBtnStyle: {
        color: '#157efb',
        fontSize: 17,
        paddingLeft: 70,
        paddingTop: 10,
        paddingRight: 70,
        paddingBottom: 20
    },
    container: {
        flex: 1,
        marginTop: 150,
    },
    contentStyle: {
        paddingTop: 80
    },
    nameStyle: {
        paddingLeft: 25,
        color: '#000',
        fontSize: 18,
        paddingBottom: 8
    },
    timeStyle: {
        color: '#999',
        fontSize: 16,
        paddingLeft: 25,
        paddingBottom: 6,    
    },
    descriptionStyle: {
        fontSize: 16, 
        marginTop: 13,
        marginBottom: 13
    },
    borderStyle: {
        borderTopWidth: 1,
        borderRightWidth: 0,
        borderBottomWidth: 1,
        borderTopColor: '#ddd',
        borderBottomColor: '#ddd',
        borderStyle: 'solid',  
        marginTop: 10,
        marginLeft: 25,    
    }
};
export default CalendarDetail;

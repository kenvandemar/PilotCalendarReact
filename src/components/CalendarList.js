import React, { Component, fetch } from 'react';
import { 
    Text, 
    View,
    TouchableHighlight,
    ScrollView,
    ListView
    } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { Actions as NavigationActions } from 'react-native-router-flux';
import axios from 'axios';
import dateFormat from 'dateformat';
import CalendarDetail from './CalendarDetail';

const apiName = 'fincalendar';
const apiPath = 'api';
const apiVersion = 'v1';
const apiBaseURL = 'http://10.10.15.8/myirappapi2/';

const apiURL = `${apiBaseURL} + ${apiPath} + '/' + ${apiVersion} + '/'`;
const serviceURL = `${apiURL} + ${apiName}`;
const eventTypeApiName = 'eventtype';

let companyCode;

class CalendarList extends Component {


    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(['row1', 'row2'])
            };
        }

    componentWillMount() {
        this.fetchData();
    }

    onSubmitPressed(event) {
        this.props.navigator.push({   
                title: 'Secure Page',         
                component: CalendarDetail,
                passProps: { Type: event.EventType }
                
        });
    }



     fetchData() {      
        axios.get('http://10.10.15.8/myirappapi2/api/v1/fincalendar/dk-nzmb/en-GB', {
            method: 'GET',
            headers: {
                 Authorization: 'Basic bm9ybWFsdXNlcjpwNmVqYVByRQ=='
             }
        })  
            .then((responseData) => {
                   this.setState({
                       dataSource: this.state.dataSource.cloneWithRows(responseData.data),
                       loaded: true,
                   });               
            }); 
    }

    goDetail = () => NavigationActions.calendarDetail;

    renderEvent(event) {
        const eventArray = [];
        let eventTime = new Date();
        let eventStart = new Date();
        let eventEnd = new Date();
        let isAllDay = '';

        eventArray.push(event);
       for (let i = 0; i < eventArray.length; i++) {
           eventTime = dateFormat(eventArray[i].EventDate, 'mmmm yyyy');
           eventStart = dateFormat(eventArray[i].EventDate, 'mm/dd');
           eventEnd = dateFormat(eventArray[i].EventEndDate, 'mm/dd');

           if (eventArray[i].IsAllDayEvent === true) {
                isAllDay = <Text>All day</Text>;
           }
       }

        return (
        <View style={styles.generalStyle}>
            <View style={styles.generalStyle}>
                <Text style={styles.timeStyle}>
                   {eventTime}       
                </Text>
            <TouchableHighlight 
                underlayColor={'#c5c5c5'}
                onPress={NavigationActions.calendarDetail}
                style={styles.touchStyle}
            >
                <View>
                    <Text style={styles.nameStyle}>
                            {event.EventType}
                    </Text>
                 <Text style={styles.contentStyle}>
                        {eventStart} - {eventEnd}                                                             
                        </Text>
                    <Icon 
                        name='chevron-thin-right'
                        style={styles.iconStyle}
                    > 
                    </Icon>  
                        <Text style={styles.contentStyle}>
                            {event.Title}
                        </Text>
                    </View>
            </TouchableHighlight>   

            </View>
             
        </View>
        );
    }
 
    render() {  
        return (      
           <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderEvent}
           />        
        );
    }
}

const styles = {
    generalStyle: { 
       marginRight: 5
    },
    timeStyle: {
        height: 50,
        backgroundColor: '#f7f7f7',
        paddingTop: 15,  
        paddingLeft: 15,  
        fontSize: 16,
    },
    contentStyle: {
        color: '#999',
        fontSize: 16,
        paddingLeft: 25,
        paddingBottom: 6,
        
    },
    nameStyle: {
        paddingLeft: 25,
        color: '#000',
        fontSize: 18,
        paddingBottom: 8
    },
    iconStyle: {
        color: '#cdccd1',
        fontSize: 20,    
        marginLeft: 340,
        marginTop: -25,
        marginBottom: 7,    
    }
};
export default CalendarList;

import React, { Component } from 'react';
import {  
    StyleSheet,
    View
} from 'react-native';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import axios from 'axios';
import CalendarList from './CalendarList';
import Sticky from './Sticky';

 // setup HTTP header
const httpRequestHeader = {
    headers: {
         Authorization: 'Basic bm9ybWFsdXNlcjpwNmVqYVByRQ=='
    }
};
class Calendar extends Component {

    //sending default this.state
    state = { events: [] };
    
  
    //After fetching data, we take that state then update componen state
    componentWillMount() {
        axios.get('http://10.10.15.8/myirappapi2/api/v1/fincalendar/dk-nzmb/en-GB/', httpRequestHeader)
                .then(response => this.setState({ events: response.data }));
    }
    renderEvent() {
        return this.state.events.map(event => 
       console.log(event));
    }
    render() {
        return (    
        <ScrollableTabView 
            style={styles.container}
            initialPage={0}
            tabBarUnderlineStyle={{ backgroundColor: 'rgba(255,255,255,0)' }}
            renderTabBar={() => <ScrollableTabBar 
                                  activeTextColor="white" 
                                  style={styles.styleTab}
                                  inactiveTextColor="white"
                                  underlineColor="white"   
                                                        
                                 />}
        >
            <CalendarList tabLabel="ALL" />
            <Sticky tabLabel="RESULTS" />
            <CalendarList tabLabel="REFERENCE" />
            <CalendarList tabLabel="ROADSHOW" />
            <CalendarList tabLabel="PRESENTATION" />
            <CalendarList tabLabel="SEMINAR" />
            <CalendarList tabLabel="SILENT PERIOD" />
            <CalendarList tabLabel="ANNUAL SHAREHOLDERS' MEETING" />
            <CalendarList tabLabel="CAPITAL MARKETS DAY" />
            <CalendarList tabLabel="ANALYST DAY" />
            <CalendarList tabLabel="INVESTOR DAY" />
            
      </ScrollableTabView>
  
        );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 2,
    marginTop: 62,
  },
  styleTab: {
   backgroundColor: '#4d4d4f',
   borderWidth: 1,
   borderColor: '#fff',
   borderStyle: 'solid'
  },
  textStyle: {
    color: '#fff'
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Calendar;

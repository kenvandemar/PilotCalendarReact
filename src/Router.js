import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Calendar from './components/Calendar';
import CalendarDetail from './components/CalendarDetail';

const RouterComponent = () => {
    return (
        <Router
        navigationBarStyle={{ backgroundColor: '#4d4d4f', borderBottomColor: '#4d4d4f' }}
        titleStyle={{ color: '#fff' }}
        backButtonImage={require}
        >
            <Scene key="main">
                <Scene             
                    key='Calendar' component={Calendar} title='Financial Calendar'     
                />
                 <Scene 
                    key='calendarDetail' 
                    component={CalendarDetail} 
                    title='Financial Calendar'
                    
                 /> 
            </Scene>
        </Router>
    );
};

export default RouterComponent;

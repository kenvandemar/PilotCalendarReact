import React, { Component } from 'react';
import Router from './Router';

class App extends Component {
    render() {
        return (
            <Router style={styles.headerStyle} />
        );
    }
}
const styles = {
    headerStyle: {
        backgroundColor: '#4d4d4f'
    }
};
export default App;

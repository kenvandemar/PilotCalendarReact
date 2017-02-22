import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';

class Sticky extends Component {
    render() {
        return (
     <View style={styles.container}>
  <Text
    title="Open Dialog"
    onPress={() => {
      this.popupDialog.openDialog();
    }}
  >
  Download
  </Text>
  <PopupDialog
    ref={(popupDialog) => { this.popupDialog = popupDialog; }}
    dialogAnimation = { new SlideAnimation({ slideFrom: 'top' }) }
  >
    <View>
      <Text>Hello</Text>
    </View>
  </PopupDialog>
</View>

            /*<ParallaxScrollView
                    backgroundColor="blue"
                    contentBackgroundColor="pink"
                    parallaxHeaderHeight={50}
                    renderForeground={() => (
                                <View style={{ height: 300, flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
                                    <Text>Scroll me</Text>
                                </View>
                                    )}
            renderStickyHeader={() => (   
                     <View tyle={{ height: 500 }}>
                        <Text>Scroll me</Text>  
                    </View>          
                 )}
             stickyHeaderHeight={20}
            >
                <View tyle={{ height: 100 }}>
                        <Text>Scroll me</Text>  
                </View> 
    </ParallaxScrollView>*/
        );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dialogContentView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Sticky;

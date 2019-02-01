import React from 'react';
import {Text, View, WebView} from 'react-native';
import {Font} from 'expo';

class AboutScreen extends React.Component {

    state = {
        fontLoaded: false
    }

    async componentDidMount() {
        await Font.loadAsync({
            'LuckiestGuy-Regular': require('../../assets/fonts/LuckiestGuy-Regular.ttf'),
            'Shadows' : require('../../assets/fonts/ShadowsIntoLight.ttf')
        })
        this.setState({
            fontLoaded: true
        }) 
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#00134d', justifyContent: 'center', alignItems: 'center'}}>
                <View style={{alignItems: 'center', marginTop: '15%'}}>
                   {this.state.fontLoaded? <Text style={{color: 'white',fontFamily: 'LuckiestGuy-Regular', fontSize: 40}}>About App</Text>: null }
                </View>
                <View style={{marginLeft: '3%', marginRight: '3%'}}>
                    {this.state.fontLoaded? <Text style={{color: 'white', fontFamily: 'Shadows', fontSize: 25, textAlign: 'center'}}>
                        This is a simple calulator which have all the basic functionality. This app is build on Expo.
                        It has all basic calulation functionality like Add, Subtract, Multiply and Divide. This app dont contain 
                        any external modules and library. This app is user-friendly. To use this app , one's dont need any tutorial.
                        This is a initial version so there aren't any trignometric calculation. ENJOY !!!

                    </Text>: null}
                </View>
            </View>
        )
    }
}

export default AboutScreen;
import React, { Component } from "react"
import { View, Text, ActivityIndicator, StyleSheet } from "react-native"
import firebase from "firebase"
var config = {
    apiKey: "AIzaSyBKXOwW7iAziPKZ3BazUbhv2hhAK461p2U",
    authDomain: "pilarek4id2.firebaseapp.com",
    databaseURL: "https://pilarek4id2.firebaseio.com",
    projectId: "pilarek4id2",
    storageBucket: "pilarek4id2.appspot.com",
    messagingSenderId: "119676624468",
    appId: "1:119676624468:web:16d9bbdc5598bd82fe17c1",
    measurementId: "G-0SD4EEXWHD"
}
firebase.initializeApp(config)

class Loading extends Component {
    static navigationOptions = {
        // header: null,
        title: "Ładowanie",
        headerStyle: {
            backgroundColor: "#FFA000"
        },
        headerTitleStyle: {
            color: "#ffffff"
        }
    }
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount = async () => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.props.navigation.navigate("s4")
            } else {
                this.props.navigation.navigate("s3")
            }
        })
    }

    render() {
        return (
            <View style={styles.containerf}>
                <ActivityIndicator
                    size="large"
                    color="#0000ff"
                    animating={true}
                />
                <Text> Loading </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    containerf: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})
export default Loading

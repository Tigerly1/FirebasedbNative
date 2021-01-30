import React, { Component } from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import * as Font from "expo-font"
class Home extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)
        this.state = {
            fontloaded: false
        }
    }
    componentDidMount = async () => {
        await Font.loadAsync({
            myfont: require("./Lato-Regular.ttf")
        })
        this.setState({ fontloaded: true })
    }
    render() {
        return this.state.fontloaded ? (
            <View style={styles.container}>
                <View style={styles.containerf}>
                    <Text style={styles.text}>Firebase App</Text>
                    <Text style={styles.textt}>firebase authentication</Text>
                    <Text style={styles.textt}>firebase database</Text>
                </View>
                <View style={styles.containers}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("s2")}
                    >
                        <View style={{ width: "100%" }}>
                            <Text
                                style={{
                                    fontSize: 36,
                                    width: "100%",
                                    textAlign: "center"
                                }}
                            >
                                START
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        ) : null
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        flexDirection: "column"
    },
    containerf: {
        flex: 1,
        backgroundColor: "#FFC107",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    containers: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontFamily: "myfont",
        fontSize: 46,
        alignSelf: "center",
        color: "white"
    },
    textt: {
        fontFamily: "myfont",
        fontSize: 24,
        alignSelf: "center",
        color: "white"
    }
})
export default Home

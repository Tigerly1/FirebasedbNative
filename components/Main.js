import React, { Component } from "react"
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    ActivityIndicator
} from "react-native"
import firebase from "firebase"

class Main extends Component {
    static navigationOptions = {
        // header: null,
        title: "stacja rowerowa w ny",
        headerStyle: {
            backgroundColor: "#FFA000"
        },
        headerTitleStyle: {
            color: "#ffffff"
        }
    }
    constructor(props) {
        super(props)
        this.state = {
            elements: [],
            anime: true
        }
        this.stations = this.getFirebase().child("stations_big")
        this.renderBikes = this.renderBikes.bind(this)
    }

    getFirebase() {
        return firebase.database().ref()
    }
    componentDidMount() {
        this.stations.on("value", elements => {
            var array = []
            // wykonaj foreach na tej kolekcji, wpisując potrzebne dane do tablicy w state
            elements.forEach(item => {
                this.setState({
                    anime: false
                })
                var array2 = []
                array2.push(item.val().stAddress1)
                array2.push(item.val().latitude)
                array2.push(item.val().longitude)
                array2.push(item.val().totalDocks)
                array2.push(item.val().availableBikes)
                array2.push(item.val().availableDocks)
                array2.push(item.val().statusValue)
                if (item.val().statusValue == "In Service") {
                    array2.push("#34eb80")
                } else {
                    array2.push("#eb3474")
                }
                array.push(array2)
            })
            this.setState({
                elements: array,
                color: "yellow"
            })
            this.renderBikes()
        })
    }
    renderBikes() {
        return (
            <FlatList
                data={this.state.elements}
                extraData={this.state}
                renderItem={({ item }) => (
                    <View
                        style={{
                            height: 200,
                            width: "100%",
                            backgroundColor: "#f7f7f7",
                            margin: 15,
                            borderWidth: 0.5,
                            borderColor: "#d6d7da",
                            borderBottomWidth: 3,
                            display: "flex",
                            flexDirection: "column"
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                width: "100%",
                                height: "25%"
                            }}
                        >
                            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                                {item[0]}
                            </Text>
                        </View>
                        <View
                            style={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "row",
                                flex: 4
                            }}
                        >
                            <View
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    flex: 2
                                }}
                            >
                                <View
                                    style={{
                                        margin: 5,
                                        width: "100%",
                                        height: "15%"
                                    }}
                                >
                                    <Text>lat: {item[1]}</Text>
                                </View>
                                <View
                                    style={{
                                        margin: 5,
                                        width: "100%",
                                        height: "15%"
                                    }}
                                >
                                    <Text>lng: {item[2]}</Text>
                                </View>
                                <View
                                    style={{
                                        margin: 5,
                                        width: "100%",
                                        height: "15%"
                                    }}
                                >
                                    <Text>razem stacji: {item[3]}</Text>
                                </View>
                            </View>

                            <View
                                style={{
                                    width: "50%",
                                    height: 50,
                                    flexDirection: "column",
                                    margin: 5
                                }}
                            >
                                <View
                                    style={{
                                        width: "100%",
                                        height: 50,
                                        flexDirection: "row",
                                        margin: 5
                                    }}
                                >
                                    <View
                                        style={{
                                            color: "white",
                                            backgroundColor: "#111",
                                            width:
                                                (100 * item[4]) / item[3] + "%"
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 20,
                                                fontWeight: "bold",
                                                color: "white",
                                                alignSelf: "center"
                                            }}
                                        >
                                            R
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            color: "white",
                                            backgroundColor: "#525252",
                                            width:
                                                (100 * item[5]) / item[3] + "%"
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 20,
                                                fontWeight: "bold",
                                                color: "white",
                                                alignSelf: "center"
                                            }}
                                        >
                                            S
                                        </Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        width: "100%",
                                        marginLeft: 5,
                                        marginTop: 0,
                                        backgroundColor: item[7],
                                        height: 50
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: 20,
                                            fontWeight: "bold",
                                            color: "white",
                                            alignSelf: "center"
                                        }}
                                    >
                                        {item[6]}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity
                                onPress={() => {
                                    let arr = [item[1], item[2]]
                                    this.props.navigation.navigate("s5", arr)
                                }}
                            >
                                <Text
                                    style={{
                                        alignSelf: "flex-end",
                                        marginRight: 30
                                    }}
                                >
                                    MAPA
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                keyExtractor={item => item.id}
            />
        )
    }
    render() {
        return (
            <View>
                <View>
                    <ActivityIndicator
                        size="large"
                        animating={this.state.anime}
                    ></ActivityIndicator>
                </View>
                <View
                    style={{
                        width: "100%",
                        height: 60,
                        flexDirection: "row"
                    }}
                >
                    <View style={{ width: "50%", flex: 1 }}>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate("s1")
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 18,
                                    alignSelf: "center",
                                    marginLeft: 100,
                                    fontWeight: "bold"
                                }}
                            >
                                Main Page
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: "50%", flex: 1 }}>
                        <TouchableOpacity
                            onPress={() => {
                                firebase
                                    .auth()
                                    .signOut()
                                    .then(() => alert("logout"))
                                    .catch(error => alert(error))
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 18,
                                    alignSelf: "flex-end",
                                    marginRight: 100,
                                    fontWeight: "bold"
                                }}
                            >
                                LOGOUT
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>{this.renderBikes()}</View>
            </View>
        )
    }
}

export default Main

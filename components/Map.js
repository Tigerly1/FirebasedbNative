import React, { Component } from "react"
import { Text, View } from "react-native"
import MapView from "react-native-maps"
export class Map extends Component {
    static navigationOptions = {
        // header: null,
        title: "Lokalizacja na mapie",
        headerStyle: {
            backgroundColor: "#303F9F"
        },
        headerTitleStyle: {
            color: "#ffffff"
        }
    }
    constructor(props) {
        super(props)
        this.markers = this.markers.bind(this)
    }
    markers() {
        var list = this.props.navigation.state.params
        console.log(list)
        array = []

        array.push(
            <MapView.Marker
                coordinate={{
                    latitude: Number(this.props.navigation.state.params[0]),
                    longitude: Number(this.props.navigation.state.params[1])
                }}
                key={15}
            />
        )

        return array
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <MapView
                    style={{ flex: 1 }}
                    initialRegion={{
                        latitude: Number(this.props.navigation.state.params[0]),
                        longitude: Number(
                            this.props.navigation.state.params[1]
                        ),
                        latitudeDelta: 0.001,
                        longitudeDelta: 0.001
                    }}
                >
                    {this.markers()}
                </MapView>
            </View>
        )
    }
}

export default Map

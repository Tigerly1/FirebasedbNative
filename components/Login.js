import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import firebase from "firebase";

class Login extends Component {
  static navigationOptions = {
    // header: null,
    title: "ZALOGUJ ALBO ZAREJESTRUJ SIĘ",
    headerStyle: {
      backgroundColor: "#FFA000"
    },
    headerTitleStyle: {
      color: "#ffffff"
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      errorm: null,
      email: null,
      password: null,
      login: "ZALOGUJ SIĘ",
      choose: "NIE MASZ KONTA? ZAREJESTRUJ SIĘ",
      L: true
    };
    this.changeType = this.changeType.bind(this);
    this.login = this.login.bind(this);
  }
  login() {
    if (this.state.L) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => this.props.navigation.navigate("s2"))
        .catch(error => this.setState({ errorm: error.message }));
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => this.props.navigation.navigate("s2"))
        .catch(error => this.setState({ errorm: error.message }));
    }
  }

  changeType() {
    this.state.L
      ? this.setState({
          choose: "MASZ JUŻ KONTO? ZALOGUJ SIĘ",
          login: "ZAREJESTRUJ SIĘ",
          L: !this.state.L,
          errorm: null
        })
      : this.setState({
          choose: "NIE MASZ KONTA? ZAREJESTRUJ SIĘ",
          login: "ZALOGUJ SIĘ",
          L: !this.state.L,
          errorm: null
        });
  }
  render() {
    return (
      <View style={styles.containerf}>
        <View>
          <Image
            style={{
              width: 250,
              height: 250,
              borderRadius: 125
            }}
            source={require("./rower.jpg")}
          />
        </View>
        <View>
          <Text style={{ color: "red", fontWeight: "bold" }}>
            {this.state.errorm}
          </Text>
        </View>
        <View style={styles.containers}>
          <TextInput
            style={styles.textInput}
            placeholder="e-mail"
            onChangeText={email => this.setState({ email })}
            value={this.state.username}
          ></TextInput>
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          ></TextInput>
        </View>
        <View>
          <TouchableOpacity onPress={this.login}>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 26,
                marginTop: 6
              }}
            >
              {this.state.login}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={this.changeType}>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 26,
                marginTop: 6
              }}
            >
              {this.state.choose}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerf: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  containers: {
    width: 300
  },
  textInput: {
    width: 300,
    height: 60,
    borderBottomWidth: 1,
    borderColor: "#BDBDBD",
    color: "#757575",
    fontSize: 35,
    width: "100%"
  }
});
export default Login;

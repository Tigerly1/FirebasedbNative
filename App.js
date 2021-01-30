import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import Home from "./components/Home"
import Loading from "./components/Loading"
import Login from "./components/Login"
import Main from "./components/Main"
import Map from "./components/Map"

const Root = createStackNavigator({
    s1: { screen: Home },
    s2: { screen: Loading },
    s3: { screen: Login },
    s4: { screen: Main },
    s5: { screen: Map }
})
console.disableYellowBox = true
const App = createAppContainer(Root)

export default App

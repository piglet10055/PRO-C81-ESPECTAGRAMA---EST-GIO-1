import React from "react"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Ionicons from "react-native-vector-icons/Ionicons"
import Feed from "../screens/Feed"
import CreatePost from "../screens/CreatePost"

const Tab =createBottomTabNavigator()

const BottomTabNavigator =()=>{
  return(
    <Tab.Navigator
    screenOptions={({route})=>({
      tabBarIcons:({focused,color,size})=>{
        var iconName
        if(route.name == "Feed"){
          iconName=focused
          ?"book":"book-outline"
        }else if(route.name == "createPost"){
          iconName = focused
          ?"create":"create-outline"
        }
        return <Ionicons name ={iconName}size={size}color={color}/>
      }
    })}
    tabBarOptions={{
      activeTintColor:"blue",
      inactiveTintColor:"lightBlue"
    }}
    >
    <Tab.Screen name ="Feed" coomponent={Feed}/>
    <Tab.Screen name ="createStory" coomponent={CreateStory}/>
    </Tab.Navigator>
  )
}

export default BottomTabNavigator;
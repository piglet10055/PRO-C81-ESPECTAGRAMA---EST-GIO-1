import React,{Component} from "react"
import{Text,View,StyleSheet} from "react-native"

export default class Feed extends Component{
  render(){
    return(
      <View style={styles.container}>
      <Text> tela de histórias </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundcolor:"white",
    
  }
})
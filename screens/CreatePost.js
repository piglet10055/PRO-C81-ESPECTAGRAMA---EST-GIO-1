import React,{Component} from "react"
import{Text,View,StyleSheet} from "react-native"

export default class CreatePost extends Component{
  render(){
    return(
      <View style={styles.container}>
      <Text> criar post </Text>
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
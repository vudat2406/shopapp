import React from 'react'
import {View, Text, TouchableOpacity ,StyleSheet,ScrollView} from 'react-native'
export default function profile() {
  return (
    <View style={{backgroundColor:'white',height:'100%'}}>
      <ScrollView>
        <Text style={{textAlign:'center',color:'black',margin:30}}>Profile</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={{color:'black',marginLeft:30,fontWeight:'bold'}}>Order Tracking</Text>
        <Text style={{color:'black',fontSize:25,position: 'absolute',right: 20}}>></Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={{color:'black',marginLeft:30,fontWeight:'bold'}}>Manage Password</Text>
        <Text style={{color:'black',fontSize:25,position: 'absolute',right: 20}}>></Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={{color:'black',marginLeft:30,fontWeight:'bold'}}>Address Book</Text>
        <Text style={{color:'black',fontSize:25,position: 'absolute',right: 20}}>></Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={{color:'black',marginLeft:30,fontWeight:'bold'}}>Notifications</Text>
        <Text style={{color:'black',fontSize:25,position: 'absolute',right: 20}}>></Text>
      </TouchableOpacity>
      <View style={styles.a}>
        <Text style={{color:'black',textAlign:'center',marginTop:30,marginBottom:10,fontWeight:'bold'}}>NEED HELP?</Text>
        <TouchableOpacity style={{borderWidth:1,width:200,alignSelf:'center',height:50,marginBottom:30}}>
          <Text style={{color:'black',textAlign:'center',fontWeight:'bold',fontSize:16,padding:11}}>Contact Us</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{borderWidth:1,alignSelf:'center',height:50,width:'92%',marginBottom:20}}>
          <Text style={{color:'black',textAlign:'center',fontWeight:'bold',fontSize:16,padding:11}}>Sign Out</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  )
}
const styles=StyleSheet.create({
  button:{
    flexDirection:'row',
    borderWidth:0.5,
    height:70,
    alignItems:'center'
  },
  a:{
    margin:15,
    backgroundColor:'#C4C6C6',
  }
})

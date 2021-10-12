import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  } from 'react-native';
export default function loginScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
        <Text style={styles.td}>Profile</Text>
        <View>
          <Text style={styles.text}>*Email Address</Text>
          <TextInput style={styles.input} />
        </View>
        <View>
          <Text style={styles.text}>*Password</Text>
          <TextInput style={styles.input} />
        </View>
        <Text style={styles.text1}>Forgot Password?</Text>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.text2}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.text2}>Join Now</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'column',
    height:'100%'
  },
  lineStyle: {
    borderWidth: 0.2,
    borderColor: 'black',
    margin: 10,
  },
  text1: {
    fontWeight: 'bold',
    marginLeft: 30,
    color:'black'
  },
  Menu: {
    flexDirection: 'row',
  },
  text3: {
    flex: 1,
    textAlign: 'center',
    marginBottom: 10,
    color:'black'
  },
  text2: {
    fontWeight: 'bold',
    fontSize: 18,
    color:'black'
  },
  td: {
    alignSelf: 'center',
    marginBottom: 30,
    marginTop: 20,
    fontSize: 17,
    color:'black'
  },
  text: {
    marginLeft: 30,
    color:'black'
  },
  button1: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#E2FB0B',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
    marginBottom: 5,
  },
  button2: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 5,
    marginBottom: 5,
  },
  input: {
    height: 60,
    marginTop: 5,
    margin: 30,
    borderWidth: 1,
    padding: 10,
    color: 'black',
  },
});
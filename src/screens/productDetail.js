import React from 'react'
import { View, Text,Image,TouchableOpacity } from 'react-native'
import { Rating, AirbnbRating } from 'react-native-ratings';
export default function productDetail() {
  const ratingCompleted = () => { }
  return (
    <View style={{backgroundColor:'white',height:'100%'}}>
      <Image
          style={{ height: 400, width: '100%', resizeMode: 'cover' }}
          source={{ uri: 'https://thuthuatnhanh.com/wp-content/uploads/2019/05/gai-xinh-toc-ngan-facebook.jpg' }}
        />
      <Text style={{color:'black',fontSize:20,marginLeft:20,marginTop:10}}>Ten</Text>
      <View>
        <View style={{flexDirection:'row'}}>
          <Text style={{color:'black',fontSize:20,marginLeft:20,color:'red',marginTop:10,}}>39$</Text>
          <Rating
            onFinishRating={() => { }}
            imageSize={20}
            style={{alignSelf:'flex-end',marginBottom:3,marginLeft:200}}
          />
        </View>
        <Text style={{color:'red',margin:20}}>Up to 60%</Text>
      </View>
      <TouchableOpacity style={{backgroundColor:'yellow',position: 'absolute',left:20,bottom:60,width:'90%',height:50,justifyContent:'center'}}>
        <Text style={{margin:5,color:'black',fontSize:18,fontWeight:'bold',textAlign:'center'}}>ADD TO BAG</Text>
      </TouchableOpacity>
    </View>
  )
}

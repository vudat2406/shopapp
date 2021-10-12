import React from 'react'
import { View, Text, ScrollView, TouchableOpacity,StyleSheet,Image,FlatList,Dimensions} from 'react-native'
const { height, width } = Dimensions.get('window');
const products = [
  {
    id: 1,
    name: `Tshirt ahihihi ahiahi hiih hihi hih hih hih`,
    price: 12.99,
    discountPrice: 10.39,
    saleDetail: 'Up to 60% Off Almost Everything!',
    rate: 3,
    size: 'XL',
    photo: 'https://itcafe.vn/wp-content/uploads/2021/01/anh-gai-xinh-4.jpg'
  },
  {
    id: 2,
    name: `Hat ahahahahahah`,
    price: 10,
    discountPrice: 10.39,
    saleDetail: 'Up to 60% Off Almost Everything!',
    rate: 3,
    size: 'XL',
    photo: 'https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg'
  },
  {
    id: 3,
    name: `Tshirt abccasascca `,
    price: 12.99,
    discountPrice: 10.39,
    saleDetail: 'Up to 60% Off Almost Everything!',
    rate: 3,
    size: 'XL',
    photo: 'https://chiase24.com/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg'
  },
  {
    id: 4,
    name: `Tshirt abccasascca `,
    price: 12.99,
    discountPrice: 10.39,
    saleDetail: 'Up to 60% Off Almost Everything!',
    rate: 3,
    size: 'XL',
    photo: 'https://chiase24.com/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg'
  },
  {
    id: 5,
    name: `Tshirt abccasascca `,
    price: 12.99,
    discountPrice: 10.39,
    saleDetail: 'Up to 60% Off Almost Everything!',
    rate: 3,
    size: 'XL',
    photo: 'https://chiase24.com/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg'
  },
]
export default function bag() {
  const renderItem= ({item})=>(
    <View>
      <TouchableOpacity  style={{backgroundColor:'red',marginLeft:10,width:100,marginBottom:10}}>
        <Text style={{margin:5,color:'white',textAlign:'center'}}>Remove Item</Text>
      </TouchableOpacity>
      <View style={{borderTopWidth:1,margin:5}}>
        <Text style={{color:'black',marginLeft:15}}>Ten San Pham</Text>
        <View style={{flexDirection:'row',borderBottomWidth: 1,padding:15}}>
          <Image
          style={styles.tinyLogo}
          source={{uri:item?.photo}}
          />
          <View>
            <Text style={{color:'black',marginLeft:15}}>{item?.price}</Text>
            <Text style={{color:'black',marginLeft:15}}>{item?.name}</Text>
            <Text style={{color:'black',marginLeft:15}}>{item?.size}</Text>
          </View>
        </View>
      </View>
    </View>
      
  );
  return (
    <View style={{backgroundColor:'white',height:'100%'}}>
      <View style={{backgroundColor:'black',height:66,justifyContent:'center'}}>
        <Text style={{textAlign:'center',color:'white'}}>You've Earned Free Shipping!</Text>
      </View>
      <View style={{marginTop:30,marginLeft:15,marginRight:15,borderColor:'red',borderWidth: 1}}>
        <View>
          <Text style={{color:'black',marginTop:20,marginLeft:20,marginBottom:10}}>Remove 1 unavailable items to continue.</Text>
          <TouchableOpacity style={{backgroundColor:'red',marginLeft:20,width:100}}>
            <Text style={{margin:5,color:'white',textAlign:'center'}}>Remove All</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop:10,marginLeft:5,marginRight:5,borderColor:'red',borderWidth: 1,marginBottom:5}}>
          <Text style={{color:'black',marginTop:20,marginLeft:10,marginBottom:10}} >Remove unavailable item to continue.</Text>
          <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={false}
            style={{marginBottom:350}}
          />
        </View>
      </View>
      <TouchableOpacity style={{backgroundColor:'yellow',position: 'absolute',left:20,bottom:60,width:'90%',height:50,justifyContent:'center'}}>
        <Text style={{margin:5,color:'black',fontSize:18,fontWeight:'bold',textAlign:'center'}}>PROCEED TO CHECKOUT</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  tinyLogo: {
    width: 150,
    height: 150,
  }
});
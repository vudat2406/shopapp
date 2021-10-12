import React from 'react'
import { View, Text, ScrollView,TouchableOpacity,StyleSheet,Image,FlatList} from 'react-native'
const products = [
  {
    id: 1,
    name: `Tshirt ahihihi ahiahi hiih hihi hih hih hih`,
    price: 12.99,
    discountPrice: 10.39,
    saleDetail: 'Up to 60% Off Almost Everything!',
    rate: 3,
    photo: 'https://itcafe.vn/wp-content/uploads/2021/01/anh-gai-xinh-4.jpg'
  },
  {
    id: 2,
    name: `Hat ahahahahahah`,
    price: 10,
    discountPrice: 10.39,
    saleDetail: 'Up to 60% Off Almost Everything!',
    rate: 3,
    size:'XL',
    photo: 'https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg'
  },
  {
    id: 3,
    name: `Tshirt abccasascca `,
    price: 12.99,
    discountPrice: 10.39,
    saleDetail: 'Up to 60% Off Almost Everything!',
    rate: 3,
    photo: 'https://thuthuatnhanh.com/wp-content/uploads/2019/05/gai-xinh-toc-ngan-facebook.jpg'
  },
  {
    id: 4,
    name: `Tshirt abccasascca `,
    price: 12.99,
    discountPrice: 10.39,
    saleDetail: 'Up to 60% Off Almost Everything!',
    rate: 3,
    size:'XL',
    photo: 'https://chiase24.com/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg'
  },
]
export default function wishlist() {
  const renderItem=({item})=>(
    <View style={{marginBottom:20}}>
        <Text style={{color:'black',marginLeft:15}}>{item?.name}</Text>
        <View style={{flexDirection:'row',borderBottomWidth: 0.5,padding:15}}>
          <Image
          style={styles.tinyLogo}
          source={{uri:item?.photo}}
          />
          <View>
            <Text style={{color:'black',marginLeft:15}}>{item?.id}</Text>
            <Text style={{color:'black',marginLeft:15}}>{item?.price}</Text>
            <Text style={{color:'black',marginLeft:15}}>{item?.size}</Text>
            <TouchableOpacity style={{backgroundColor:'#D3D6D6',padding:10,marginLeft:15,marginTop:20}}>
              <Text style={{color:'black',paddingRight:10,paddingLeft:10}}>Remove from WishList</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  );
  return (
    <View style={{height:'100%', backgroundColor:'white'}}>
      <Text style={{color:'black',textAlign:'center',marginTop:25,marginBottom:20,fontSize:16}}>Your WishList</Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={false}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 150,
    height: 150,
  }
});

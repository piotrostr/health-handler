import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  ScrollView, 
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Dimensions
} from 'react-native'
import Image from 'react-native-fast-image'
import common from '../common.style'
import SainsburysLogo from '../components/svg/SainsburysSmall'
import { LinearGradient } from 'expo-linear-gradient'
import { GradientText } from '../components/GradientComponents'
import Back from '../components/svg/Back'


const ShoppingListScreen = ({ route, navigation }) => {
  const { shoppingList } = route.params
  const [totalPrice, setTotalPrice] = useState(0)
  return (
    <View style={[common.screen, {justifyContent: ''}]}>
      <View style={[
        common.flexRow, 
        {marginBottom: 35, marginTop: 60}
      ]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Back />
        </TouchableOpacity>
      </View>
      <SafeAreaView style={{height: '70%'}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={common.flexRow}>
            <View>
              <Text style={[common.headingMain, {marginTop: 0}]}>
                Shopping List
              </Text>
             <GradientText 
               style={common.text}
               text={"This week's order"}
             />
            </View>
            <SainsburysLogo />
          </View>
          <Text style={[common.headingMain, {fontSize: 20}]}>
            Products
          </Text>
          <View>
            {
              shoppingList && 
                Object.entries(shoppingList).map(
                  ([productId, qty], index) =>
                  <Product 
                    key={index} 
                    productId={productId}
                    qty={qty} 
                    setTotalPrice={setTotalPrice}
                  />
                )
            }
          </View>
          <View style={{height: 120}} />
        </ScrollView>
      </SafeAreaView>
      <LinearGradient 
        colors={['#5AD710', '#22E4CD']}
        style={styles.priceView}
      >
        <Text style={styles.mainPrice}>
          £{totalPrice / 100}
        </Text>
      </LinearGradient>
    </View>
  )
}

const Product = ({ productId, qty, setTotalPrice }) => {
  const [product, setProduct] = useState(null)
  const [isPad, setPad] = useState(false)
  useEffect(() => {
    const { height, width } = Dimensions.get('window')
    if (height / width < 1.6) 
      setPad(true)
    fetch('https://handler.health/products/' + productId)
      .then(r => r.json())
      .then(r => {
        setProduct(r) 
        let priceInP = r.currency === 'p' ? r.price : 100*r.price 
        setTotalPrice(price => price + qty*priceInP)
      })
  }, [])
  return (
    <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      {
        product ? 
        <View style={styles.productContainer}>
          <Image 
            style={styles.productImage} 
            source={{uri: product.img_url}} 
          />
          <SafeAreaView style={styles.textBit}>
            <Text 
              style={styles.productName}
              adjustsFontSizeToFit={true}
            >
              {product.name}
            </Text>
            <View style={!isPad ? styles.row : [styles.row, {width: 270}]}>
              <GradientText style={styles.price} text={product.price + product.currency} />
              <GradientText style={styles.price} text={'Used x' + qty}/>
            </View>
          </SafeAreaView>
        </View>
          :
        <View />
     }
  </View>
  )
}

const styles = StyleSheet.create({
  productContainer: {
    width: '95%',
    maxWidth: 400,
    height: 100,
    marginLeft: 5,
    marginRight: 5,
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 20,
    shadowOffset: {
      width: 1,
      height: 3
    },  
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: '#ffffff',
  },
  productImage: {
    width: 84,
    height: 84
  },
  textBit: {
    width: 220,
    height: '100%',
    marginLeft: 10,
  },
  productName: {
    ...common.headingText,
    fontSize: 14,
    lineHeight: 18,
    marginTop: 5,
  },
  price: {
    ...common.headingText,
    fontSize: 18,
    lineHeight: 24,
    marginTop: 20,
    color: 'green'
  },
  row: {
    ...common.flexRow,
    width: 215,
    position: 'absolute',
    bottom: '10%'
  },
  priceView: {
    width: '100%',
    height: 103,
    maxWidth: 420,
    top: '84%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
    alignSelf: 'center'
  },
  mainPrice: {
    ...common.headingMain,
    marginTop: 0,
    color: '#ffffff',
    fontSize: 35,
    lineHeight: 85
  },
})
export default ShoppingListScreen

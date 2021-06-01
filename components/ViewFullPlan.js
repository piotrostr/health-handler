import React from 'react'
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import common from '../common.style'
import { GradientText } from './GradientComponents'


const ViewFullPlan = ({ onPress }) => {
  return (
    <View>
      <TouchableOpacity 
        style={styles.viewContainer} 
        onPress={onPress}
      >
        <GradientText style={styles.clickyText} text={'View full plan'} />
        <Image 
          source={require('../assets/down.png')} 
          style={{marginLeft: 10}} 
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
 viewContainer: {
   alignSelf: 'center', 
   marginTop: 35, 
   flexDirection: 'row',
   alignItems: 'center'
 },  
  clickyText: {
    ...common.text,
    fontSize: 14, 
    lineHeight: 17, 
  }
})

export default ViewFullPlan

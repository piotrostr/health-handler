import React from 'react'
import { View, Text } from 'react-native'
import MaskedView from '@react-native-masked-view/masked-view'
import Icon from 'react-native-vector-icons/FontAwesome'
import { LinearGradient } from 'expo-linear-gradient'


export const Repeat = () => {
  return (
    <View>
      <MaskedView maskElement={
        <Icon name={'repeat'} size={40} />
      }>
        <LinearGradient colors={['#5AD710', '#22E4CD']}>
          <Icon name={'repeat'} style={{opacity: 0}} size={40} />
        </LinearGradient>
      </MaskedView>
    </View>
  )
}

export function GradientText({ style, text }) {
  return (
    <View>
      <MaskedView maskElement={
        <Text style={style}>{text}</Text>
      }>
        <LinearGradient colors={['#5AD710', '#22E4CD']}>
          <Text style={[style, {opacity: 0}]}>
            {text}
          </Text>
        </LinearGradient>
      </MaskedView>
    </View>
  )
}

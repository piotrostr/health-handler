import React, { useEffect, useState, Component } from 'react'
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native'
import MealPlanCard from '../components/MealPlanCard'
import common from '../common.style'
import CardStack, { Card } from 'react-native-card-stack-swiper'
import { LinearGradient } from 'expo-linear-gradient'

const SwipeScreen = ({ route, navigation }) => {
  const [isPad, setPad] = useState(false)
  const [mealPlans, setMealPlans] = useState([])
  const [selectedMealPlans, setSelectedMealPlans] = useState([])
  const { requirements, redo } = route.params
  const fitsTheRequirements = (mealPlan) => {
    if (
      requirements.vegan === mealPlan.vegan && 
      requirements.vegetarian === mealPlan.vegetarian && 
      requirements.glutenFree === mealPlan.glutenFree && 
      requirements.lactoseFree === mealPlan.lactoseFree
    )
      return true
    else
      return false
  }
  useEffect(() => {
    const { width, height } = Dimensions.get('window')
    if (height / width < 1.5) 
      setPad(true)
    const fetchStuff = () => {
      const url = 'https://handler.health/meal-plans'
      fetch(url)
        .then(r => r.json())
        .then(r => {
          const filtered = r.filter( 
            mealPlan => fitsTheRequirements(mealPlan)
          )
          setMealPlans(filtered)
        })
        .catch(err => console.log(err))
    }
    fetchStuff()
  }, [])

  useEffect(() => {
    if (selectedMealPlans.length == 7) 
      navigation.push('WeeklyPlanScreen', {
        selectedMealPlans: selectedMealPlans,
      })
  }, [selectedMealPlans])

  return (
    <View > 
      { 
        mealPlans.length ? 
          <SwipeBit 
            isPad={isPad}
            navigation={navigation}
            mealPlans={mealPlans} 
            selectedMealPlans={selectedMealPlans}
            setSelectedMealPlans={setSelectedMealPlans}
            navigation={navigation}
          />
          : 
          <View />
      }
      <LinearGradient 
        style={styles.counter} 
        colors={['#5AD710', '#22E4CD']}
      >
        <Text style={styles.counterText}>
          {selectedMealPlans.length} / 7
        </Text>
      </LinearGradient>
    </View>
  )
}

class SwipeBit extends Component {
  constructor(props) {
    super(props)
  }

  onSwipeRight(mealPlan) {
    this.props.setSelectedMealPlans([
      ...this.props.selectedMealPlans,
      mealPlan
    ])
  }

  render() {
    return (
      <View 
        style={
          this.props.isPad && 
            { 
              position: 'absolute', 
              top: 50, 
              left: Dimensions.get('window').width / 2 - 210 
            }
      }>
        <CardStack
          loop={true}
          verticalSwipe={false}
          renderNoMoreCards={() => null}
          cardContainerStyle={{width: '100%', height: '100%'}}
          ref={swiper => { this.swiper = swiper }}
        >
        {
          this.props.mealPlans.map((mealPlan, index) => (
            <Card 
              key={index} 
              onSwipedRight={() => this.onSwipeRight(mealPlan)}
            > 
              <MealPlanCard 
                navigation={this.props.navigation}
                mealPlan={mealPlan} 
                onPressLeft={() => this.swiper.swipeLeft()}
                onPressRight={() => this.swiper.swipeRight()}
              />
            </Card>
          ))
        }
        </CardStack>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  counter: {
    width: 84,
    height: 64,
    borderWidth: 3,
    borderColor: '#FFFFFF',
    position: 'absolute',
    alignSelf: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
    borderRadius: 10
  },
  counterText: {
    ...common.headingMain,
    fontSize: 20,
    lineHeight: 30,
    letterSpacing: 0.125,
    color: '#FFFFFF',
    position: 'absolute'
  }
})

export default SwipeScreen


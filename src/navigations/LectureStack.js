import React, { Component } from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'

import LecturesContainer from '../features/lectures/containers/LecturesContainer'

let LectureStack = createStackNavigator(
    {
        Lectures: {
            screen: LecturesContainer
        },
    },
    {
        initialRouteName: 'Lectures',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#30156E'
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                fontFamily: 'sf-regular',
                fontSize: 22,
                letterSpacing: 0.5
            }
        }
    }
)

export default createAppContainer(LectureStack)
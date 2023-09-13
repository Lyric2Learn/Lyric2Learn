import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, { runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
import Delete from '../Images/Svg/delete'
import useVocabularyStore from '../Store/useStore'
import AsyncStorage from '@react-native-async-storage/async-storage'

const heightContainer = 70;
const windowWidth = Dimensions.get('window').width;
const translationXThresHold = -windowWidth * 0.12;

const CustomVocablary = ({ item, simultaneousHandlers }) => {
    const translationX = useSharedValue(0);
    const itemHeight = useSharedValue(heightContainer);
    const marginVertical = useSharedValue(10);
    const opacity = useSharedValue(1);
    const deleteVocabulary = useVocabularyStore((state) => state.deleteVocabulary)


    const panGesture = useAnimatedGestureHandler({
        onActive: (event) => {
            translationX.value = event.translationX
        },
        onEnd: () => {
            const invisibilty = translationX.value < translationXThresHold;
            if (invisibilty) {
                translationX.value = withTiming(-windowWidth);
                itemHeight.value = withTiming(0);
                marginVertical.value = withTiming(0);
                opacity.value = withTiming(0, undefined,
                    (isFinished) => {
                        if (isFinished) {
                            runOnJS(deleteVocabulary)(item.id);
                        }
                    }
                );

            } else {
                translationX.value = withTiming(0);
            }
        }
    })

    const rStyle = useAnimatedStyle(() => ({
        transform: [{
            translateX: withSpring(translationX.value),
        }]
    }))

    const rIconStyle = useAnimatedStyle(() => {
        const opacity = translationX.value < translationXThresHold ? 1 : 0;
        return { opacity }
    })

    const rContainerStyle = useAnimatedStyle(() => {
        return {
            height: itemHeight.value,
            marginVertical: marginVertical.value,
            opacity: opacity.value,
        }
    })
    return (
        <Animated.View style={[styles.mainContainer, rContainerStyle]}>
            <Animated.View style={[styles.iconContainer, rIconStyle]}>
                <Delete />
            </Animated.View>
            <PanGestureHandler simultaneousHandlers={simultaneousHandlers} onGestureEvent={panGesture}>
                <Animated.View style={[styles.container, rStyle]}>
                    <Text key={console.log(item.id)} style={styles.word}>
                        {item.en} : {item.tr}
                    </Text>
                </Animated.View>
            </PanGestureHandler>
        </Animated.View>

    )
}

export default CustomVocablary

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        width: '100%',
    },
    container: {
        width: '90%',
        height: heightContainer,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: 'white',
        shadowColor: '##dcdcdc40',
        shadowOpacity: 0.2,
        shadowRadius: 3.84,
        elevation: 5,
        shadowOffset: {
            width: 0.1,
            height: 4,
        }
    },
    word: {
        textTransform: 'capitalize',
        justifyContent: 'center',
        textAlign: 'left',
        width: '80%',
        marginVertical: 22,
        justifyContent: 'center',
        paddingLeft: 20,
        fontSize: 20,
        fontWeight: '500',
        letterSpacing: 0.7,
        color: '#e79ec0',
    },
    iconContainer: {
        height: heightContainer / 1.5,
        width: heightContainer / 1.5,
        backgroundColor: 'transparent',
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'absolute',
        right: '10%',
        borderRadius: 100,
    }
})


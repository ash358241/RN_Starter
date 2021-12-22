import React, { useState, useReducer } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const INCREMENT = 1;

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {...state, counter: state.counter + action.payload};
        case 'decrement':
            return {...state, counter: state.counter - action.payload};
        default:
            return state;
    }
}

const CounterScreen = () => {
    // const [counter, setCounter] = useState(0);
    const [state, dispatch] = useReducer(reducer, {counter: 0})
    const {counter} = state;
    return (
        <View>
            <Button title="increment" onPress={() => {
                // setCounter(counter + 1);
                dispatch({type: 'increment', payload: INCREMENT})
            }} />
            <Button title="decrement" onPress={() => {
                // setCounter(counter - 1);
                dispatch({type: 'decrement', payload: INCREMENT})
            }} />
            <Text>Counter Count: {counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

})

export default CounterScreen;
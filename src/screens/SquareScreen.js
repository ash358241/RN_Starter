import React, { useReducer } from 'react';
import { View, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
        // action is the object that will define how the state object will be changed
        switch(action.colorToChange) {
            case 'red':
                return { ...state, red: state.red + action.amount}
            case 'green':
                return { ...state, green: state.green + action.amount}
            case 'blue':
                return { ...state, blue: state.blue + action.amount}
            default:
                return state;
        }
}

const SquareScreen = () => {    

    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
    return (
        <View>
            <ColorCounter onIncrease={() => } onDecrease={() => } color="red"></ColorCounter>
            <ColorCounter onIncrease={() => } onDecrease={() => } color="green"></ColorCounter>
            <ColorCounter onIncrease={() => } onDecrease={() => } color="blue"></ColorCounter>

            <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}></View>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;
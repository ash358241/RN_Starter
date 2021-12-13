import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {

    const friends = [
        { name: 'Friend #1', age: 20 },
        { name: 'Friend #2', age: 21 },
        { name: 'Friend #3', age: 22 },
        { name: 'Friend #4', age: 23 },
        { name: 'Friend #5', age: 24 },
    ]

    return (
        <FlatList
            data={friends}
            renderItem={({ item }) => {
                return <Text>{item.name} - Age {item.age}</Text>
            }}
        />
    );
};

const style = StyleSheet.create({

})

export default ListScreen;
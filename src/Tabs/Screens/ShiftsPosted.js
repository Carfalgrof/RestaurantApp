import React from 'react';
import {Modal, View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import ShiftPosting from './ShiftPosting.js';
import Example from './Example.js';


const ShiftsPosted = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [modalVisible, setModalVisible] = React.useState(false);
    const shifts = [

        {position: 'Wait Staff ', time: '9:00 AM - 5:00 PM', payRate: ' $15/hour', isOpen: true },
        {position: 'Bus Boy', time: ' 1:00 PM - 9:00 PM', payRate: ' $13/hour', isOpen: false },
        {position: 'Wait Staff ', time: ' 6:00 PM - 2:00 AM', payRate: ' $15/hour', isOpen: true },
        {position: 'Bus Boy', time: ' 4:00 PM - 9:00 PM', payRate: ' $13/hour', isOpen: true },
        {position: 'Bartender', time: ' 12:00 PM - 9:00 PM', payRate: ' $18/hour', isOpen: true },
        {position: 'Cashier', time: ' 9:00 AM - 5:00 PM', payRate: ' $18/hour', isOpen: true },
    ];

    const renderShiftItem = ({ item }) => (
        <TouchableOpacity style={[styles.shiftItem]}>
            <Text style={styles.shiftPosition}>{item.position}</Text>
            <Text style={styles.shiftTime}>{item.time}</Text>
            <Text style={styles.shiftPayRate}>{item.payRate}</Text>
            <Text style={styles.shiftStatus}>{item.isOpen ? 'Open' : ' Closed'}</Text>
        </TouchableOpacity>
    );
    <button style={[styles.button]}onPress={postShift}></button>
    return (
        <View style={[styles.container]}>
            <FlatList
                data={shifts}
                renderItem={renderShiftItem}
                keyExtractor={(item, index) => index.toString()}
                refreshing={true}
            />
            <View style={{ alignItems: 'center', margin: 50 }}>
                <Button
                    title={'Post a Shift!'}
                    buttonStyle={{ margin: 50 }}
                    onPress={() => navigation.navigate(ShiftPosting)} />
                <Button
                    title={'Example Shift'}
                    buttonStyle={{ margin: 50 }}
                    onPress={() => navigation.navigate(Example)} />
            </View>
        </View>
    );
};

export default ShiftsPosted;

function postShift({}) {
    const navigation = useNavigation();

    return (
        <Button
            title={'Go to ${ShiftPosting}'}
            onPress={() => navigation.navigate('ShiftPosting')}
        />
    );

}

function showExample({}) {
    const navigation = useNavigation();

    return (
        <Button
            title={'Go to ${Example}'}
            onPress={() => navigation.navigate('Example')}
        />
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bae7ea',
        alignItems: 'center',
        justifyContent: 'center',
    },
    shiftItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    shiftPosition: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    shiftTime: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    shiftPayRate: {
        fontSize: 14,
    },
    shiftStatus: {
        fontSize: 14,
        color: '#888',
    },
    button: {
        backgroundColor: 'blue',
        padding: 20,
        borderRadius: 5,
        Text: '+',
    },
});
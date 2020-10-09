import React from 'react';
import { View, Text } from 'react-native';
export default (props) => {
    console.warn(props);
    return <>
        <View>
            <Text>
                O valor {props.max} é maior que {props.min}
            </Text>
        </View>
    </>
}
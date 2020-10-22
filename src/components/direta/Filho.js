import React from 'react';
import { View, Text } from 'react-native'; 

export default (props) => {
    console.warn(props);
    return <>
        <View>
            <Text>
                valores {props.a} e {props.b}
            </Text> 
        </View>
    </>
}
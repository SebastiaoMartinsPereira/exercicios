import React from 'react';
import { View, Text } from 'react-native';
export default (props) => {
    console.warn(props);

    function gerarNum(){
       return Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;
    }
    return <>
        <View>
            <Text>
                O valor entre {props.max} é {props.min} e :
            </Text>
            <Text>{gerarNum()}</Text>
        </View>
    </>
}
import React from 'react';
import { Button, StyleSheet, TouchableOpacity, Text } from "react-native";

export default function Btn(props) {

    return (
        <TouchableOpacity onPress={props.onPress} style={styles[props.btnType]}>
            <Text style={styles[props.btnTypeText]}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btnFirst: {
        elevation: 8,
        backgroundColor: "#004445",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    btnFirstText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});
import { Pressable, Modal as Modal2, StyleSheet, Text, View } from 'react-native';

import React from "react";

const ModalItem = (props) => {
    const { isVisible, actionDeleteItem, item2Del } = props;
    const milabel = item2Del;
    if (milabel !== 'undefined') {
        return (
            <Modal2 animationType="fade" transparent={true} visible={isVisible}>
                <View style={styles.centeredView}>
                    <View style={styles.deleteMessage}>
                        <Pressable
                            onPress={() => actionDeleteItem()}
                            style={styles.deleteMessage}>
                            <Text>DELETE item {milabel}</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal2>

        );
    };
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    deleteMessage: {
        backgroundColor: "red",
        borderRadius: 50,
        width: 255,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default ModalItem;
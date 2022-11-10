import { Button, StyleSheet, TextInput, View } from 'react-native';

import { useState } from 'react';

const AddItem = (props) => {
    const { onChange, AddItem, value } = props;
    const [itemList, setItemList] = useState([]);
    const [textItem, setTextItem] = useState('');

    const onHandlerChangeItem = (t) => setTextItem(t);

    setItemList(currentItems => [
        ...currentItems,
        { id: Math.random().toString(), value: textItem }
    ])
    setTextItem('')

    return (
        <View style={styles.inputContainer}>
            <TextInput>
                placeholder="Item de la lista"
                style={styles.input}
                onChangeText={onChange}
                Value={value}
            </TextInput>
            <Button title="New" onPress={AddItem} />
        </View>
    );
};

const styles = StyleSheet.create({
    inputcontainer: {
        marginTop: 30,
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 30,
    },
    inputStyle: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
        width: 250,
    },
    button: {
        backgroundColor: "#42ab49",
        height: 45,
        width: 270,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        marginTop: 50,
    },

});

export default AddItem;
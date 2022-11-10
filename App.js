import { StatusBar, StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList } from 'react-native';
import Header from './components/Header';
import ModalItem from './components/Modal';
import { useState } from 'react';

export default function App() {
    const [textItem, setTextItem] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [itemSelected, setItemSelected] = useState({});
    const [tasklist, setTaskList] = useState([]);

    const onHandleChange = (t) => setTextItem(t);

    const deleteItem = () => {
        setTaskList((currentState) =>
            currentState.filter((item) => item.id !== itemSelected.id)
        );
        setItemSelected({});
        setModalVisible(false);
    };

    const addItem = () => {
        setTaskList((currentItems) => [
            ...currentItems,
            { id: Math.random().toString(), value: textItem },
        ]);
        setTextItem('');
    };

    const selectedItem = (id) => {
        setItemSelected(tasklist.find((item) => item.id === id));
        setModalVisible(true);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => selectedItem(item.id)}>
            <Text>{item.value}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Header />
            <StatusBar style="auto" />
            <View style={styles.inputcontainer}>
                <TextInput
                    value={textItem}
                    placeholder="Add to list"
                    placeholderTextColor="gray"
                    style={styles.inputStyle}
                    onChangeText={onHandleChange}
                />
                <TouchableOpacity style={styles.button} onPress={addItem}>
                    <Text>Add to the list the item above</Text>
                </TouchableOpacity>
            </View>
            <View>
                <FlatList
                    data={tasklist}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <ModalItem isVisible={modalVisible} actionDeleteItem={deleteItem} item2Del={itemSelected.value} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        width: '100%',
    },
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
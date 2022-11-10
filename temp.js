import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';

//import AddItem from './components/AddItem';

//import ModalItem from './components/Modal';


//import { useState } from 'react';

export default function App() {
//    const [itemSelected, setItemSelected] = useState({});
  //  const [modalVisible, setModalVisible] = useState(false);

/*    const onHandlerModal = id => {
        setItemSelected(itemList.filter(item => item.id === id)[0]);
        setModalVisible(!modalVisible);
    }
    const onHandlerDelete = id => {
        setItemList(currentItems => currentItems.filter(item => item.id !== id));
        setItemSelected({});
        setModalVisible(!modalVisible);
    }
    const onHandlerChangeItem = (t) => setTextItem(t);*/

    return (
        <View style={styles.container}>
            <Header />,
            <Text>Testing app</Text>,
        </View>
    );
}

/*<ModalItem
visible={modalVisible}
onDelete={onHandlerDelete.bind(this, itemSelected.id)}
item={itemSelected} />
            <AddItem
                onChange={onHandlerChangeItem}
                onAddItem={AddItem}
                value={textItem} />
*/


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

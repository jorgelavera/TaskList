import { FlastList, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const index = () => {

    return (
        <FlatList
            data={ItemList}
            renderItem={(data) => (
                <TouchableOpacity onPress={onHandlerModal.bind(this, data.item.id)}>
                    <View style={styles.ItemList}>
                        <Text>{data.item.value}</Text>
                    </View>
                </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id} />
    );
};

const styles = StyleSheet.create({
    itemList: {
        backgroundColor: "#ccc",
        padding: "1rem",
        margin: "0.5rem",
    }
});

export default index;
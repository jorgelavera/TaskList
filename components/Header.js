import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text>Task list</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#89e186',
        height: 80,
        width: '100%',
        paddingTop: 8,
        alignItems:  'center',	
        justifyContent: 'center',
    },
});

export default Header;

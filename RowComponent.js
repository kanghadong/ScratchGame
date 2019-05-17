import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const RowComponent = ({indexArray, scratchItem, scratchItemIcon}) => {
    const renderItem = () => {
        return indexArray.map(value => (
            <TouchableOpacity key={value} style={styles.item} onPress={() => scratchItem(value)}>
              <Text style={styles.itemText}>{scratchItemIcon(value)}</Text>
            </TouchableOpacity>
        ));
    };
    
    return (
        <View style={styles.itemrow}>
            {renderItem()}
        </View>
    );
};

const styles = StyleSheet.create({
    itemrow: {
      flexDirection: 'row'
    },
    item: {
      alignItems: 'center',
      padding: 10,
      borderWidth: 2,
      borderColor: 'black',
      minWidth: 70,
    },
    itemText: {
        fontSize: 30
    }
  });

export default RowComponent;

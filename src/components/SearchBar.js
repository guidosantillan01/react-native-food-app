import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange }) => {
  return (
    <View style={styles.view}>
      <Feather style={styles.icon} name="search" />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        placeholder="Search"
        value={term}
        onChangeText={newTerm => onTermChange(newTerm)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 10,
    flexDirection: 'row'
  },
  input: {
    flex: 1,
    fontSize: 18
  },
  icon: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 10
  }
});

export default SearchBar;

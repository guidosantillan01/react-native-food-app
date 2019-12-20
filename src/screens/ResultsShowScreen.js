import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Button } from 'react-native';

import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <>
      <Text>{result.name}</Text>
      <Text>{result.phone}</Text>
      <Text>
        {result.location.address1}, {result.location.city}
      </Text>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return (
            <Image
              style={styles.image}
              source={
                item === ''
                  ? require('../../assets/no-image.png')
                  : { uri: item }
              }
            />
          );
        }}
      />
      <Button title="Go to official website" onPress={() => null} />
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300
  }
});

export default ResultsShowScreen;

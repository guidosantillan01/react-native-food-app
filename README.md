## React Native Food App

### Install expo-cli

1. `npx expo-cli init food`
2. Select `blank` template
3. Change project title

## Install `react-navigation`

1. `npm install react-navigation`
2. `npx expo-cli install react-native-gesture-handler react-native-reanimated react-navigation-stack`
3. Import

```js
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
```

## Icons in React Native

`https://expo.github.io/vector-icons/`

Use

```js
import { Feather } from '@expo/vector-icons';

<Feather name="search" size={30} />;
```

## Install `axios`

`npm install axios`

Use:

```js
const searchApi = async () => {
  try {
    const response = await yelp.get('/search', {
      params: {
        limit: 50, // /search?limit=50
        term,
        location: 'san jose'
      }
    });
    setResults(response.data.businesses);
  } catch (err) {
    setErrorMessage('Something went wrong :(');
  }
};
```

## React Native Food App

### Install expo-cli

1. `npx expo-cli init food`
2. Select `blank` template
3. Change project title

**Install `react-navigation`**

1. `npm install react-navigation`
2. `npx expo-cli install react-native-gesture-handler react-native-reanimated react-navigation-stack`
3. Import

```js
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
```

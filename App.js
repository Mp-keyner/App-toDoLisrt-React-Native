import { StyleSheet, View } from 'react-native';
import { HomoScreen } from './src/screens/HomoScreen';


export default function App() {
  return (
    <View style={styles.container}>
      <HomoScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 35,
    padding: 10,
  },
});

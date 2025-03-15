import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


function App() {

  return (
    <View style={styles.tela}>
      <Text>
        Reporta Cidadão
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex:1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default App;

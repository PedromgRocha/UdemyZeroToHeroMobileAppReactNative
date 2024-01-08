
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import Splash from './src/screens/SplashScreen';
import Register from './src/screens/Register';
import LogIn from './src/screens/LogIn';

function App(): React.JSX.Element {
  const [theme, setTheme] = useState('light');
  return (
    <SafeAreaView>
        <LogIn/>
    </SafeAreaView>
  );
}

export default App;

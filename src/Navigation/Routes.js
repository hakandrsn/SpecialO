import React, { useContext,useState,useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AuthContext } from './AuthProvider'
import AuthStack from './AuthStack'
import HomeStack from './HomeStack'
import auth from "@react-native-firebase/auth"


const Routes = () => {
    const {user, setUser} = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);
    const [isInitial, setIsInitial] = useState(true);
  
    function onAuthStateChanged(user) {
      setUser(user);
      if (isInitial) setIsInitial(false);
      setIsLoading(false);
    }
    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber;
    }, []);
  

  
    return (
      <NavigationContainer>
        {user ? <HomeStack /> : <AuthStack />}
      </NavigationContainer>
    );
  };

export default Routes

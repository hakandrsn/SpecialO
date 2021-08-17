import React, { useEffect, useState, createContext } from 'react'
import auth from '@react-native-firebase/auth'


export const AuthContext = createContext({});  //paylaşımlı bilgi kalıbı

export const AuthProvider = props => {
    const [user, setUser] = useState(null);


    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email, password) => { //parametreler ilk burada oluştu
                    try {
                        await auth().signInWithEmailAndPassword(email, password)
                    }
                    catch (error) { //hatada ne olacağı
                        console.log(error) //hata mesajı
                    }
                },

                signout: async () => {
                    try {
                        await auth().signOut();
                    } catch (error) {
                        console.log(error)
                    }
                },

            }}
            {...props}
        />

    );
};


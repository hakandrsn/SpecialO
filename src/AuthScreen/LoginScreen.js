import React, { useContext } from 'react'
import { View, Text, SafeAreaView, TextInput,TouchableOpacity } from 'react-native'
import { AuthContext } from '../Navigation/AuthProvider'
import { Formik } from 'formik'
import { styles } from '../Utils/Styles'

const LoginScreen = () => {
    const { user, setUser, login } = useContext(AuthContext);

    return (
        <SafeAreaView style={styles.loginContainer}>
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => login(values.email, values.password)}
            >
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    isValid
                }) => (
                    <>
                        <TextInput 
                        style={styles.loginTextInput}
                        placeholder="email"
                            onChangeText={handleChange("email")} //yazıda meydana gelen değişiklik
                            onBlur={handleBlur("email")} //odaklama
                            value={values.email} />
                        <TextInput 
                        style={styles.loginTextInput}
                        
                        placeholder="password"
                            onChangeText={handleChange("password")} //yazıda meydana gelen değişiklik
                            onBlur={handleBlur("password")} //odaklama
                            value={values.password} />

                            <TouchableOpacity style={styles.loginTouch}
                            onPress={handleSubmit}
                            >
                                <Text>ENTER</Text>
                            </TouchableOpacity>
                    </>
                )}
            </Formik>
        </SafeAreaView>
    )
}

export default LoginScreen

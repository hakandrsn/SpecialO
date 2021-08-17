import React from "react"
import { Text, TextInput, View, TouchableOpacity, SafeAreaView } from "react-native"
import {Formik} from "formik"
import IconM from 'react-native-vector-icons/MaterialIcons'


const LoginFormik = () => {
    const [isSecurePass, setIsSecurePass] = useState(true)
    const { login } = useContext(AuthContext); //firebase işlem için bu mecburi
    const LoginvalidationSchema = yup.object().shape({
        email: yup
            .string()
            .required("Boş geçilemez!")
            .email("Geçerli bir email yazınız!"),
        password: yup
            .string("Sanırım Uygun Değil")
            .required("Şifreniz Bekleniyor")
            .min(6, ({ min }) => "Şifre en az " + min + " karakter olmalı")
    });

    return (
        <SafeAreaView>
            <Formik
                validationSchema={LoginvalidationSchema}
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => login(values.email, values.password)}>
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
                            name="email"
                            placeholder="Email Adresiniz"
                            placeholderTextColor="black"
                            style={{
                                height: 50,
                                width: "90%",
                                margin: 10,
                                borderColor: "black",
                                borderWidth: 1,
                                borderRadius: 10,
                                padding: 10,
                                fontSize: 16,
                            }}
                            onChangeText={handleChange("email")} //yazıda meydana gelen değişiklik
                            onBlur={handleBlur("email")} //odaklama
                            value={values.email}
                            keyboardType="email-address"
                        />
                        {errors.email && (
                            <Text style={{ color: "tomato", fontSize: 14 }}> {errors.email} </Text>)}
                        <View style={{
                            width: "90%",
                            margin: 10,
                            borderColor: "black",
                            borderWidth: 1,
                            borderRadius: 10,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            paddingRight: 10
                        }}>
                            <TextInput
                                name="password"
                                placeholder="Şifreniz"
                                placeholderTextColor="black"
                                style={{
                                    height: 50,
                                    padding: 10,
                                    fontSize: 16,

                                }}
                                onChangeText={handleChange("password")} //yazıda meydana gelen değişiklik
                                onBlur={handleBlur("password")} //odaklama
                                value={values.password}

                                multiline={false}
                                secureTextEntry={isSecurePass}
                                editable={true}
                                autoCorrect={false}
                            />
                            <TouchableOpacity
                                style={{ position: "absolute", right: 0 }}
                                onPress={() => setIsSecurePass(!isSecurePass)}
                            >
                                <IconM
                                    style={{ marginRight: 10 }}
                                    name={isSecurePass ? "visibility-off" : "visibility"}
                                    size={20}
                                    color="grey" />
                            </TouchableOpacity>
                        </View>
                        {errors.password && (
                            <Text style={{ color: "orange", fontSize: 14 }}> {errors.password} </Text>
                        )}

                        <TouchableOpacity style={{
                            backgroundColor: "#ddd", height: 40,
                            width: 200, justifyContent: "center",
                            alignItems: "center", margin: 10,
                            borderRadius: 25,
                            borderColor: "black"
                        }}
                            disabled={!isValid}
                            onPress={handleSubmit}
                        >
                            <Text style={{ fontSize: 17 }}>girişi</Text>
                        </TouchableOpacity>
                        </>
                    )}
                </Formik>
                    </SafeAreaView>
                )
                }


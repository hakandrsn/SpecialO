import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { styles } from "../Utils/Styles"
import firestore from '@react-native-firebase/firestore'

const CompanyAdd = () => {

    const [companys, setCompanys] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");
    const [adress, setAdress] = useState("")
    const [id, setId] = useState("");

    const Company = firestore().collection("Companys");
    const CompanyList = firestore().collection("CompanysList").doc("CompList")


    function cAdd(fisrt) {

        setId(
            Math.floor(Math.random() * 2000000 + 1)
        )
        Company.doc(fisrt).set({
            Companys: companys,
            Mail: mail,
            Phone: phone,
            Adress: adress,
            Id: id
        })
    }

    return (


        <SafeAreaView style={styles.companyContainer} >
            <ScrollView style={styles.companyScrol}
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: 'center',
                    alignItems: "center"
                }} >


                <Text
                    style={{ textAlign: "center", fontSize: 15, marginBottom: 10, fontWeight: "400" }}
                >Şirket bilgilerini giriniz. Eğer var olan bir şirket girerseniz içindekileri değiştireceksiniz</Text>
                <TextInput style={styles.companyTextI} placeholder="Company Name"
                    onChangeText={(text) => setCompanys(text)}
                />
                <TextInput 
                keyboardType="email-address"
                style={styles.companyTextI} placeholder="Company Mail"
                    onChangeText={(text) => setMail(text)}
                />
                <TextInput 
                keyboardType="number-pad"
                style={styles.companyTextI} placeholder="Company Phone"
                    onChangeText={(text) => setPhone(text)}
                />
                <TextInput 
                multiline
                style={styles.companyTextI} 
                placeholder="Company Adress"
                    onChangeText={(text) => setAdress(text)}
                />

                <TouchableOpacity
                    style={styles.companyTouch}
                    onPress={() => { cAdd(companys) }}
                >
                    <Text>Company Add</Text>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    )
}

export default CompanyAdd

import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { styles } from "../Utils/Styles"
import firestore from '@react-native-firebase/firestore'

const CompanyAdd = () => {

    const [companys, setCompanys] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");
    const [adress, setAdress] = useState("")


    const Company = firestore().collection("Companys")

    function cAdd(fisrt) {
        Company.doc(fisrt).set({
            Companys: companys,
            Mail: mail,
            Phone: phone,
            Adress: adress,
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
                    style={{textAlign:"center",fontSize:15,marginBottom:10,fontWeight:"400"}}
                    >Şirket bilgilerini giriniz. Eğer var olan bir şirket girerseniz içindekileri değiştireceksiniz</Text>
                <TextInput style={styles.companyTextI} placeholder="Company Name"
                    onChangeText={(text) => setCompanys(text)}
                />
                <TextInput style={styles.companyTextI} placeholder="Company Mail"
                    onChangeText={(text) => setMail(text)}
                />
                <TextInput style={styles.companyTextI} placeholder="Company Phone"
                    onChangeText={(text) => setPhone(text)}
                />
                <TextInput style={styles.companyTextI} placeholder="Company Phone"
                    onChangeText={(text) => setAdress(text)}
                />

                <TouchableOpacity
                    onPress={() => cAdd(companys)}
                >
                    <Text>Company Add</Text>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    )
}

export default CompanyAdd

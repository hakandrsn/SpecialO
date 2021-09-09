import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import { styles } from '../Utils/Styles'
import firestore from '@react-native-firebase/firestore'


const ProductList2 = ({ route, navigation }) => {
    const { item } = route.params;
    const [prod, setProd] = useState({});
    const productsColl = firestore().collection("Ürün Bilgileri");

    const pshMethod = () => {
        productsColl.where("Companyname", "==", item.Companys).onSnapshot(querySnapshot => {
            const comp = [];
            querySnapshot.forEach(doc => {
                const data = doc.data()
                comp.push(data)
                setProd(comp)
            })
        })
    }

    useEffect(() => {
        pshMethod();
    }, [])

    return (
        <SafeAreaView style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.flattxt1, { fontSize: 27, color: "#002", padding: 15 }}>{item.Companys}</Text>

            <FlatList
                style={styles.flat}
                data={prod}
                keyExtractor={ item =>   item.Evraknumarası}
                renderItem={({ item }) => (
                    <View style={{ justifyContent: "center", }}>
                        <TouchableOpacity
                            style={styles.flatwiev}
                            onPress={() => navigation.navigate("ProductList3", { item })}>
                            <Text style={styles.flattxt1}>{item.Artikelnumarasi}</Text>
                        </TouchableOpacity>

                    </View>
                )}
            />

        </SafeAreaView>
    )
}

export default ProductList2

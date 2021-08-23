import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import { styles } from '../Utils/Styles'
import firestore from '@react-native-firebase/firestore'



const ProductList1 = ({navigation}) => {
    const companysColl = firestore().collection("Companys");
    const productsColl = firestore().collection("Ürün Bilgileri");
    const [current, setCurrent] = useState({});

    useEffect(() => {
        return () => {
            companysColl.onSnapshot(querySnapshot => {
                const comp = [];
                querySnapshot.forEach(doc => {
                    const data = doc.data()
                    comp.push(data)
                    setCurrent(comp)

                })
            })
        }
    }, [])


    return (
        <SafeAreaView style={styles.listContainer}>
            <FlatList
                style={styles.flat}
                data={current}
                keyExtractor={item => item.Id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={()=> navigation.navigate("ProductList2",{item}) }
                        style={styles.flatwiev} >
                        <Text style={styles.flattxt}>
                            {item.Companys}
                        </Text>
                    </TouchableOpacity>

                )}
            />

        </SafeAreaView>
    )
}

export default ProductList1

import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import { styles } from '../Utils/Styles'
import firestore from '@react-native-firebase/firestore'



 const ProductList1 = ({navigation}) => {
    const companysColl = firestore().collection("Companys");
    const [current, setCurrent] = useState({});

    useEffect(() => {
        companysColl.onSnapshot(querySnapshot => {
            const comp = [];
            querySnapshot.forEach(doc => {
                const data = doc.data()
                comp.push(data)
                setCurrent(comp)
            })
        })
    }, [])


    return (
        <SafeAreaView style={styles.listContainer}>
            <Text style={{padding:20,fontSize:25,color:"#f00",fontWeight:"bold"}} >Şirketler Listesi</Text>
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

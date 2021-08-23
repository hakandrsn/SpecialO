import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { styles } from '../Utils/Styles'

const ProductList2 = ({ route, navigation }) => {
    const { item } = route.params;
    return (
        <SafeAreaView style={{justifyContent:"center",alignItems:"center"}}>
            <Text style={styles.flattxt1,{fontSize:27,color:"#002",padding:15}}>{item.Companys}</Text>
            <Text style={styles.flattxt1}>{item.Adress}</Text>
            <Text style={styles.flattxt1}>{item.Phone}</Text>
            <Text style={styles.flattxt1}>{item.Mail}</Text>

        </SafeAreaView>
    )
}

export default ProductList2

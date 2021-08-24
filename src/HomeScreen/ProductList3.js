import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { styles } from '../Utils/Styles';

const ProductList3 = ({ route, navigation }) => {
    const { item } = route.params;
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center", alignContent: "center" }} >
            <ScrollView style={{ flex: 1, width: "100%", padding: 5, marginTop: 10 }} >
                <Text style={{textAlign:"center",fontSize:30,fontWeight:"bold",marginBottom:10,color:"tomato"}} > {item.Companyname} </Text>

                <Text style={styles.Protxt} >Artikel Nummer :                    {item.Artikelnumarasi} </Text>
                <Text style={styles.Protxt} >Lieferscheinnummer :                {item.Evraknumarası} </Text>
                <Text style={styles.Protxt} >Handstrahlen :                      {item.Ellekursunlama} </Text>
                <Text style={styles.Protxt} >Hahrarbat :                                {item.Fazladanislem} </Text>
                <Text style={styles.Protxt} >Strahlen 1X,2X,3X :                 {item.Makinedenkursunlama} </Text>
                <Text style={styles.Protxt} >Model Nummer :                      {item.ModelNumarasi} </Text>
                <Text style={styles.Protxt} >Aufbragsnummer :                    {item.Numara} </Text>
                <Text style={styles.Protxt} >Lieferscheindatum :                 {item.Tarih} </Text>
                <Text style={styles.Protxt} >T- I dent Nummer :                  {item.Tdentnummer} </Text>
                <Text style={styles.Protxt} >Stückgeusicht :                            {item.TekKilo} </Text>
                <Text style={styles.Protxt} >Stückpreis :                               {item.Tekfiyat} </Text>
                <Text style={styles.Protxt} >Gesamtpreis :                              {item.Toplamfiyat} </Text>
                <Text style={styles.Protxt} >Gesamtgeuricht :                           {item.Toplamkilo} </Text>
                <Text style={styles.Protxt} >BearBeitung :                              {item.Yapılanislem} </Text>
                <Text style={styles.Protxt} >Menge :                                    {item.Miktar} </Text>
                
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProductList3

import React, { useState, useCallback } from 'react'
import { View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native'
import { styles } from '../Utils/Styles'
import firestore from '@react-native-firebase/firestore'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'
// import { launchCamera, launchImageLibrary } from 'react-native-image-picker';


const ProductAdd = () => {

    const [imageUri, setimageUri] = useState("");
    const [imageUriGallary, setimageUriGallary] = useState("");



    const [companyName, setCompanyName] = useState("");
    const [lieferschindatum, setLieferschindatum] = useState("");
    const [lieferscheinnummer, setLieferscheinnummer] = useState("");
    const [artikelNummer, setArtikelNummer] = useState("");
    const [modelnummer, setModelnummer] = useState("");
    const [aufbragsnummer, setAufbragsnummer] = useState("");
    const [bearbeitung, setBearbeitung] = useState("");
    const [tIdentnummer, setTIdentnummer] = useState("");
    const [menge, setMenge] = useState("");
    const [stückpreir, setStückpreir] = useState("");
    const [gesamtpreis, setGesamtpreis] = useState("");
    const [stückgeuscht, setStückgeuscht] = useState("");
    const [gesamtguricht, setGesamtguricht] = useState("");
    const [strahlen1X2X3X, setStrahlen1X2X3X] = useState("");
    const [handstrahlen, setHandstrahlen] = useState("");
    const [mehrarbait, setMehrarbait] = useState("");




    //ürün ekleme listesi
    function pList() {
        const productList = firestore().collection("Ürün Bilgileri"); //evrak numarası
        productList.doc(lieferscheinnummer).set({
            Companyname: companyName,
            Tarih: lieferschindatum,
            Evraknumarası: lieferscheinnummer,
            UrunImage: "",
            Artikelnumarasi: artikelNummer,
            ModelNumarasi: modelnummer,
            Numara: aufbragsnummer,
            Yapılanislem: bearbeitung,
            Tdentnummer: tIdentnummer,
            Tekfiyat: Number(stückpreir) + "€",
            Toplamfiyat: Number(gesamtpreis) + "€",
            TekKilo: Number(stückgeuscht) + "Kg",
            Toplamkilo: Number(gesamtguricht) + "Kg",
            Makinedenkursunlama: strahlen1X2X3X,
            Ellekursunlama: handstrahlen,
            Fazladanislem: mehrarbait,
            Miktar: menge,
        })
    }


    /*  const openCamara = () => {
              const options = {
                  storageOptions: {
                      path: "images",
                      mediaType: "photo",
                  },
      
                  includeBase64: true,
              };
      
      
              launchCamera(options, response => {
                  console.log("Response = ", response);
                  if (response.didCancel) {
                      console.log("User cancelled image picker");
                  } else if (response.error) {
                      console.log("ImagePicker Error: ", response.error);
                  } else if (response.customButton) {
                      console.log("User tapped custom button: ", response.customButton);
                  } else {
                      // You can also display the image using data:
                      const sourcee = { uri: "data:image/jpeg;base64," + response.base64 };
                      setimageUri(sourcee);
                  }
              });
      
      
          };
    */
    return (
        <SafeAreaView>
            <ScrollView style={styles.productScroll}
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: 'center',
                    alignItems: "center"
                }} >
                <Text style={{ paddingBottom: 5 }}>Şirketinizi şeçin ve yeni bir ürün girin</Text>



                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

                    <TouchableOpacity // onPress={() => openCamara()} 
                    >

                        <IconM name="plus" color="tomato" size={35} />
                    </TouchableOpacity>
                </View>



                <TextInput style={styles.ProductTextI}

                    placeholder="Company Name" placeholderTextColor="grey"
                    onChangeText={(value) => setCompanyName(value)}
                />

                <TextInput style={styles.ProductTextI}
                    placeholder="Lieferschindatum" placeholderTextColor="grey"
                    onChangeText={(value) => setLieferschindatum(value)}
                />
                <TextInput style={styles.ProductTextI}
                    placeholder="Lieferscheinnummer" placeholderTextColor="grey"
                    onChangeText={(value) => setLieferscheinnummer(value)}
                />
                <TextInput style={styles.ProductTextI}
                    placeholder="ArtikelNummer" placeholderTextColor="grey"
                    onChangeText={(value) => setArtikelNummer(value)}
                />
                <TextInput style={styles.ProductTextI}
                    placeholder="Modelnummer" placeholderTextColor="grey"
                    onChangeText={(value) => setModelnummer(value)}
                />
                <TextInput style={styles.ProductTextI}
                    placeholder="Aufbragsnummer" placeholderTextColor="grey"
                    onChangeText={(value) => setAufbragsnummer(value)}
                />
                <TextInput style={styles.ProductTextI}
                    placeholder="Bearbeitung" placeholderTextColor="grey"
                    onChangeText={(value) => setBearbeitung(value)}
                />
                <TextInput style={styles.ProductTextI}
                    placeholder="TIdentnummer" placeholderTextColor="grey"
                    onChangeText={(value) => setTIdentnummer(value)}
                />
                <TextInput style={styles.ProductTextI}
                    placeholder="Menge" placeholderTextColor="grey"
                    onChangeText={(value) => setMenge(value)}
                />

                <TextInput style={styles.ProductTextI}
                    placeholder="Stückpreir" placeholderTextColor="grey"
                    onChangeText={(value) => setStückpreir(value)}
                />
                <TextInput style={styles.ProductTextI}
                    placeholder="Gesamtpreis" placeholderTextColor="grey"
                    onChangeText={(value) => setGesamtpreis(value)}
                />
                <TextInput style={styles.ProductTextI}
                    placeholder="Stückgeuscht" placeholderTextColor="grey"
                    onChangeText={(value) => setStückgeuscht(value)}
                />
                <TextInput style={styles.ProductTextI}
                    placeholder="Gesamtguricht" placeholderTextColor="grey"
                    onChangeText={(value) => setGesamtguricht(value)}
                />
                <TextInput style={styles.ProductTextI}
                    placeholder="Strahlen 1X-2X-3X" placeholderTextColor="grey"
                    onChangeText={(value) => setStrahlen1X2X3X(value)}
                />
                <TextInput style={styles.ProductTextI}
                    placeholder="Handstrahlen" placeholderTextColor="grey"
                    onChangeText={(value) => setHandstrahlen(value)}
                />
                <TextInput style={styles.ProductTextI}
                    placeholder="Mehrarbait" placeholderTextColor="grey"
                    onChangeText={(value) => setMehrarbait(value)}
                />

                <TouchableOpacity
                    onPress={() => { pList() }}
                    style={styles.productTouch}>
                    <Text style={styles.touchText}>Ürün bilgilerini gir</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
};





export default ProductAdd

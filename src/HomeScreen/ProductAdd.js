import React, { useState, useCallback } from 'react'
import { View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import { styles } from '../Utils/Styles'
import firestore from '@react-native-firebase/firestore'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage'
import Modal from "react-native-modal"


const ProductAdd = () => {

    const [imageUri, setimageUri] = useState("");
    const [imageUriGallary, setimageUriGallary] = useState("");
    const [isVisiable, setİsVisiable] = useState(false);
    const [isUploading, setİsUploading] = useState(false);
    const [isPaused, setİsPaused] = useState(false);
    const [dowlandURL, setDowlandURL] = useState();
    const [uploadTask, setUploadTask] = useState();
    const [uploadTaskSnapshot, setUploadTaskSnapshot] = useState({});

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
            UrunImage: dowlandURL,
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

    const openModal = () => {
        setİsVisiable(!isVisiable)
    }
    const onTakePhoto = () => {
        launchCamera({ mediaType: "photo" }, onMediaSelect)
    }
    const onSelectImagePress = () => {
        launchImageLibrary({ mediaType: "photo" }, onMediaSelect)
    }

    const onMediaSelect = async media => {
        if (!media.didCancel) {
            setİsUploading(true);
            const reference = storage().ref(" UploadsProduct/ "  + media.assets[0].fileName);
            const task = reference.putFile(media.assets[0].uri);
            setUploadTask(task);
            task.on("state_changed", (taskSnapshot) => {
                setUploadTaskSnapshot(taskSnapshot);
            });
            task.then(async () => {
                const dowlandURL = await reference.getDownloadURL();
                setDowlandURL(dowlandURL);
                setİsUploading(false);
                setUploadTaskSnapshot({})
            })
        }
    }



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

                    <TouchableOpacity onPress={openModal}
                    >

                        <IconM name="plus" color="tomato" size={35} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Modal isVisible={isVisiable} >
                        <View style={{ flex: 1, backgroundColor: "white", justifyContent: "center", alignItems: "center", width: "90%", alignSelf: "center" }}>
                            <TouchableOpacity
                                style={{
                                    margin: 5,
                                    borderWidth: .5,
                                    width: "60%",
                                    height: 35,
                                    borderRadius: 40,
                                    backgroundColor: "tomato"
                                }}
                                onPress={onTakePhoto}>
                                <Text style={{
                                    fontSize: 17,
                                    textAlign: "center",
                                    marginTop: 4
                                }}> Fotoğraf çek</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    margin: 5,
                                    borderWidth: .5,
                                    width: "60%",
                                    height: 35,
                                    borderRadius: 40,
                                    backgroundColor: "tomato"
                                }}
                                onPress={onSelectImagePress}>
                                <Text style={{
                                    fontSize: 17,
                                    textAlign: "center",
                                    marginTop: 4
                                }}> Kütüphaneden Seç</Text>
                            </TouchableOpacity>


                            {isUploading && <View
                                style={{ marginTop: 20, marginBottom: 20, alignItems: "center", justifyContent: "center" }}
                            >
                                <ActivityIndicator size={50} color="#f00" />
                                <Text style={{ fontSize: 20, margin: 20 }} >Uploading</Text>
                                <Text style={{ fontSize: 20, margin: 20 }} >
                                    {((uploadTaskSnapshot.bytesTransferred / 
                                        uploadTaskSnapshot.totalBytes) * 100)
                                        .toFixed(2) + " % / 100%"}
                                </Text>
                            </View>}

                            <TouchableOpacity style={{
                                marginTop: 25,
                                width: "60%",
                                height: 35,
                                borderRadius: 40,

                            }}
                                onPress={openModal}>
                                <Text style={{
                                    fontSize: 17,
                                    textAlign: "center",
                                    marginTop: 4,
                                    fontWeight: "bold"
                                }}>KAPAT</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
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

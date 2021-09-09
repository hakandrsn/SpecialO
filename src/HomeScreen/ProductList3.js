import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import { styles } from '../Utils/Styles';
import Modal from "react-native-modal"
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'
import storage from '@react-native-firebase/storage'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import firestore from '@react-native-firebase/firestore'

const ProductList3 = ({ route, navigation }) => {
    const { item } = route.params;
    const [isVisiable, setİsVisiable] = useState(false);
    const [isUploading, setİsUploading] = useState(false);
    const [isPaused, setİsPaused] = useState(false);
    const [dowlandURL, setDowlandURL] = useState();
    const [uploadTask, setUploadTask] = useState();
    const [uploadTaskSnapshot, setUploadTaskSnapshot] = useState({});
    const [cn, setCn] = useState("")
    const [an, setAn] = useState("")


    useEffect(() => {
        return () => {
            setCn(item.Companyname);
            setAn(item.Artikelnumarasi)
        }
    }, [])



    const openModal = () => {
        setİsVisiable(!isVisiable)
    }
    const onTakePhoto = () => {
        launchCamera({ mediaType: "photo" , saveToPhotos:true , quality:0.5}, onMediaSelect)
    }
    const onSelectImagePress = () => {
        launchImageLibrary({ mediaType: "photo", saveToPhotos:true }, onMediaSelect)
    }

    const onMediaSelect = async media => {
        if (!media.didCancel) {
            setİsUploading(true);
            const reference = storage().ref(item.Companyname +"/"+ item.Artikelnumarasi + "/" +  media.assets[0].fileName);
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
                setİsVisiable(false)
            })
        }
    }


    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center", alignContent: "center" }} >
            <ScrollView style={{ flex: 1, width: "100%", padding: 5, marginTop: 10 }} >
                <Text style={{ textAlign: "center", fontSize: 30, fontWeight: "bold", marginBottom: 10, color: "tomato" }} > {item.Companyname} </Text>

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
            <TouchableOpacity
                onPress={openModal}
                style={{ padding: 10, backgroundColor: "tomato" , width:"100%",alignItems:"center" }}><Text style={{ fontSize: 15 }}>Add Photo +</Text></TouchableOpacity>

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


        </SafeAreaView>
    )
}

export default ProductList3

import React from "react"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({

    //login page styles

    loginContainer: {
        flex: 1,
        backgroundColor: "#ff9",
        alignItems: "center",
        justifyContent: "center"

    },
    loginTextInput: {
        borderWidth: 0.8,
        borderRadius: 7,
        width: "65%",
        height: 45,
        margin: 7,
        borderColor: "rgba(135,7,25,153)",
    },
    loginTouch: {
        borderWidth: 0.8,
        borderRadius: 50,
        width: 60,
        height: 60,
        backgroundColor: "tomato",
        justifyContent: "center",
        alignItems: "center"
    },

    //COMPANYADD page styles

    companyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },
    companyTextI: {
        alignSelf: "auto",
        borderWidth: .4,
        margin: 5,
        width: "65%",
        borderRadius: 15,
        height: 37
    },
    companyScrol: {
        // flex: 1,
        width: "100%",
        borderWidth: .4,
        flexGrow: 1,
    },
    companyTouch: {
        borderWidth: .5,
        width: "40%",
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginTop: 13,
        backgroundColor: "#fdf",

    },

    //ProductAdd page styles

    ProductTextI: {
        alignSelf: "auto",
        borderWidth: .8,
        margin: 5,
        width: "65%",
        borderRadius: 13,
        height: 37,
        borderColor: "tomato"
    },
    productScroll: {
        width: "100%",
        borderWidth: .4,
        height: "100%",
        paddingTop: 40,
        borderColor: "tomato"
    },
    productTouch: {
        marginBottom: 70,
        borderWidth: .7,
        width: "45%",
        height: 30,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 7
    },
    touchText: {
        fontSize: 14,
        fontWeight: "bold",
        color: "tomato"
    },


    //List1 page styles

    listContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10
    },
    flat: {
        width: "100%",

    },
    flatwiev: {
        justifyContent: "center",
        alignItems: "center",
        borderWidth: .2,
        marginBottom: 8,
        width: "70%",
        alignSelf: "center",
        borderRadius: 10,

    },
    flattxt: {
        fontSize: 19,
        textAlign: "center",
        fontWeight:"300"
    },
    flattxt1:{
        fontSize:20,
        textAlign:"center",
        fontWeight:"300",
        borderBottomWidth:.5,
        width:"70%",
        margin:7,
        color:"tomato"
    },
})
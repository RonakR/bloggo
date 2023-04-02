import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCD4lX-xfohYHqcs9mWS-z8Ab-_THlX1EU",
    authDomain: "bloggo-8716a.firebaseapp.com",
    projectId: "bloggo-8716a",
    storageBucket: "bloggo-8716a.appspot.com",
    messagingSenderId: "79031671102",
    appId: "1:79031671102:web:82c0ce5808f99bd50ff46f"
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const storage = firebase.storage()
import firebase from "firebase/compat/app";

// 사용할 파이어베이스 서비스 주석을 해제합니다
import "firebase/compat/auth";
import "firebase/compat/database";
//import "firebase/compat/firestore";
//import "firebase/compat/functions";
import "firebase/compat/storage";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
const firebaseConfig = {
    apiKey: "AIzaSyC1WCN0fQ8_hQWFTfyrn-95R-mViqheH0I",
    authDomain: "rn-myscrapnews.firebaseapp.com",
    projectId: "rn-myscrapnews",
    storageBucket: "rn-myscrapnews.appspot.com",
    messagingSenderId: "971004334219",
    databaseURL: "https://rn-myscrapnews-default-rtdb.firebaseio.com",
    appId: "1:971004334219:web:8602c19a18f753ca14848e",
    measurementId: "G-H2J80P6JW2"
};

//사용 방법입니다. 
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()
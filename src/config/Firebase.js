import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
  var firebaseConfig = {
    apiKey: "AIzaSyBGHDdg-cw9X7t_hMkfbYN71-wgMf_FKEA",
    authDomain: "minihackertone.firebaseapp.com",
    databaseURL:"https://minihackertone-default-rtdb.firebaseio.com/",
    projectId: "minihackertone",
    storageBucket: "minihackertone.appspot.com",
    messagingSenderId: "1029625050822",
    appId: "1:1029625050822:web:6a5fec2c8db382040809c7",
    measurementId: "G-LJVH27WKSN"
  };
  // Initialize Firebase
 export default firebase.initializeApp(firebaseConfig);
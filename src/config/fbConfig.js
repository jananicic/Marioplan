import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyA8oJCDwFxMvnUvT7uaI_If3MNr2Sh8RJc",
    authDomain: "net-ninja-marioplan-abfda.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-abfda.firebaseio.com",
    projectId: "net-ninja-marioplan-abfda",
    storageBucket: "net-ninja-marioplan-abfda.appspot.com",
    messagingSenderId: "222510462958"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;
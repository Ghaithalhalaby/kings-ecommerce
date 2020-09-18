import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA07eL_3sBzxBshTPPtVndOXVDKr6f-FnI",
    authDomain: "king-ecommerce.firebaseapp.com",
    databaseURL: "https://king-ecommerce.firebaseio.com",
    projectId: "king-ecommerce",
    storageBucket: "king-ecommerce.appspot.com",
    messagingSenderId: "233788128121",
    appId: "1:233788128121:web:c9ff2ee4707b962f180da8",
    measurementId: "G-JSB3FDDT0P"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GithubAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
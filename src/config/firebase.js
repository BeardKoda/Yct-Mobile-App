import firebase from 'firebase';

    if (!firebase.apps.length) {
      //avoid re-initializing
      const config = {
        apiKey: "AIzaSyB7aBHXllA0Is0GaWH8wooQiUyPymDmtnk",
        authDomain: "yctapp-d37bd.firebaseapp.com",
        databaseURL: "https://yctapp-d37bd.firebaseio.com",
        projectId: "yctapp-d37bd",
        storageBucket: "yctapp-d37bd.appspot.com",
        messagingSenderId: "85739485772",
        appId: "1:85739485772:web:49b4d0d05cf3e7813692e9"
      };
        firebase.initializeApp(config);
    }

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();

// const firebaseSDK = new FirebaseSDK();
// export default firebaseSDK;
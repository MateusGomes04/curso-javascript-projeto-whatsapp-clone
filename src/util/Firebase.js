const firebase = require("firebase");
require("firebase/firestore");

export class Firebase {

    constructor() {

        this._firebaseConfig = {

            apiKey: "AIzaSyB0uDgWyCVzxRKZEw9Yw3gJNBnIoUWykt4",
            authDomain: "whatsapp-clone-1bf42.firebaseapp.com",
            projectId: "whatsapp-clone-1bf42",
            storageBucket: "whatsapp-clone-1bf42.appspot.com",
            messagingSenderId: "346703955278",
            appId: "1:346703955278:web:1512dc0ed6d9a70d1d4a1f",
            measurementId: "G-M123WNGMCC"

        };

        this.init();
    }

    init() {

        if (!this._initialize) {

            firebase.initializeApp(this._firebaseConfig);

            firebase.firestore().settings({
            });


            this._initialize = true;
        }

    };

   static db(){

    return firebase.firestore();
   }

   static hd(){

    return firebase.storege();

   }

   
}

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

        if (!window._initializedFirebase) {

            firebase.initializeApp(this._firebaseConfig);

            firebase.firestore().settings({
            });


            window._initializedFirebase = true;
        }

    };

   static db(){

    return firebase.firestore();
   }

   static hd(){

    return firebase.storege();

   }

   initAuth(){

    return new Promise((s, f)=>{

        let provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
        .then(result=>{

            let token = result.credential.accessToken;
            let user = result.user;

            s({
                user, 
                token
        });

        })
        .catch(err=>{
            f(err);
        });
    });

}

   
}

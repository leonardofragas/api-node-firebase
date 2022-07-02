const firebase = require('firebase')

const firebaseConfig = {
  apiKey: "AIzaSyDLRtCJTJJstsjp02gX6pgpKmdrLD_x6k8",
  authDomain: "api-demo-264cc.firebaseapp.com",
  projectId: "api-demo-264cc",
  storageBucket: "api-demo-264cc.appspot.com",
  messagingSenderId: "550917932003",
  appId: "1:550917932003:web:ab4d9e5260c4a0927a56d6"
};

firebase.initializeApp(firebaseConfig)

module.exports = { firebase }
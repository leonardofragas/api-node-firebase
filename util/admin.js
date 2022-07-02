var admin = require("firebase-admin");

var serviceAccount = require("/Users/leonardofragas/Documents/dev/api-demo-264cc-aa598f0a5f7e.json");


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore()

module.exports = { admin, db }
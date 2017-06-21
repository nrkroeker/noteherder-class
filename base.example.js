import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'

const app = firebase.initializeApp({
    apiKey: "YOUR API KEY",
    authDomain: "YOUR APP.firebaseapp.com",
    databaseURL: "https://YOUR APP.firebaseio.com",
    projectId: "YOUR APP",
    storageBucket: "YOUR APP.appspot.com",
    messagingSenderId: "YOUR MESSAGING SENDER ID"
  })

const db = database(app)

export default Rebase.createClass(db)

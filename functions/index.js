// Import the functions you need from the SDKs you need
const { getOwnPropertyDescriptor } = require('core-js/core/object');
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzSt2PJsYvKaSlJwALdpE0jsUYMpM56SA",
  authDomain: "liquid-miles.firebaseapp.com",
  projectId: "liquid-miles",
  storageBucket: "liquid-miles.appspot.com",
  messagingSenderId: "255238661987",
  appId: "1:255238661987:web:3508466ad650b0e0395556"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

const docRef = db.collection('users').doc('alovelace');

docRef.set({
  first: 'Ada',
  last: 'Lovelace',
  born: 1815
});

const aTuringRef = db.collection('users').doc('aturing');

aTuringRef.set({
  'first': 'Alan',
  'middle': 'Mathison',
  'last': 'Turing', 
  'born': 1912
});





const specialOfTheDay = db.collection('dailySpecial').doc('01-20-2022');

function writeDailySpecial(){
  const docData = {
    description: 'A tasty cappuccino',
    price: 2.99,
    milk: 'Oat',
    vegan: true
  }
  specialOfTheDay.set(docData)
  .then(()=>{
    console.log('This value has been written to the database');
  })
  .catch((error)=>{
    console.log(`I got an error! ${error}`)
  
  })
}



async function readASingleDocument(){
  const mySnapshot = await specialOfTheDay.get();
  if (mySnapshot.exists){
    const docData = mySnapshot.data();
    console.log(`The data is ${JSON.stringify(docData)}`);
  }
}

writeDailySpecial();
readASingleDocument();
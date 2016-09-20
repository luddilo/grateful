const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.config.dev');

const Firebase = require('firebase');

const firebaseConfig = require('./config/firebase')

const not = {
   apiKey: "AIzaSyDqOeMPJk6kI8tWcvLbTENqMEga_gvaSg4",
   authDomain: "grateful-b7563.firebaseapp.com",
   databaseURL: "https://grateful-b7563.firebaseio.com",
   storageBucket: "grateful-b7563.appspot.com",
};

const Api = Firebase.initializeApp(firebaseConfig);

const Auth = Api.auth();
const Db = Api.database();

const delay = 1000*2;

function continuouslyGetGratefuls(){
  getGratefuls()
  setTimeout(() => {
    continuouslyGetGratefuls()
  }, delay);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomGrateful(gratefuls){
    let length = Object.keys(gratefuls).length;
    let index = getRandomInt(0,length)
    let key = Object.keys(gratefuls)[index];
    return gratefuls[key]
}

function getGratefuls() {
  Db.ref('user-gratefuls/')
    .once('value', (snap) => {
      let obj = snap.val()
      Object.keys(obj).map((id) => {
        console.log(getRandomGrateful(obj[id]).text)
      })
      console.log("---");
    })
    .catch((error) => {
      console.log("error fetching gratefuls", error);
    })
}

function sendNotification() {

}

function startWorker() {
  console.log("worker started");
  console.log("logging in");
  Auth.signInWithEmailAndPassword('ludvig.linse@gmail.com', 'asdfasdf')
  .then((data) => {
    console.log("Login success");
    continuouslyGetGratefuls();
  })
}

startWorker()

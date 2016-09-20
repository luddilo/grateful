import Firebase from 'firebase'
import firebaseConfig from '../../config/firebase'
import generatePushID from '../misc/generatePushID'
import {Actions as Router} from 'react-native-router-flux'

/* Firebase */

const Api = Firebase.initializeApp(firebaseConfig)
export const Auth = Api.auth()
export const Db = Api.database()

export function fetchTodaysGratefulsFromFirebase(uid){
  return (dispatch) => {
    dispatch({
      type: 'LOADING_STARTED'
    })
    let todayString = new Date().setHours(0,0,0,0,0).toString()
    Db.ref('user-gratefuls/' + uid).orderByChild('date').startAt(parseInt(todayString)).on('value', (snapshot) => {
      dispatch({
        type: 'LOADING_ENDED'
      })
      dispatch({
        type: 'FETCHED_GRATEFULS',
        payload: snapshot.val()
      })
    })
  }
}

function pushToFb(grateful, uid){
  return (dispatch) => {
    Db.ref('user-gratefuls/' + uid).child(grateful.id).set(grateful)
  }
}

function removeFromFb(id, uid){
  return (dispatch) => {
    Db.ref('user-gratefuls/' + uid).child(id).remove()
  }
}

export function addListeners(uid) {
  return (dispatch) => {
    let todayString = new Date().setHours(0,0,0,0,0).toString()
    Db.ref('user-gratefuls/' + uid)
      .orderByChild('date') // to get them oldest first
      .startAt(parseInt(todayString)) // and only get the ones AFTER the time we sent in (i.e, today's items)
      .on('child_added', (snap) => {
        dispatch({
            type: 'ADD_GRATEFUL',
            payload: snap.val()
        })
      })

    Db.ref('user-gratefuls/' + uid).on('child_removed', (snap) => {
      dispatch({
        type: 'REMOVE_GRATEFUL',
        payload: snap.val()
      })
    })
    console.log("added listeners...");
  }
}

export function removeListeners(uid) {
  Db.ref('user-gratefuls/' + uid).off('child_added', (snap) => {
    console.log("a child added")
  })
  Db.ref('user-gratefuls/' + uid).off('child_removed', (snap) => {
    console.log("a child removed")
  })
  console.log("removed listeners...");
}

/* Auth */

export function checkIfLoggedIn() {
  return (dispatch) => {
    Auth.onAuthStateChanged(function(authData) {
      if (authData) {
        dispatch({
          type: "SIGNED_IN",
          payload: authData
        })
      } else {
        dispatch({
          type: "SIGNED_OUT",
        })
      }
    })
  }
}

export function logout(uid) {
  return (dispatch) => {
    removeListeners(uid)
    Auth.signOut()
    .then((data) => {
      dispatch({
        type: "SIGNED_OUT"
      })
      Router.loginPage()
    })
  }
}

export function register(email, password){
  return (dispatch) => {
    dispatch({
      type: 'LOADING_STARTED'
    })
    Auth.createUserWithEmailAndPassword(email, password)
    .then((data) => {
      Auth.signInWithEmailAndPassword(email, password)
      .then((data) => {
        dispatch({
          type: 'LOADING_ENDED'
        })
        dispatch({
          type: "SIGNED_IN",
          payload: data
        })
      })
    })
  }
}

export function login(email, password){
  return (dispatch) => {
    dispatch({
      type: 'LOADING_STARTED'
    })
    Auth.signInWithEmailAndPassword(email, password)
    .then((data) => {
      dispatch({
        type: "SIGNED_IN",
        payload: data
      })
      // On successfull login; get contents from Firebase
      fetchTodaysGratefulsFromFirebase(data.uid)
      // ... and route to content page
      Router.gratefulPage()
    })
    .catch((error) => {
      console.log("Error: ", error);
    })
    .then(() => {
      dispatch({
        type: 'LOADING_ENDED'
      })
    })
  }
}

/* Gratefuls */

export function addGrateful(text, uid){
  return (dispatch) => {
    const grateful = {
      id: generatePushID(),
      text,
      date: new Date().getTime(),
      uid: uid
    }
    dispatch(pushToFb(grateful, uid))
    dispatch({
      type: 'ADD_GRATEFUL',
      payload: grateful
    })
  }
}

export function removeGrateful(id, uid){
  return (dispatch) => {
    dispatch({
      type: 'REMOVE_GRATEFUL',
      payload: {
        id
      }
    })
    dispatch(
      removeFromFb(id, uid)
    )
  }
}

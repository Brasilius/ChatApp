import React from 'react';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyAlmPmE9d9CLhH7R1hPaO0yi_u55TNW4NQ",

  authDomain: "basic-chat-438fd.firebaseapp.com",

  projectId: "basic-chat-438fd",

  storageBucket: "basic-chat-438fd.appspot.com",

  messagingSenderId: "704598221642",

  appId: "1:704598221642:web:4787c333f151995692d7b3",

  measurementId: "G-8YZE6H3MJL"

  //configurations
})
const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
    </div>
  );
}

export default App;

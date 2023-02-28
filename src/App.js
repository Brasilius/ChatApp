import React from 'react';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
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
const [] = useAuthState(auth);
function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
      <section >
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}
function signIn(){
const SignInWithGoogle = () => {const provider = new firebase.auth.GoogleAuthProvider();
auth.signInWithPopup(provider);}
return (<button onClick={SignInWithGoogle}> Sign in with Boogle</button>)



}
function signOut(){
  return auth.currentUSer && (<button onClick={() => auth.signOut()}>Sign Out</button>)
}

function ChatRoom() {
const messageRef = firestore.collection('messages');
const query = messageRef.orderBy('createdAt').limit(25);
const [messages] = useCollectionData(query, {idField: 'id'});
return(
  <>
  <div>
    {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
  </div>
  </>

)
}
function ChatMessage(props) {
  const { text, uid } = props.message;
  return <p>{text}</p>
}
export default App;

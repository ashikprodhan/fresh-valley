import firebase from "firebase/app";
import "firebase/auth";
import { useContext, useState } from "react";

import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";

import firebaseConfig from "./firebase.config";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'




function Login() {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const history = useHistory();
  const location = useLocation();


  const { from } = location.state || { from: { pathname: "/" } };

  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const [newUser, setNewUser] = useState(false)
  const [user, setUser] = useState({
    isLoggedIn: false,
    name: '',
    email: '',
    password: '',
    photo: '',
    error: '',
    success: false
  })



  const gProvider = new firebase.auth.GoogleAuthProvider();
  const handleSignIn = () => {
    firebase.auth().signInWithPopup(gProvider)
      .then(res => {
        // console.log(res.user);
        const { displayName, email, photoURL } = res.user;
        const signedInUser = {
          isLoggedIn: true,
          name: displayName,
          email: email,
          photo: photoURL
        }
        setUser(signedInUser);
        setLoggedInUser(signedInUser);
        history.replace(from);

        //  console.log(displayName,email,photoURL);
      })
      .catch(err => {
        console.log(err.message);
        console.log(err);
      })
    //  console.log(user);
  }
  const handleSignOut = () => {
    firebase.auth().signOut().then(res => {
      const signedOutUser = {
        isLoggedIn: false,
        name: '',
        email: '',
        photo: ''
      }
      setUser(signedOutUser)
      setLoggedInUser(signedOutUser)
      console.log('response', res);
      // Sign-out successful.
    }).catch((error) => {
      console.log(error);
      // An error happened.
    });
  }



  return (
    <div className="container"  >
      <div className="signinStyle">
        {
          user.isLoggedIn ? <button onClick={handleSignOut}>sign out</button> : <button type="button" className="btn btn-primary" onClick={handleSignIn} ><FontAwesomeIcon icon={faGoogle} />  Login with Google</button>
        }
      </div>
    </div>);
}

export default Login;



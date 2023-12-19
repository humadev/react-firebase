import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import './Home.css';
 
const Home = () => {
    const navigate = useNavigate();
    const [uid, setUid] = useState("");
    const [email, setEmail] = useState("");
 
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              setUid(user.uid);
              setEmail(user.email);
            } else {
              navigate("/login");
            }
          });
         
    }, [navigate])

    const handleLogout = async () => {
      await signOut(auth);
      navigate("/login");
    };
 
  return (
    <div className="homepage-container">
      <h2>Welcome to devops course {email}</h2>
      <p>This is a static homepage. your UID is {uid}</p>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}
 
export default Home
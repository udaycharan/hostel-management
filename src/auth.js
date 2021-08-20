import firebase from "./firebase";

 const verifyAccount  = (provider)=>{
return firebase.auth().signInWithPopup(provider).then((response)=>{
    return response.user;
}).catch((er)=>{
    return er;
})

}

export default verifyAccount;
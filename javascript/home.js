const firebaseConfig = {
    apiKey: "AIzaSyDz1jA1G1q_MIqTHj5tALoFwlvUcY-1W7s",
    authDomain: "login-9c0e3.firebaseapp.com",
    projectId: "login-9c0e3",
    storageBucket: "login-9c0e3.appspot.com",
    messagingSenderId: "379335025844",
    appId: "1:379335025844:web:5557c8070ac65255c3a3e1",
    measurementId: "G-HWQMMG4DP4"
};

firebase.initializeApp(firebaseConfig)
let auth = firebase.auth()
let user = document.querySelector('.user')

setTimeout(()=>{
    user.innerHTML = `${auth.currentUser.email}`
},1000)

function sair(){
    auth.signOut().then(()=>{
        window.location.href = "../index.html"

    }).catch((error)=>{
        console.log(error)
    })

}
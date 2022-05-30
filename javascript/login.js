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

function entrar(){
    const user = document.querySelector('#email').value
    const pass = document.querySelector('#senha').value

    auth.signInWithEmailAndPassword(user, pass).then(()=>{

        window.location.href = "../html/home.html"

    }).catch(()=>{
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'E-mail ou senha inválida',
            showConfirmButton: false,
            timer: 3000
        })
    })
}

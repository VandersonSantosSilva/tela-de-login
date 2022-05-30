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

function enviar(){
    const email = document.getElementById('email').value
    const pass = document.getElementById('senha').value

    auth.createUserWithEmailAndPassword(email, pass).then(()=>{
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Cadastro realizado com sucesso! Aguarde 3 Segundos',
            showConfirmButton: false,
            timer: 3000
        })

        auth.signOut().then(()=>{
            console.log("ninguém logado!")

        }).catch((error)=>{
            console.log(error)

        })

        setTimeout(()=>{
            window.location.href = "../index.html"
        },3000)

    }).catch(()=>{
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Verifique os campos e preencha-os corretamente',
            showConfirmButton: false,
            timer: 3000
        })
    })

}

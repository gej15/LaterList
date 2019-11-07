const auth = firebase.auth();

auth.signInWithEmailAndPassword(email, pass);

auth.createUserWithEmailAndPassword(email, pass);

auth.onAuthStateChange(firebaseUser => { });

btnLogin.addEventListener('click', e => {
    const email = txtEmail.val().trim()
    const pass = txtPassword.val().trim()
    const auth = firebase.auth()

    const promise = auth.signInWithEmailAndPassword(email, pass)

    promise.catch(e => console.log(e.message))
})

btnSignUp.addEventListener('click', e => {

    // TODO check for real email
    const email = txtEmail.val().trim()
    const pass = txtPassword.val().trim()
    const auth = firebase.auth()

    const promise = auth.createUserWithEmailAndPassword(email, pass)

    promise.catch(e => console.log(e.message))
})

firebase.auth().onAuthStateChange(firebaseUser => {
    if (firebaseUser){
        console.log(firebaseUser)
    } else {
        console.log('not logged in')
    }
})

btnLogout.addEventListener('click', e => {
    firebase.auth().signOut()
})
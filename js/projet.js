//On cible les boutons auxquels on va attribuer des événements
var loginButton = document.getElementById('login-submit');
var registerButton = document.getElementById('register-submit');

//On attribue un évnmts click au bouton login
loginButton.onclick = function(event){
    let form = document.getElementById('connexion-form');
    let email = form[0].value;
    let password = form[1].value;
}

//On attribue un évnmt click au bouton register
registerButton.onclick = function(event){
    let form = document.getElementById('register-form');
    let username = form[0].value;
    let email = form[1].value;
    let password = form[2].value;
    let password_confirm= form[3].value;

//  check de la validité des caractères de saisie input username
//avec un message d'alert
    let usernameStatus = checkUsername(username);
    if(usernameStatus != true)
        showAlert('L\'username doit compter au moins 5 caractères')

   
//check de la validité des caractères de saisie input password
//avec un message d'alert
    let passwordStatus = checkUsername(password);
    if(passwordStatus != true){
        showAlert('Votre mot de passe doit comprter au moins (1 minuscule, 1 magiscule, 1 chiffre)');

        error = true;
        
    }


//check de la validité des caractères de saisie input confirm password
//avec un message d'alert
    if (password !== password_confirm) {
        showAlert('La confirmation du mot de passe à échoué')
        error = true;
    }

    if (error = false){
        // créer notre User et le stocker dans le localStorage
    }
   
}


//Fonction à mettre dans un autre fichier appelé utils.js pour découper le code
function showAlert(message){
    alert(message);
}

function checkUsername (username){
    if(username.length < 5)
        return false
    else
        return true;    
}


function checkPassword(password){
    var passwordRegex = new RegExp()
    if (passwordRegex.test(password))
        return true;
    else
        return false;

}

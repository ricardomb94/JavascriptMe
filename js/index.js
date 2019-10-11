window.onload = function() {
    // --------------------- STEP 1 ---------------------
    // Par defaut le formulaire de connection est afficher, le formulaire d'inscription quand a lui est en 'display: none';
    // FAITE EN SORTE QUE AU CLICK SUR LES BUTTONS POSSEDANT LA CLASS 'square-button-empty'
    // DE MASQUER LE LOGIN FORM POUR AFFICHER LE REGISTER FORM, ET INVERSEMENT <->


    const button = document.querySelectorAll('.square-button-empty');

    for (let i = 0; i < button.length; i++) {
       button[i].onclick = function(e){
           if(e.target.getAttribute("data-form") == 0) {
               document.getElementById("connexion-form").style.display = "flex";
               document.getElementById("register-form").style.display = "none";
           }
           else if(e.target.getAttribute("data-form") == 1) {
            document.getElementById("register-form").style.display = "flex";
            document.getElementById("connexion-form").style.display = "none";
           }

       }
   }









    // --------------------- STEP 2 ----------------------
    // maintenant que l'on peut afficher nos 2 formulaires l'intéret serait maintenant qu'ils fonctionnent ! pour cela :
    // FAITE EN SORTE QUE AU CLICK SUR LES BUTTONS POSSEDANT LA CLASS 'square-button' DE :
    //  1. récuperer la valeur de tout les champs de formulaires
    //  2. vérifier que le 'username' fait au moins 5 caracteres alphanumérique
    //  3. vérifier que le password fait au moins 8 caracteres et contient a minima une majuscule/minuscule ainsi qu'un entier (integer)

    // Accéder à l'élément form

    // let email = document.getElementById("data-mail").value;
    // let password = document.getElementById("data-pwd").value;
    // console.log(email);

    const inputsLogin = document.querySelectorAll('.form-control-login');
    const inputsRegister = document.querySelectorAll('.form-control-register');

    let login = document.querySelector('#login');
    let signup = document.querySelector('#signup');

//Affichage des inputs du formulaire login
    login.addEventListener('click', function(event){
        

        for (let j = 0; j < inputsLogin.length; j++) {
            let inputValue = inputsLogin[j].value;
                console.log(inputValue);
            
             
        }  
    })


    //Affichage des inputs du formulaire 
    signup.addEventListener('click', function(event){

        for (let j = 0; j < inputsRegister.length; j++) {
            let inputValue = inputsRegister[j].value;
                console.log(inputValue);
            
             
        }  
    })

    


            
                
          
        

    




    // --------------------- STEP 3 -------------------------
    // une fois nos saisies utilisateurs stocker dans des variables faite en sorte de :
    // A L'INSCRIPTION :

    // 1. le code commenter ci-dessous devras etre fonctionnelle (pour ça vous allez devoir déclarer une class 'User' -> POO Javascript)
    // cette classe devras avoir des les propriétés 'username', 'email', 'password' ainsi qu'une methode nommé 'getUsername' --->
    // --> qui devra retourner l'username de l'instance courante de 'User'

    // var user = new User('Toto (username)', 'toto@email.fr (email)', 'tamereenslip (password)');
    // console.log('Bonjour ' + user.getUsername() + ' !');


    // 2. Modifier ensuite le code ci dessus pour qu'a l'instantation d'un nouvelle 'User' ---
    // --> on utilise les données saisie du formulaire d'inscription pour setup les propriétés notre nouvelle 'User'
    // puis on stocke ce nouvelle objet utilisateurs dans le 'localStorage' sous la clé 'user'





    // --------------------- STEP 4 -------------------------
    // une fois nos saisies utilisateurs stocker dans des variables faite en sorte de :
    // A LA CONNEXION :

    // 1. Vérifier l'existance dans le 'localStorage' de la clé 'user'
    // 1.1 Si la clé 'user' n'existe pas, retourner un message d'erreur a l'utilisateurs (Account do not exist, please register.)
    // 1.2 Si la clé existe, comparer les données saisie a celle présente dans le 'localStorage'
    // 1.2.1 si l'email ou le mot de passe ne correspondent pas, retourner un message d'erreur (les alert() sont proscrit)

    // 2. Si les données saisies correspondent a celles présentes dans le 'localStorage', rediriger l'utilisateur sur la page 'home.html'

    
    
}

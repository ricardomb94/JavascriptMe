window.onload = function() {
    readFile('https://raw.githubusercontent.com/promo3Saint-Maur/files/master/articles.json', function(articles) {
        console.log(articles);

        // --------------------- STEP 0 (informations) ---------------------
            // Dans le dossier data se trouve un fichier 'JSON' qui contient une liste d'article
            // CI-DESSUS la fonction 'readFile' fait une 'requette ajax' pour récuperer le contenue du fichier 'articles.json'
            // Le premier parametre de la fonction est le chemin d'acces au fichier
            // le deuxieme, est une fonction 'callback' qui nous permet d'avoir accès au données sous la forme d'une variables
            // cette variable est un 'array' contenant une plusieurs objet correspondant chacun a un article
    
    







        // --------------------- STEP 1 ---------------------
            // 1. FAITE EN SORTE DE POUVOIR INSTANCIER UN OBJET 'Article' A PARTIR DES DONNEES DE LA VARIABLE 'articles'
                // exemple : var article = new Article(articles.title, articles.author, articles.publishedDate, articles.img, articles.content, articles.resumes);
                
// var article = new Article( articles.id, articles.title, articles.content, articles.resume, articles.author, articles.publishedDate, articles.img,)








            // 1.2 DEFINIR DES GETTER/SETTER POUR CHAQUE PROPRIETES DE LA CLASS Article
                // exemple : this.SetTitle = function(newTitle) { this.title = newTitle; } <----- ceci est un SETTER








        // ------------------- STEP 2 ---------------------
            // AFFICHER DANS LA SECTION DU MAIN DE LA PAGE 'home.html' QUI EST LINK A CE SCRIPT LES ARTICLES

                // exemple structure html pour les articles ------------------------>
                    // <article class="article-preview" data-id="1">
                    //     <h2>Un super article 1</h2>
                    //     <div class="article-preciew-body">
                    //         <div class="article-preview-img">
                    //             <img src="http://fauxsite.com/content/medias/img/article1.jpg" alt="miniature article 1">
                    //         </div>
                    //         <div class="article-preview-content">
                    //             <p>Ceci est un texte taper au pif donc ne jugé pas sur l'orthographe général des documents fournis...</p>
                    //         </div>
                    //         <div class="article-preview-tags">
                    //             <p>tag1 tag2 tagada</p>
                    //         </div>
                    //     </div>
                    // </article>

                // exemple code javascript pour la generation des elements html ----------------->
                     // var articleBloc = document.createElement('article');
                     // articleBloc.ClassList.add('article-preview');
                     // articleBloc.setAttribute('data-id', articles[i].getId()) // <---- Dans cette exemple il faut s'imaginer qu'on boucle (for) sur un tableau contenant des 'instances' de la class 'Article'
                     // var articleTitle = document.createElement('h2');
                     // articleTitle.innerText = articles[i].getTitle(); // <---- Dans cette exemple il faut s'imaginer qu'on boucle (for) sur un tableau contenant des 'instances' de la class 'Article'
                     // articleBloc.append(articleTitle);
                     // etc.....

const section = document.getElementsByTagName('section')[0];

section.style.display = 'flex';
section.style.flexDirection = 'column';

for ( let i = 0; i < articles.length; i++){

     let article = new Article(articles[i].id, articles[i].title, articles[i].content, articles[i].resumes, articles[i].author, articles[i].publishedDate, articles[i].img, articles[i].tags);
    
    // console.log(articles);

    //créons la structure Html relative aux articles
    let articleBloc = document.createElement('article');
    articleBloc.classList.add('article-preview');
    articleBloc.setAttribute('data-id', article.getId());


    let articleTitle = document.createElement('h2');
    articleBloc.appendChild(articleTitle);
    articleTitle.innerText = article.getTitle();

    //Créons un div avec une classe('article-preciew-body), une balise('img') 
    //et un attribut 'src'
    let div1 = document.createElement('div');
    div1.classList.add('article-preciew-body');
    articleBloc.appendChild(div1);
    let image = document.createElement('img');
    image.setAttribute('src', article.getImg());
    div1.appendChild(image);

    let div2 = document.createElement('div');
    div2.classList.add('article-preciew-body');
    articleBloc.appendChild(div2);
    
    let div3 = document.createElement('div');
    div3.classList.add('article-preciew-content');
    div1.appendChild(div3);
    let parag = document.createElement('p');
    parag.setAttribute('data-content', article.getContent());
    parag.innerText = article.getContent();
    div3.appendChild(parag);

    let div4 = document.createElement('div');
    div4.classList.add('article-preciew-resumes');
    div1.appendChild(div4);
    let parag2 = document.createElement('p');
    parag2.setAttribute('data-resumes', article.getResumes());
    parag2.innerText = article.getResumes();
    div4.appendChild(parag2);

    let pAthor = document.createElement('span');
    pAthor.setAttribute('data-author', article.getAuthor());
    div1.appendChild(pAthor);
    pAthor.innerText = article.getAuthor();

    let date = document.createElement('span');
    date.setAttribute('data-publishedDate', article.getPublishedDate());
    div1.appendChild(date);
    date.innerText = article.getPublishedDate();


    let div5 = document.createElement('div');
    div5.classList.add('article-preciew-tags');
    div1.appendChild(div5);
    let parag3 = document.createElement('p');
    parag3.setAttribute('data-tags', article.getTags());
    parag3.innerText = article.getTags();
    div5.appendChild(parag3);
    section.appendChild(articleBloc);



    image.addEventListener('click', function(){
        document.location.href = 'article.html?id=' + article.getId();

    })
}



        // ------------------ STEP 3 -----------------------
            // AU CLICK SUR LA PREVIEW D'UN ARTICLE (l'elements html) REDIRIGER VERS LA PAGE 'article.html' --->
                // L'url devras ressembler à celle ci (le chemin d'accès vers le fichier + un parametre de type GET) :
                    // 'file:///C:/Users/brian/Desktop/JavascriptMe/article.html?id=1' <----
                        // --- La valeur du parametre id présent dans l'url doit correspondre a l'article clicker





    });
}

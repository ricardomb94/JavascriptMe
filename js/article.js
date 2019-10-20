window.onload = function() {
    readFile('https://raw.githubusercontent.com/promo3Saint-Maur/files/master/articles.json', function(articles) {
        console.log(articles);
    // VOUS Y ETES PRESQUE !!!

    // ------------- FINAL STEP -----------------
        // A PARTIR DU PARAMETRE 'ID' PRESENT DANS L'URL :
            // 1. Récupérer l'article correspondant à partir du fichier 'JSON'
            // 2. Utiliser les données pour instancier un nouvelle object 'Article'
            // 3. Inserer l'article dans la page 'article.html' sous la forme d'un element HTML


    // -- IMPORTANT --------------->
        // ---- comme vous pouvez le constater pour cette final step rien de bien nouveau, allons nous réecrire un code déjà fait ?
        // BIEN SUR QUE NON !
        // Il serait donc peut-etre jusdicieux d'organiser notre code en utilisant des fonctions dynamique réutilisable ;-)

       
        var params = (new URL (document.location)).searchParams;
        var id = parseInt(params.get('id'));
        const section = document.getElementsByTagName('section')[0];
        
        for ( let i = 0; i < articles.length; i++){

            let article = new Article(articles[i].id, articles[i].title, articles[i].content, articles[i].resumes, articles[i].author, articles[i].publishedDate, articles[i].img, articles[i].tags);

            if (id === articles[i].id){
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
            }

        }
    })
}

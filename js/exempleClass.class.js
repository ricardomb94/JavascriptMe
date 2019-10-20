class User {

    constructor(username, email, password ){

        //assignation
        this.username = username;
        this.email = email;
        this.password = password;
    }
    
    getUser(){
        return this.username
    };
 
    getEmail(){
        return this.email
    };
 
    getPassword(){
        return this.password
    };
 
}




class Article {

    constructor(id, title, content, resumes, author, publishedDate, img, tags ){

        //assignation
        this.id = id;
        this.title = title;
        this.content = content;
        this.resumes = resumes;
        this.author = author;
        this.publishedDate = publishedDate;
        this.img = img;
        this.tags = tags;
    }
    

    //Les Gets sont des fonctions qui sont appelés lorsqu'on accède à la propriété de la classe
    getId(){
        return this.id
    };
 
    getTitle(){
        return this.title
    };
 
    getContent(){
        return this.content
    };

    getResumes(){
        return this.resumes
    };    
    getAuthor(){
        return this.author
    };
 
    getPublishedDate(){
        return this.publishedDate
    };
    getImg(){
        return this.img
    };

    getTags(){
        return this.tags
    };
 

//c'est une fonction qui est liée à la propriété de la classe
//qui sera appelé à chaque tentative de modification des propriétés.

//     SetId(){
//         return this.id
//     };    
 
//     SetTitle(){
//         return this.title
//     }; 
//     SetContent(){
//         return this.content
//     }; 
    
//     SetResumes(){
//         return this.resumes
//     }; 
//     SetAuthor(){
//         return this.author
//     }; 
//     SetPublishedDate(){
//         return this.publishedDate
//     }; 

//     SetImg(){
//         return this.img
//     }; 

//     SetTags(){
//         return this.tags
//     }; 
 }













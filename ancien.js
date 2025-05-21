
class clients {
    constructor(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
        this.filmLocations = [];
        
    }
}



class films {
    constructor(titre, annee,realisatrice) {
        this.titre = titre;
        this.annee = annee;
        this.realisatrice = realisatrice;
        this.categories = [];
    }
}

class realisatrices {
    constructor(nom, prenom, date_naissance) {
        this.nom = nom;
        this.prenom = prenom;
        this.annee = date_naissance;
        this.age = new Date().getFullYear() - date_naissance + " ans";
    }
}

const GenreCategorie = {
    fiction : "Fiction",
    documentaire : "Documentaire"
}

class Categorie {
    constructor(nom, GenreCategorie) {
        this.nom = nom;
        this.GenreCategorie = GenreCategorie;
    }
}


function afficher(film) {
    console.log(`Le film ${film.titre} est sorti en ${film.annee} et est réalisé par ${film.realisatrice.prenom}${film.realisatrice.nom}.`);
}

function ajoutCategorie(film, categorie){
    film.categories.push(GenreCategorie[categorie]);
    console.log(`Le film ${film.titre} appartient au genre ${GenreCategorie[categorie]}.`);
    console.log(`Catégories actuelles de ${film.titre} est ${film.categories}` );
   
}

function nouvelleCategorie(categorie) {
    // Vérifie si la catégorie n'existe pas déjà
    if (!GenreCategorie[categorie]) {
        GenreCategorie[categorie] = categorie.charAt(0).toUpperCase() + categorie.slice(1); // Capitalise la première lettre
        console.log(`Nouvelle catégorie ajoutée : ${GenreCategorie[categorie]}`);
    } else {
        console.log(`La catégorie ${categorie} existe déjà.`);
    }
    return GenreCategorie[categorie];
}


function ajouterClient(nom, prenom) {
    const nouveauClient = new clients(nom, prenom);
    Clients.push(nouveauClient);
    console.log(`Le client ${nom} ${prenom} a bien été ajouté.`);
    console.log(nouveauClient);
    return nouveauClient;
}

function ajouterFilmLocation(nom, prenom, film) {
   let client = Clients.find(client => client.nom === nom && client.prenom === prenom);
    client.filmLocations.push(film.titre);
    console.log(`Le film ${film.titre} a bien été ajouté au client ${nom} ${prenom}.`);   
}

function ajouterRealisatrice(nom, prenom, date_naissance) {
    let realisatrice = new realisatrices(nom, prenom, date_naissance);
    listRealisatrice.push(realisatrice);
    console.log(`La realisatrice ${realisatrice.prenom} ${realisatrice.nom} a bien été ajouté.`);
    console.log(listRealisatrice);
    return realisatrice;
}

let listRealisatrice = [];

let listfilms = [];

ajouterRealisatrice("Coppola", "Francis", 1939);


function ajouterFilm(titre, annee, realisatrice) {
    let film = new films(titre, annee, realisatrice);
    listfilms.push(film);
    console.log(`Le film ${film.titre} a bien été ajouté.`);
    console.log(film);
    return film;
}

ajouterFilm("V for Vendetta", 2006, "Werber");


const FordCoppola = new realisatrices('Ford Coppola', 'Francis ', 1939);
const LeParrain = new films('Le Parrain', 1972, FordCoppola);

const Triet = new realisatrices("Triet", "Justine ", 1985);
const Anatomie = new films("Anatomie d'une Chute", 2023, Triet);

const Denis = new realisatrices('Denis', 'Claire ', 1946);
const StarsAtNoon = new films('Stars at Noon', 2023, Denis);

let Clients = [];


afficher(LeParrain);
afficher(Anatomie);
afficher(StarsAtNoon);

// ajoutCategorie("V for Vendetta", "fiction");

ajoutCategorie(LeParrain, "fiction");
ajoutCategorie(Anatomie, "documentaire");
ajoutCategorie(StarsAtNoon, "fiction");

nouvelleCategorie("Thriller");

ajoutCategorie(LeParrain, "Thriller");

console.log(LeParrain.categories);
console.log(GenreCategorie);

ajouterClient("Dupont", "Pierre");
ajouterFilmLocation("Dupont", "Pierre", LeParrain);

console.log(Clients);




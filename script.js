// ---- gestion de la logique de l'application ----

const btnAjouterFilm = document.getElementById("FilmButton");
const btnAjouterClient = document.getElementById("ClientButton");
const btnAjouterRealisatrice = document.getElementById("RealisatriceButton");

const inputTitreFilm = document.getElementById("titre");
const inputAnneeFilm = document.getElementById("annee");
const inputRealisatrice = document.getElementById("realisatrice");
const divFilms = document.querySelector(".ajoutFilm")
const btnAddFilm = document.getElementById("addFilmButton");

const inputNomClient = document.getElementById("nomClient");
const inputPrenomClient = document.getElementById("prenomClient");
const divClients = document.querySelector(".ajoutClient");
const btnAddClient = document.getElementById("addClientButton");

const inputRealisatriceNom = document.getElementById("nomRealisatrice");
const inputRealisatricePrenom = document.getElementById("prenomRealisatrice");
const inputRealisatriceDateNaissance = document.getElementById("date_naissance");
const divRealisatrices = document.querySelector(".ajoutRealisatrice");
const btnAddRealisatrice = document.getElementById("addRealisatriceButton");


divFilms.style.display = "none";

btnAjouterFilm.addEventListener("click", function () {
    if (divFilms.style.display === "block") {
        divFilms.style.display = "none";
    }else{
        divFilms.style.display = "block";
    }
});

btnAddFilm.addEventListener("click", function (e) {
e.preventDefault();
const titre = inputTitreFilm.value;
const annee = inputAnneeFilm.value;
const realisatrice = inputRealisatrice.value;
ajouterFilm(titre, annee, realisatrice);
let categorie = document.getElementById("categorie-select").options[document.getElementById("categorie-select").selectedIndex].text;
ajoutCategorie(titre, categorie);
afficherFilmSite();
});


btnAjouterClient.addEventListener("click", function () {

if (divClients.style.display === "block") {
    divClients.style.display = "none";
}else{
    divClients.style.display = "block";
}
});

btnAddClient.addEventListener("click", function (e) {
e.preventDefault();
const nom = inputNomClient.value;
const prenom = inputPrenomClient.value;
ajouterClient(nom, prenom);
divClients.style.display = "none";
afficherClientSite();
});

btnAjouterRealisatrice.addEventListener("click", function () {
    if (divRealisatrices.style.display === "block") {
        divRealisatrices.style.display = "none";
    }else{
        divRealisatrices.style.display = "block";
    }
});

btnAddRealisatrice.addEventListener("click", function (e) {
e.preventDefault();
const nom = inputRealisatriceNom.value;
const prenom = inputRealisatricePrenom.value;
const date_naissance = inputRealisatriceDateNaissance.value;
ajouterRealisatrice(nom, prenom, date_naissance);
divRealisatrices.style.display = "none";
afficherRealisatriceSite();
});

// ----- Gestion affichage categorie dans le selecteur -----

const categorieSelect = document.getElementById("categorie-select");

function AjouterCategorieSelect() {
    for (const categorie in GenreCategorie) {
    const option = document.createElement("option");
    option.value = categorie;
    option.textContent = GenreCategorie[categorie];
    categorieSelect.appendChild(option);
}
}

// ----- Gestion de la logique d'affichage des listes : film, client, realisatrice, categorie -----


function afficherFilmSite() {
    const titresAffiches = Array.from(filmList.getElementsByTagName("li")).map(li => li.textContent.trim());

    // Ajouter uniquement les films qui ne sont pas déjà affichés
    listfilms.forEach(film => {
        if (!titresAffiches.includes(film.titre)) {
            const liFilm = document.createElement("li");
            liFilm.textContent = film.titre;
            filmList.appendChild(liFilm);
        }
    });
    
}

const ListeDesClients = document.getElementById("clientList");


function afficherClientSite() {
    const clientAffiches = Array.from(ListeDesClients.getElementsByTagName("li")).map(li => li.textContent.trim());
    Clients.forEach(client => {
        if (!clientAffiches.includes(`${client.prenom} ${client.nom}`)) {
              const liClient = document.createElement("li");
            liClient.textContent = `${client.prenom} ${client.nom}`;
            document.getElementById("clientList").appendChild(liClient);          
        }  
    })
}

const ListeDesRealisatrice = document.getElementById("realisatriceList");

function afficherRealisatriceSite() {
    const realisatriceAffiche = Array.from(ListeDesRealisatrice.getElementsByTagName("li")).map(li => li.textContent.trim());
    listRealisatrice.forEach(realisatrice => {
        if (!realisatriceAffiche.includes(`${realisatrice.prenom} ${realisatrice.nom}`)) {
             const liRealisatrice = document.createElement("li");
        liRealisatrice.textContent = `${realisatrice.prenom} ${realisatrice.nom}`;
        document.getElementById("realisatriceList").appendChild(liRealisatrice);
        }
    })
}
const ListeDesCategories = document.getElementById("categorieList");

function afficherInfoCategorieSite() {
    const categorieAffiche = Array.from(ListeDesCategories.getElementsByTagName("li")).map(li => li.textContent.trim());
    GenreCategorie.forEach(categorie => {
        if (!categorieAffiche.includes(categorie.GenreCategorie)) {
            const liCategorie = document.createElement("li");
            liCategorie.textContent = categorie.GenreCategorie;
            ListeDesCategories.appendChild(liCategorie);
        }
    });
}


// ------ Gestion Affichage des informations clique sur une liste ----

const filmList = document.getElementById("filmList");
filmList.addEventListener("click", function (e) {
    const titreClique = e.target.textContent.trim();
    afficher(titreClique);
    afficherInfoFilm(titreClique);
});

function afficherInfoFilm(film) {
    const filmClique = film
    const filmAffiche = listfilms.find(film => film.titre === filmClique )
        console.log(filmAffiche);
        console.log(`Titre : ${filmAffiche.titre} Annee : ${filmAffiche.annee} Realisatrice : ${filmAffiche.realisatrice.prenom} ${filmAffiche.realisatrice.nom}`);

        let pInfo= document.querySelector(".filmInfo");
        pInfo.innerHTML = `Titre : ${filmAffiche.titre} <br> Annee : ${filmAffiche.annee} <br> Realisatrice : ${filmAffiche.realisatrice.prenom} ${filmAffiche.realisatrice.nom} <br> Categories : ${filmAffiche.categories}`
}

const clientList = document.getElementById("clientList");
clientList.addEventListener("click", function (e) {
    const clientClique = e.target.textContent.trim();
    afficherInfoClient(clientClique);
});

function afficherInfoClient(client) {
    const clientClique = client.split(" ");
    const clientAffiche = Clients.find(client => client.prenom === clientClique[0] && client.nom === clientClique[1]);
    console.log(clientAffiche);
    console.log(`Prénom : ${clientAffiche.prenom} Nom : ${clientAffiche.nom} Films Location : ${clientAffiche.filmLocations}`);

    const pInfoClient= document.querySelector(".infoClientp");
    pInfoClient.innerHTML = `Prénom : ${clientAffiche.prenom} <br> Nom : ${clientAffiche.nom} <br> Films Location : ${clientAffiche.filmLocations}`
}

const realisatriceList = document.getElementById("realisatriceList");
realisatriceList.addEventListener("click", function (e) {
    const realisatriceClique = e.target.textContent.trim();
    afficherInfoRealisatrice(realisatriceClique);
});

function afficherInfoRealisatrice(realisatrice) {
    const realisatriceClique = realisatrice.split(" ");
    console.log(realisatriceClique);
    const realisatriceAffiche = listRealisatrice.find(realisatrice => 
        realisatrice.prenom.includes(realisatriceClique[0])  && 
        realisatrice.nom.includes(realisatriceClique[1]));
        console.log("Voici" , realisatriceAffiche);
        if (realisatriceAffiche === undefined) {
          const realisatriceAffiche2 = listRealisatrice.find(realisatrice => 
            realisatrice.prenom.includes(realisatriceClique[0])  && 
            realisatrice.nom.includes(realisatriceClique[2]));
            console.log(realisatriceAffiche2);
        }

const filmRealisatrice = listfilms.filter(film => film.realisatrice.nom === realisatriceAffiche.nom && film.realisatrice.prenom === realisatriceAffiche.prenom);

        const InfoRealisatrice = document.querySelector(".infoRealisatrice");
        InfoRealisatrice.innerHTML = `Nom : ${realisatriceAffiche.prenom} <br> Prenom : ${realisatriceAffiche.nom} <br> Age : ${realisatriceAffiche.age}<br> Film : ${filmRealisatrice.map(film => film.titre)}`;
     
}

const categorieList = document.getElementById("categorieList");
categorieList.addEventListener("click", function (e) {
    const categorieClique = e.target.textContent.trim();
    afficherInfoCategorie(categorieClique);
});
function afficherInfoCategorie(categorie) {
    const categorieNormalisee = categorie.charAt(0).toUpperCase() + categorie.slice(1).toLowerCase();
    const categorieAffiche = GenreCategorie.find(cat => cat.GenreCategorie === categorieNormalisee);
    
    if (!categorieAffiche) {
        console.log(`La catégorie ${categorieNormalisee} n'existe pas.`);
        return;
    }

    const filmsDansCategorie = listfilms.filter(film => film.categories.some(cat => cat.GenreCategorie === categorieAffiche.GenreCategorie));
    console.log(`Catégorie : ${categorieAffiche.GenreCategorie}`);
    console.log(`Films : ${filmsDansCategorie.map(film => film.titre).join(", ") || "Aucun film"}`);

    const InfoCategorie = document.querySelector(".infoCategorie");
    InfoCategorie.innerHTML = `Catégorie : ${categorieAffiche.GenreCategorie} <br> Films : ${filmsDansCategorie.map(film => film.titre).join(", ") || "Aucun film"}`;
}

// ----- Gestion class et fonction pour ajouter un film, un client et une realisatrice -----

class clients {
    constructor(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
        this.filmLocations = [];
        
    }
}

let Clients = [];

class films {
    constructor(titre, annee,realisatrice) {
        this.titre = titre;
        this.annee = annee;
        this.realisatrice = realisatrice;
        this.categories = [];
    }
}

let listfilms = [];


class realisatrices {
    constructor(nom, prenom, date_naissance) {
        this.nom = nom;
        this.prenom = prenom;
        this.annee = date_naissance;
        this.age = new Date().getFullYear() - date_naissance + " ans";
    }
}

let listRealisatrice = [];


class Categorie {
    constructor(genre) {
        this.GenreCategorie = genre;
    }
    toString() {
        return this.GenreCategorie;
    }
}

const CategorieEnum = {
    FICTION: "Fiction",
    DOCUMENTAIRE: "Documentaire",
    THRILLER: "Thriller",
};

let GenreCategorie = [
    new Categorie(CategorieEnum.FICTION),
    new Categorie(CategorieEnum.DOCUMENTAIRE),
    new Categorie(CategorieEnum.THRILLER),
];

// ----- fin du nouveau  script --------------------------------------------------


function ajouterFilm(titre, annee, realisatrice) {
     // Normalisation : suppression des espaces et conversion en minuscules
    const nomNormaliser = realisatrice.toLowerCase().replace(/\s+/g, '');
    // Recherche d'un film dont le titre normalisé contient la chaîne normalisée
    const REALISATRICE = listRealisatrice.find(realisatrice => 
        realisatrice.nom.toLowerCase().replace(/\s+/g, '').includes(nomNormaliser)
    );
    // let Realisatrice = listRealisatrice.find(r => r.nom === realisatrice);
    if (!REALISATRICE) {
        alert("La realisatrice n'existe pas.");
        divRealisatrices.style.display = "block";
        return;
    }
    let film = new films(titre, annee, REALISATRICE);
    listfilms.push(film);
    divFilms.style.display = "none";
    console.log(`Le film ${film.titre} a bien été ajouté.`);
    console.log(film);
    return film;
}

function afficherFilms() {
    console.log("Liste des films :");
    listfilms.forEach(film => {
        const categories = film.categories.map(cat => cat.GenreCategorie).join(", ") || "Aucune catégorie";
        console.log(`- ${film.titre} (${film.annee}), réalisé par ${film.realisatrice.prenom} ${film.realisatrice.nom}`);
        console.log(`  Catégories : ${categories}`);
    });
}

function ajouterRealisatrice(nom, prenom, date_naissance) {
    let realisatrice = new realisatrices(nom, prenom, date_naissance);
    listRealisatrice.push(realisatrice);
    console.log(`La realisatrice ${realisatrice.prenom} ${realisatrice.nom} a bien été ajouté.`);
    console.log(listRealisatrice);
    return realisatrice;
}


function afficher(titre) {
    // Normalisation : suppression des espaces et conversion en minuscules
    const titreNormalise = titre.toLowerCase().replace(/\s+/g, '');
    // Recherche d'un film dont le titre normalisé contient la chaîne normalisée
    const FILM = listfilms.find(film => 
        film.titre.toLowerCase().replace(/\s+/g, '').includes(titreNormalise)
    );
    // Vérification si un film a été trouvé
    if (!FILM) {
        console.log(`Aucun film trouvé pour "${titre}".`);
        return;
    }
    // Affichage des informations du film
    console.log(`Le film ${FILM.titre} est sorti en ${FILM.annee} et est réalisé par ${FILM.realisatrice.prenom} ${FILM.realisatrice.nom}.`);
}

function nouvelleCategorie(categorie) {
    // Capitaliser la première lettre pour normaliser
    const categorieNormalisee = categorie.charAt(0).toUpperCase() + categorie.slice(1).toLowerCase();
    
    if (GenreCategorie.some(cat => cat.GenreCategorie === categorieNormalisee)) {
        console.log(`La catégorie ${categorieNormalisee} existe déjà.`);
        return;
    }
    
    const nouvelleCat = new Categorie(categorieNormalisee);
    GenreCategorie.push(nouvelleCat);
    console.log(`Nouvelle catégorie ajoutée : ${categorieNormalisee}`);
    return nouvelleCat;
}

function ajoutCategorie(titreFilm, nomCategorie) {
    // Normalisation du titre du film
    const titreNormalise = titreFilm.toLowerCase().replace(/\s+/g, '');
    const film = listfilms.find(f => f.titre.toLowerCase().replace(/\s+/g, '').includes(titreNormalise));
    
    if (!film) {
        console.log(`Aucun film trouvé pour "${titreFilm}".`);
        return;
    }

    // Normaliser le nom de la catégorie
    const categorieNormalisee = nomCategorie.charAt(0).toUpperCase() + nomCategorie.slice(1).toLowerCase();
    
    // Vérifier si la catégorie existe
    const categorie = GenreCategorie.find(cat => cat.GenreCategorie === categorieNormalisee);
    if (!categorie) {
        console.log(`La catégorie ${categorieNormalisee} n'existe pas. Ajoutez-la d'abord avec nouvelleCategorie.`);
        return;
    }

    // Vérifier si le film a déjà cette catégorie
    if (film.categories.some(cat => cat.GenreCategorie === categorieNormalisee)) {
        console.log(`Le film ${film.titre} a déjà la catégorie ${categorieNormalisee}.`);
        return;
    }

    // Ajouter la catégorie au film
    film.categories.push(categorie);
    console.log(`Le film ${film.titre} appartient au genre ${categorie.GenreCategorie}.`);
    console.log(`Catégories actuelles de ${film.titre} :`, film.categories.map(cat => cat.GenreCategorie).join(", "));
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
   let titreFilm = listfilms.find(f => f.titre === film);
    client.filmLocations.push(titreFilm.titre);
    console.log(`Le film ${titreFilm.titre} a bien été ajouté au client ${nom} ${prenom}.`);   
}

// ---Initialisation des données ---

ajouterRealisatrice("Ford Coppola", "Francis", 1939);
ajouterRealisatrice("Triet", "Justine", 1985);
ajouterRealisatrice("Denis", "Claire", 1946);
ajouterRealisatrice("McTeigue", "Lana", 1965);

ajouterFilm("V for Vendetta", 2006, "McTeigue");
ajouterFilm("Le Parrain", 1972, "Ford Coppola");
ajouterFilm("Anatomie d'une Chute", 2023, "Triet");
ajouterFilm("Stars at noon", 2023, "Denis");

afficher("Le Parrain");
afficher("Anatomie");
afficher("StarsAtNoon");
afficher("Pipou");

nouvelleCategorie("Thriller");

ajoutCategorie("V for Vendetta", "fiction");
ajoutCategorie("Le Parrain", "fiction");
ajoutCategorie("Anatomie", "documentaire");
ajoutCategorie("StarsAtNoon", "fiction");
ajoutCategorie("Le Parrain", "Thriller");

ajouterClient("Dupont", "Pierre");

ajouterFilmLocation("Dupont", "Pierre", "Le Parrain");

console.log(Clients);

afficherFilms();


// ----- GESTION API POUR LES AFFICHES --- 

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjBkODdhNWY5NGFkNTViZGEyNDMyNDAzMzUzOGIyMyIsIm5iZiI6MTc0NzcyNzQ5NS44NCwic3ViIjoiNjgyYzM0ODdiMzg2OWQ4NjdkZTI0ZmVkIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.zPfPC1c3YtKxKNEalxgU8qxZcGpG6Q9_wwloahO0Psw'
  }
};

const movieTitle = 'Bernie';

// fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movieTitle)}`, options)
//   .then(res => res.json())
//   .then(data => {
//     if (data.results && data.results.length > 0) {
//       const movieId = data.results[0].id; // Récupère l'ID du premier résultat
//       console.log('ID du film :', movieId);

//       // Récupérer les images avec priorité pour le français
//       fetch(`https://api.themoviedb.org/3/movie/${movieId}/images?language=fr-FR&include_image_language=fr,null`, options)
//         .then(res => res.json())
//         .then(data => {
//           if (data.posters && data.posters.length > 0) {
//             const posterPath = data.posters[0].file_path; // Prend le premier poster
//             const imageUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;
//             console.log('URL de l\'image (français ou générique) :', imageUrl);
//             document.getElementById('movie-poster').src = imageUrl;
//           } else {
//             console.log('Aucune image trouvée en français ou générique.');
//           }
//         })
//         .catch(err => console.error('Erreur lors de la récupération des images :', err));
//     } else {
//       console.log('Film non trouvé.');
//     }
//   })
//   .catch(err => console.error('Erreur lors de la recherche :', err));





// Configuration de la requête pour trouver l'affiche du film


// Remplacez {movie_id} par l'ID du film (par exemple, 550 pour Fight Club)
const movieId = 550;

// fetch(`https://api.themoviedb.org/3/movie/${movieId}/images`, options)
//   .then(res => res.json())
//   .then(data => {
//     // Vérifiez la réponse
//     console.log(data);

//     // Exemple : récupérer le premier poster
//     if (data.posters && data.posters.length > 0) {
//       const posterPath = data.posters[0].file_path; // Chemin du poster
//       const imageUrl = `https://image.tmdb.org/t/p/w500${posterPath}`; // URL complète
//       console.log('URL de l\'image :', imageUrl);

//       // Vous pouvez utiliser cette URL pour afficher l'image dans une balise <img>
//       // Exemple : document.getElementById('movie-poster').src = imageUrl;
//     } else {
//       console.log('Aucune image trouvée pour ce film.');
//     }
//   })
//   .catch(err => console.error('Erreur :', err));




// ----- Caroussel -----

$(document).ready(function(){
    $('.monCaroussel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true, // Activer les flèches de navigation
        dots: true,   // Activer les points de pagination
        responsive: [ // Ajouter une configuration responsive
            {
                breakpoint: 768, // Pour écrans < 768px
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480, // Pour écrans < 480px
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});



// ---- Initialisation des listes -----

afficherFilmSite();
afficherClientSite();
afficherRealisatriceSite();
afficherInfoCategorieSite();
AjouterCategorieSelect();
export default class Film {
    // 1. Typage des propiétés d'un pokémon.
    idFilm: number;
    titre: string;
    anneeFilm: string;
    commentaireFilm: string;
    idTypeFilm: number;
     
    // 2. Définition des valeurs par défaut des propriétés d'un pokémon.
    constructor(
    //  id: number,
    //  hp: number = 100,
    //  cp: number = 10,
    //  name: string = 'name',
    //  picture: string = 'http://...',
    //  types: Array<string> = ['Normal'],
    //  created: Date = new Date()
    idFilm: number,
    titre: string,
    anneeFilm: string,
    commentaireFilm: string,
    idTypeFilm: number,
    ) {
     // 3. Initialisation des propiétés d'un pokémons.
     this.idFilm = idFilm;
     this.titre = titre;
     this.anneeFilm = anneeFilm;
     this.commentaireFilm = commentaireFilm;
     this.idTypeFilm = idTypeFilm;
    }
   }
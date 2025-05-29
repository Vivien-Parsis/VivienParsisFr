import { locations } from "./location";

//distance : distance en train d'un trajet
//number : nombre de trajet (un allez retour vaut donc 2)
const trajets = {
    "Paris-Hendaye": {
        coords: [locations["Paris"].coord, locations["Hendaye"].coord],
        number: 1,
        distance: 803,
        mois: "Janvier 2024",
        type: "train"
    },
    "Paris-Villers-Cotterêts": {
        coords: [locations["Paris"].coord, locations["Villers-Cotterêts"].coord],
        number: 2,
        distance: 84,
        mois: "Mars 2024",
        type: "train"
    },
    "Paris-Château-Thierry": {
        coords: [locations["Paris"].coord, locations["Château-Thierry"].coord],
        number: 2,
        distance: 95,
        mois: "Aout 2024",
        type: "train"
    },
    "Paris-Vernon": {
        coords: [locations["Paris"].coord, locations["Vernon"].coord],
        number: 2,
        distance: 103,
        mois: "Aout 2024",
        type: "train"
    },
    "Paris-Creil": {
        coords: [locations["Paris"].coord, locations["Creil"].coord],
        number: 2,
        distance: 67,
        mois: "Mars 2024",
        type: "train"
    },
    "Paris-Lille": {
        coords: [locations["Paris"].coord, locations["Lille"].coord],
        number: 2,
        distance: 204,
        mois: "Aout 2024",
        type: "train"
    },
    "Paris-Avallon": {
        coords: [locations["Paris"].coord, locations["Avallon"].coord],
        number: 2,
        distance: 191,
        mois: "Aout 2024",
        type: "train"
    },
    "Paris-Auxerre": {
        coords: [locations["Paris"].coord, locations["Auxerre"].coord],
        number: 2,
        distance: 149,
        mois: "Aout 2024",
        type: "train"
    },
    "Paris-Chartres": {
        coords: [locations["Paris"].coord, locations["Chartres"].coord],
        number: 2,
        distance: 78,
        mois: "Aout 2024",
        type: "train"
    },
    "Paris-Orléans": {
        coords: [locations["Paris"].coord, locations["Orléans"].coord],
        number: 2,
        distance: 110,
        mois: "Aout 2024",
        type: "train"
    },
    "Paris-Le Havre": {
        coords: [locations["Paris"].coord, locations["Le Havre"].coord],
        number: 2,
        distance: 174,
        mois: "Aout 2024",
        type: "train"
    },
    "Paris-Caen": {
        coords: [locations["Paris"].coord, locations["Caen"].coord],
        number: 2,
        distance: 202,
        mois: "Aout 2024",
        type: "train"
    },
    "Paris-Deauville": {
        coords: [locations["Paris"].coord, locations["Deauville"].coord],
        number: 2,
        distance: 173,
        mois: "Aout 2024",
        type: "train"
    },
    "Paris-Rouen": {
        coords: [locations["Paris"].coord, locations["Rouen"].coord],
        number: 2,
        distance: 126,
        mois: "Aout 2024",
        type: "train"
    },
    "Paris-Dieppe": {
        coords: [locations["Paris"].coord, locations["Dieppe"].coord],
        number: 2,
        distance: 170,
        mois: "Aout 2024",
        type: "train"
    },
    "Paris-Amiens": {
        coords: [locations["Paris"].coord, locations["Amiens"].coord],
        number: 2,
        distance: 140,
        mois: "Aout 2024",
        type: "train"
    },
    "Paris-Troyes": {
        coords: [locations["Paris"].coord, locations["Troyes"].coord],
        number: 2,
        distance: 160,
        mois: "Aout 2024",
        type: "train"
    },
    "Toulouse-Bayonne": {
        coords: [locations["Toulouse"].coord, locations["Bayonne"].coord],
        number: 2,
        distance: 296,
        mois: "Aout 2024",
        type: "train"
    },
    "Hendaye-Bayonne": {
        coords: [locations["Hendaye"].coord, locations["Bayonne"].coord],
        number: 2,
        distance: 40,
        mois: "Aout 2024",
        type: "train"
    },
    "Paris-Toulouse": {
        coords: [locations["Paris"].coord, locations["Toulouse"].coord],
        number: 2,
        distance: 677,
        mois: "Aout 2024",
        type: "train"
    },
    "Toulouse-Montauban": {
        coords: [locations["Toulouse"].coord, locations["Montauban"].coord],
        number: 2,
        distance: 54,
        mois: "Juillet 2024",
        type: "train"
    },
    "Toulouse-Agen": {
        coords: [locations["Toulouse"].coord, locations["Agen"].coord],
        number: 2,
        distance: 114,
        mois: "Juillet 2024",
        type: "train"
    },
    "Toulouse-Carcassonne": {
        coords: [locations["Toulouse"].coord, locations["Carcassonne"].coord],
        number: 2,
        distance: 93,
        mois: "Juillet 2024",
        type: "train"
    },
    "Toulouse-Narbonne": {
        coords: [locations["Toulouse"].coord, locations["Narbonne"].coord],
        number: 2,
        distance: 148,
        mois: "Juillet 2024",
        type: "train"
    },
    "Toulouse-Bordeaux": {
        coords: [locations["Toulouse"].coord, locations["Bordeaux"].coord],
        number: 2,
        distance: 244,
        mois: "Juillet 2024",
        type: "train"
    },
    "Narbonne-Montpellier": {
        coords: [locations["Narbonne"].coord, locations["Montpellier"].coord],
        number: 2,
        distance: 96,
        mois: "Juillet 2024",
        type: "train"
    },
    "Paris-Lille2": {
        coords: [locations["Paris"].coord, locations["Lille"].coord],
        number: 2,
        distance: 204,
        mois: "Novembre 2024",
        type: "train"
    },
    "Bayonne-Bordeaux": {
        coords: [locations["Bayonne"].coord, locations["Bordeaux"].coord],
        number: 1,
        distance: 197,
        mois: "Décembre 2024",
        type: "train"
    },
    "Bordeaux-Paris": {
        coords: [locations["Bordeaux"].coord, locations["Paris"].coord],
        number: 1,
        distance: 582,
        mois: "Décembre 2024",
        type: "train"
    },
    "Paris-Chantilly": {
        coords: [locations["Paris"].coord, locations["Chantilly"].coord],
        number: 2,
        distance: 54,
        mois: "Fevrier 2025",
        type: "voiture"
    },
    "Paris-Nantes": {
        coords: [locations["Paris"].coord, locations["Nantes"].coord],
        number: 2,
        distance: 379,
        mois: "Mars 2025",
        type: "train"
    },
    "Paris-Lyon": {
        coords: [locations["Paris"].coord, locations["Lyon"].coord],
        number: 2,
        distance: 466,
        mois: "Avril 2025",
        type: "train"
    },
    "Paris-Compiegne": {
        coords: [locations["Paris"].coord, locations["Compiegne"].coord],
        number: 1,
        distance: 43,
        mois: "Avril 2025",
        type: "voiture"
    },
    "Compiegne-Pierrefonds": {
        coords: [locations["Compiegne"].coord, locations["Pierrefonds"].coord],
        number: 1,
        distance: 34,
        mois: "Avril 2025",
        type: "voiture"
    },
    "Pierrefonds-Paris": {
        coords: [locations["Pierrefonds"].coord, locations["Paris"].coord],
        number: 1,
        distance: 90,
        mois: "Avril 2025",
        type: "voiture"
    },
    "Paris-Reims": {
        coords: [locations["Paris"].coord, locations["Reims"].coord],
        number: 2,
        distance: 144,
        mois: "Mai 2025",
        type: "voiture"
    }
};

export { trajets }
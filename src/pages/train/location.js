const center = [46.6380, 2.5700]

const locations = {
    "Paris": {
        coord: [48.853, 2.349],
        photos: [
            "/images/city/paris/paris1.jpg",
            "/images/city/paris/paris2.jpg",
            "/images/city/paris/paris3.jpg",
        ]
    },
    "Lille": {
        coord: [50.6364, 3.0708],
        photos: []
    },
    "Avallon": {
        coord: [47.4955, 3.9124],
        photos: []
    },
    "Auxerre": {
        coord: [47.7970, 3.5849],
        photos: []
    },
    "Chartres": {
        coord: [48.4560, 1.4840],
        photos: []
    },
    "Orléans": {
        coord: [47.9047, 1.9028],
        photos: []
    },
    "Le Havre": {
        coord: [49.4928, 0.1077],
        photos: []
    },
    "Caen": {
        coord: [49.1767, -0.3472],
        photos: []
    },
    "Deauville": {
        coord: [49.3566, 0.0789],
        photos: []
    },
    "Rouen": {
        coord: [49.4431, 1.0930],
        photos: []
    },
    "Dieppe": {
        coord: [49.9225, 1.0771],
        photos: []
    },
    "Amiens": {
        coord: [49.8950, 2.3025],
        photos: []
    },
    "Troyes": {
        coord: [48.2967, 4.0784],
        photos: []
    },
    "Toulouse": {
        coord: [43.6111, 1.4546],
        photos: []
    },
    "Bayonne": {
        coord: [43.4933, -1.4747],
        photos: []
    },
    "Hendaye": {
        coord: [43.3589, -1.7746],
        photos: []
    },
    "Montauban": {
        coord: [44.0172, 1.3558],
        photos: []
    },
    "Agen": {
        coord: [44.2000, 0.6200],
        photos: []
    },
    "Carcassonne": {
        coord: [43.2130, 2.3530],
        photos: []
    },
    "Narbonne": {
        coord: [43.1843, 3.0034],
        photos: []
    },
    "Bordeaux": {
        coord: [44.8253, -0.5560],
        photos: []
    },
    "Montpellier": {
        coord: [43.6045, 3.8795],
        photos: []
    },
    "Nantes": {
        coord: [47.2173, -1.5534],
        photos: []
    },
    "Lyon": {
        coord: [45.7600, 4.8590],
        photos: [
            "/images/city/lyon/lyon1.jpg",
            "/images/city/lyon/lyon2.jpg",
            "/images/city/lyon/lyon3.jpg",
            "/images/city/lyon/lyon4.jpg",
            "/images/city/lyon/lyon5.jpg",
            "/images/city/lyon/lyon6.jpg",
            "/images/city/lyon/lyon7.jpg",
            "/images/city/lyon/lyon8.jpg"
        ]
    },
    "Château-Thierry": {
        coord: [49.037957, 3.409492],
        photos: []
    },
    "Vernon": {
        coord: [49.091193, 1.478397],
        photos: []
    },
    "Creil": {
        coord: [49.264104, 2.469087],
        photos: []
    },
    "Villers-Cotterêts": {
        coord: [49.250107, 3.093957],
        photos: []
    },
    "Chantilly": {
        coord: [49.1942, 2.4707],
        photos: []
    },
    "Compiegne": {
        coord: [49.4179, 2.8261],
        photos: []
    },
    "Pierrefonds": {
        coord: [49.3486, 2.9874],
        photos: []
    },
    "Reims": {
        coord: [49.2583, 4.0317],
        photos: []
    }
}
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

export { center, locations, trajets }
const center = [46.6380, 2.5700]

const locations = {
    "Paris": {
        coord: [48.853, 2.349]
    },
    "Lille": {
        coord: [50.6364, 3.0708]
    },
    "Avallon": {
        coord: [47.4955, 3.9124]
    },
    "Auxerre": {
        coord: [47.7970, 3.5849]
    },
    "Chartres": {
        coord: [48.4560, 1.4840]
    },
    "Orléans": {
        coord: [47.9047, 1.9028]
    },
    "Le Havre": {
        coord: [49.4928, 0.1077]
    },
    "Caen": {
        coord: [49.1767, -0.3472]
    },
    "Deauville": {
        coord: [49.3566, 0.0789]
    },
    "Rouen": {
        coord: [49.4431, 1.0930]
    },
    "Dieppe": {
        coord: [49.9225, 1.0771]
    },
    "Amiens": {
        coord: [49.8950, 2.3025]
    },
    "Troyes": {
        coord: [48.2967, 4.0784]
    },
    "Toulouse": {
        coord: [43.6111, 1.4546]
    },
    "Bayonne": {
        coord: [43.4933, -1.4747]
    },
    "Hendaye": {
        coord: [43.3589, -1.7746]
    },
    "Montauban": {
        coord: [44.0172, 1.3558]
    },
    "Agen": {
        coord: [44.2000, 0.6200]
    },
    "Carcassonne": {
        coord: [43.2130, 2.3530]
    },
    "Narbonne": {
        coord: [43.1843, 3.0034]
    },
    "Bordeaux": {
        coord: [44.8253, -0.5560]
    },
    "Montpellier": {
        coord: [43.6045, 3.8795]
    },
    "Nantes": {
        coord: [47.2173, -1.5534]
    },
    "Lyon": {
        coord: [45.7600, 4.8590]
    },
    "Château-Thierry": {
        coord: [49.037957, 3.409492]
    },
    "Vernon": {
        coord: [49.091193, 1.478397]
    },
    "Creil": {
        coord: [49.264104, 2.469087]
    },
    "Villers-Cotterêts": {
        coord: [49.250107, 3.093957]
    }
}
//distance : distance en train d'un trajet
//number : nombre de trajet (un allez retour vaut donc 2)
const trajets = {
    "Paris-Hendaye": {
        coords: [locations["Paris"].coord, locations["Hendaye"].coord],
        number: 1,
        distance: 803,
        mois: "Janvier 2024"
    },
    "Paris-Villers-Cotterêts": {
        coords: [locations["Paris"].coord, locations["Villers-Cotterêts"].coord],
        number: 2,
        distance: 84,
        mois: "Mars 2024"
    },
    "Paris-Château-Thierry": {
        coords: [locations["Paris"].coord, locations["Château-Thierry"].coord],
        number: 2,
        distance: 95,
        mois: "Aout 2024"
    },
    "Paris-Vernon": {
        coords: [locations["Paris"].coord, locations["Vernon"].coord],
        number: 2,
        distance: 103,
        mois: "Aout 2024"
    },
    "Paris-Creil": {
        coords: [locations["Paris"].coord, locations["Creil"].coord],
        number: 2,
        distance: 67,
        mois: "Mars 2024"
    },
    "Paris-Lille": {
        coords: [locations["Paris"].coord, locations["Lille"].coord],
        number: 2,
        distance: 204,
        mois: "Aout 2024"
    },
    "Paris-Avallon": {
        coords: [locations["Paris"].coord, locations["Avallon"].coord],
        number: 2,
        distance: 191,
        mois: "Aout 2024"
    },
    "Paris-Auxerre": {
        coords: [locations["Paris"].coord, locations["Auxerre"].coord],
        number: 2,
        distance: 149,
        mois: "Aout 2024"
    },
    "Paris-Chartres": {
        coords: [locations["Paris"].coord, locations["Chartres"].coord],
        number: 2,
        distance: 78,
        mois: "Aout 2024"
    },
    "Paris-Orléans": {
        coords: [locations["Paris"].coord, locations["Orléans"].coord],
        number: 2,
        distance: 110,
        mois: "Aout 2024"
    },
    "Paris-Le Havre": {
        coords: [locations["Paris"].coord, locations["Le Havre"].coord],
        number: 2,
        distance: 174,
        mois: "Aout 2024"
    },
    "Paris-Caen": {
        coords: [locations["Paris"].coord, locations["Caen"].coord],
        number: 2,
        distance: 202,
        mois: "Aout 2024"
    },
    "Paris-Deauville": {
        coords: [locations["Paris"].coord, locations["Deauville"].coord],
        number: 2,
        distance: 173,
        mois: "Aout 2024"
    },
    "Paris-Rouen": {
        coords: [locations["Paris"].coord, locations["Rouen"].coord],
        number: 2,
        distance: 126,
        mois: "Aout 2024"
    },
    "Paris-Dieppe": {
        coords: [locations["Paris"].coord, locations["Dieppe"].coord],
        number: 2,
        distance: 170,
        mois: "Aout 2024"
    },
    "Paris-Amiens": {
        coords: [locations["Paris"].coord, locations["Amiens"].coord],
        number: 2,
        distance: 140,
        mois: "Aout 2024"
    },
    "Paris-Troyes": {
        coords: [locations["Paris"].coord, locations["Troyes"].coord],
        number: 2,
        distance: 160,
        mois: "Aout 2024"
    },
    "Toulouse-Bayonne": {
        coords: [locations["Toulouse"].coord, locations["Bayonne"].coord],
        number: 2,
        distance: 296,
        mois: "Aout 2024"
    },
    "Hendaye-Bayonne": {
        coords: [locations["Hendaye"].coord, locations["Bayonne"].coord],
        number: 2,
        distance: 40,
        mois: "Aout 2024"
    },
    "Paris-Toulouse": {
        coords: [locations["Paris"].coord, locations["Toulouse"].coord],
        number: 2,
        distance: 677,
        mois: "Aout 2024"
    },
    "Toulouse-Montauban": {
        coords: [locations["Toulouse"].coord, locations["Montauban"].coord],
        number: 2,
        distance: 54,
        mois: "Juillet 2024"
    },
    "Toulouse-Agen": {
        coords: [locations["Toulouse"].coord, locations["Agen"].coord],
        number: 2,
        distance: 114,
        mois: "Juillet 2024"
    },
    "Toulouse-Carcassonne": {
        coords: [locations["Toulouse"].coord, locations["Carcassonne"].coord],
        number: 2,
        distance: 93,
        mois: "Juillet 2024"
    },
    "Toulouse-Narbonne": {
        coords: [locations["Toulouse"].coord, locations["Narbonne"].coord],
        number: 2,
        distance: 148,
        mois: "Juillet 2024"
    },
    "Toulouse-Bordeaux": {
        coords: [locations["Toulouse"].coord, locations["Bordeaux"].coord],
        number: 2,
        distance: 244,
        mois: "Juillet 2024"
    },
    "Narbonne-Montpellier": {
        coords: [locations["Narbonne"].coord, locations["Montpellier"].coord],
        number: 2,
        distance: 96,
        mois: "Juillet 2024"
    },
    "Paris-Lille2": {
        coords: [locations["Paris"].coord, locations["Lille"].coord],
        number: 2,
        distance: 204,
        mois: "Novembre 2024"
    },
    "Bayonne-Bordeaux": {
        coords: [locations["Bayonne"].coord, locations["Bordeaux"].coord],
        number: 1,
        distance: 197,
        mois: "Décembre 2024"
    },
    "Bordeaux-Paris": {
        coords: [locations["Bordeaux"].coord, locations["Paris"].coord],
        number: 1,
        distance: 582,
        mois: "Décembre 2024"
    },
    "Paris-Nantes": {
        coords: [locations["Paris"].coord, locations["Nantes"].coord],
        number: 2,
        distance: 379,
        mois: "Mars 2025"
    },
    "Paris-Lyon": {
        coords: [locations["Paris"].coord, locations["Lyon"].coord],
        number: 2,
        distance: 466,
        mois: "Avril 2025"
    },
};

export { center, locations, trajets }
const center = [46.6380, 2.5700]

const locations = {
    "Paris": {
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
        coord: [48.853, 2.349],
        photos: [
            "/images/city/paris/paris1.jpg",
            "/images/city/paris/paris2.jpg",
            "/images/city/paris/paris3.jpg",
        ]
    },
    "Lille": {
        icons: "/images/icon/town-svgrepo-com.png",
        coord: [50.6364, 3.0708],
        photos: []
    },
    "Avallon": {
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
        coord: [47.4955, 3.9124],
        photos: [
            "/images/city/avallon/avallon1.jpg",
            "/images/city/avallon/avallon2.jpg",
            "/images/city/avallon/avallon3.jpg",
            "/images/city/avallon/avallon4.jpg",
            "/images/city/avallon/avallon5.jpg",
            "/images/city/avallon/avallon6.jpg",
            "/images/city/avallon/avallon7.jpg",
            "/images/city/avallon/avallon8.jpg",
            "/images/city/avallon/avallon9.jpg",
            "/images/city/avallon/avallon10.jpg",
        ]
    },
    "Auxerre": {
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
        coord: [47.7970, 3.5849],
        photos: [
            "/images/city/auxerre/auxerre1.jpg",
            "/images/city/auxerre/auxerre2.jpg",
            "/images/city/auxerre/auxerre3.jpg",
            "/images/city/auxerre/auxerre4.jpg",
            "/images/city/auxerre/auxerre5.jpg",
            "/images/city/auxerre/auxerre6.jpg",
            "/images/city/auxerre/auxerre7.jpg",
            "/images/city/auxerre/auxerre8.jpg",
            "/images/city/auxerre/auxerre9.jpg",
        ]
    },
    "Chartres": {
        icons: "/images/icon/town-svgrepo-com.png",
        coord: [48.4560, 1.4840],
        photos: []
    },
    "Orléans": {
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
        coord: [47.9047, 1.9028],
        photos: [
            "/images/city/orleans/orleans1.jpg",
            "/images/city/orleans/orleans2.jpg",
            "/images/city/orleans/orleans3.jpg",
            "/images/city/orleans/orleans4.jpg",
            "/images/city/orleans/orleans5.jpg",
            "/images/city/orleans/orleans6.jpg",
            "/images/city/orleans/orleans7.jpg",
        ]
    },
    "Le Havre": {
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
        coord: [49.4928, 0.1077],
        photos: [
            "/images/city/havre/havre1.jpg",
            "/images/city/havre/havre2.jpg",
            "/images/city/havre/havre3.jpg",
            "/images/city/havre/havre4.jpg",
            "/images/city/havre/havre5.jpg",
            "/images/city/havre/havre6.jpg",
            "/images/city/havre/havre7.jpg",
            "/images/city/havre/havre8.jpg",
            "/images/city/havre/havre9.jpg",
            "/images/city/havre/havre10.jpg",
            "/images/city/havre/havre11.jpg",
        ]
    },
    "Caen": {
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
        coord: [49.1767, -0.3472],
        photos: [
            "/images/city/caen/caen1.jpg",
            "/images/city/caen/caen2.jpg",
            "/images/city/caen/caen3.jpg",
            "/images/city/caen/caen4.jpg",
            "/images/city/caen/caen5.jpg",
            "/images/city/caen/caen6.jpg",
            "/images/city/caen/caen7.jpg",
            "/images/city/caen/caen8.jpg",
        ]
    },
    "Deauville": {
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
        coord: [49.3566, 0.0789],
        photos: [
            "/images/city/deauville/deauville1.jpg",
            "/images/city/deauville/deauville2.jpg",
            "/images/city/deauville/deauville3.jpg",
            "/images/city/deauville/deauville4.jpg",
            "/images/city/deauville/deauville5.jpg",
            "/images/city/deauville/deauville6.jpg",
            "/images/city/deauville/deauville7.jpg",
        ]
    },
    "Rouen": {
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
        coord: [49.4431, 1.0930],
        photos: [
            "/images/city/rouen/rouen1.jpg",
            "/images/city/rouen/rouen2.jpg",
            "/images/city/rouen/rouen3.jpg",
            "/images/city/rouen/rouen4.jpg",
            "/images/city/rouen/rouen5.jpg",
            "/images/city/rouen/rouen6.jpg",
            "/images/city/rouen/rouen7.jpg",
            "/images/city/rouen/rouen8.jpg",
            "/images/city/rouen/rouen9.jpg",
            "/images/city/rouen/rouen10.jpg",
        ]
    },
    "Dieppe": {
        icons: "/images/icon/town-svgrepo-com.png",
        coord: [49.9225, 1.0771],
        photos: []
    },
    "Amiens": {
        icons: "/images/icon/town-svgrepo-com.png",
        coord: [49.8950, 2.3025],
        photos: []
    },
    "Troyes": {
        icons: "/images/icon/town-svgrepo-com.png",
        coord: [48.2967, 4.0784],
        photos: []
    },
    "Toulouse": {
        icons: "/images/icon/town-svgrepo-com.png",
        coord: [43.6111, 1.4546],
        photos: []
    },
    "Bayonne": {
        icons: "/images/icon/town-svgrepo-com.png",
        coord: [43.4933, -1.4747],
        photos: []
    },
    "Hendaye": {
        icons: "/images/icon/town-svgrepo-com.png",
        coord: [43.3589, -1.7746],
        photos: []
    },
    "Montauban": {
        icons: "/images/icon/town-svgrepo-com.png",
        coord: [44.0172, 1.3558],
        photos: []
    },
    "Agen": {
        icons: "/images/icon/town-svgrepo-com.png",
        coord: [44.2000, 0.6200],
        photos: []
    },
    "Carcassonne": {
        icons: "/images/icon/town-svgrepo-com.png",
        coord: [43.2130, 2.3530],
        photos: []
    },
    "Narbonne": {
        icons: "/images/icon/town-svgrepo-com.png",
        coord: [43.1843, 3.0034],
        photos: []
    },
    "Bordeaux": {
        icons: "/images/icon/town-svgrepo-com.png",
        coord: [44.8253, -0.5560],
        photos: []
    },
    "Montpellier": {
        icons: "/images/icon/town-svgrepo-com.png",
        coord: [43.6045, 3.8795],
        photos: []
    },
    "Nantes": {
        icons: "/images/icon/town-svgrepo-com.png",
        coord: [47.2173, -1.5534],
        photos: []
    },
    "Lyon": {
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
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
        icons: "/images/icon/town-svgrepo-com.png",
        coord: [49.037957, 3.409492],
        photos: []
    },
    "Vernon": {
        icons: "/images/icon/town-svgrepo-com.png",
        coord: [49.091193, 1.478397],
        photos: []
    },
    "Creil": {
        icons: "/images/icon/town-svgrepo-com.png",
        coord: [49.264104, 2.469087],
        photos: []
    },
    "Villers-Cotterêts": {
        icons: "/images/icon/town-svgrepo-com.png",
        coord: [49.250107, 3.093957],
        photos: []
    },
    "Chantilly": {
        icons: "/images/icon/town-svgrepo-com.png",
        coord: [49.1942, 2.4707],
        photos: []
    },
    "Compiegne": {
        icons: "/images/icon/town-svgrepo-com.png",
        coord: [49.4179, 2.8261],
        photos: []
    },
    "Pierrefonds": {
        icons: "/images/icon/town-svgrepo-com.png",
        coord: [49.3486, 2.9874],
        photos: []
    },
    "Reims": {
        icons: "/images/icon/town-svgrepo-com.png",
        coord: [49.2583, 4.0317],
        photos: []
    },
    "Pau": {
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
        coord: [43.294806736, -0.370777029],
        photos: [
            "/images/city/pau/pau1.jpg",
            "/images/city/pau/pau2.jpg",
            "/images/city/pau/pau3.jpg",
            "/images/city/pau/pau4.jpg",
            "/images/city/pau/pau5.jpg",
            "/images/city/pau/pau6.jpg",
            "/images/city/pau/pau7.jpg",
            "/images/city/pau/pau8.jpg",
            "/images/city/pau/pau9.jpg",
        ]
    },
    "Beauvais": {
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
        coord: [49.429587238, 2.081991375],
        photos: [
            "/images/city/beauvais/beauvais1.jpg",
            "/images/city/beauvais/beauvais2.jpg",
            "/images/city/beauvais/beauvais3.jpg",
            "/images/city/beauvais/beauvais4.jpg",
            "/images/city/beauvais/beauvais5.jpg",
            "/images/city/beauvais/beauvais6.jpg",
        ]
    },
    "Le Tréport - Mers-les-Bains": {
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
        coord: [50.06270236721895, 1.3762779231910827],
        photos: [
            "/images/city/treport/treport1.jpg",
            "/images/city/treport/treport2.jpg",
            "/images/city/treport/treport3.jpg",
            "/images/city/treport/treport4.jpg",
            "/images/city/treport/treport5.jpg",
            "/images/city/treport/treport6.jpg",
            "/images/city/treport/treport7.jpg",
            "/images/city/treport/treport8.jpg",
            "/images/city/treport/treport9.jpg",
            "/images/city/treport/treport10.jpg",
            "/images/city/treport/treport11.jpg",
            "/images/city/treport/treport12.jpg",

        ]
    },
    "Lourdes": {
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
        coord: [43.091679787, -0.045900392],
        photos: [
            "/images/city/lourdes/lourdes1.jpg",
            "/images/city/lourdes/lourdes2.jpg",
            "/images/city/lourdes/lourdes3.jpg",
            "/images/city/lourdes/lourdes4.jpg",
        ]
    },
    "Bruxelles": {
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
        coord: [50.84666522439074, 4.352560043334962],
        photos: []
    },
    "Angers": {
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
        coord: [47.4784, -0.5632],
        photos: [
            "/images/city/angers/angers1.jpg",
            "/images/city/angers/angers2.jpg",
            "/images/city/angers/angers3.jpg",
            "/images/city/angers/angers4.jpg",
            "/images/city/angers/angers5.jpg",
            "/images/city/angers/angers6.jpg",
            "/images/city/angers/angers7.jpg",
            "/images/city/angers/angers8.jpg",
            "/images/city/angers/angers9.jpg",
            "/images/city/angers/angers10.jpg",
            "/images/city/angers/angers11.jpg",
            "/images/city/angers/angers12.jpg",
            "/images/city/angers/angers13.jpg",
            "/images/city/angers/angers14.jpg",
            "/images/city/angers/angers15.jpg",
            "/images/city/angers/angers16.jpg",
            "/images/city/angers/angers17.jpg",
            "/images/city/angers/angers18.jpg",
        ]
    },
    "Arras": {
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
        coord: [50.2910, 2.7775],
        photos: [
            "/images/city/arras/arras1.jpg",
            "/images/city/arras/arras2.jpg",
            "/images/city/arras/arras3.jpg",
            "/images/city/arras/arras4.jpg",
            "/images/city/arras/arras5.jpg",
            "/images/city/arras/arras6.jpg",
            "/images/city/arras/arras7.jpg",
        ]
    },
    "Cable 1": {
        icons: "/images/icon/cable-car-cabin-cable-car-svgrepo-com.png",
        coord: [48.7687, 2.4649],
        photos: [
            "/images/city/cable1/cable11.jpg",
            "/images/city/cable1/cable12.jpg",
            "/images/city/cable1/cable13.jpg",
            "/images/city/cable1/cable14.jpg",
            "/images/city/cable1/cable15.jpg",
            "/images/city/cable1/cable16.jpg",
            "/images/city/cable1/cable17.jpg",
            "/images/city/cable1/cable18.jpg",
            "/images/city/cable1/cable19.jpg",
            "/images/city/cable1/cable110.jpg",
            "/images/city/cable1/cable111.jpg",
            "/images/city/cable1/cable112.jpg",
        ]
    },
}

export { center, locations }
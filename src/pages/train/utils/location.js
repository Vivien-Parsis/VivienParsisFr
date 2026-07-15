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
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
        coord: [50.6364, 3.0708],
        photos: [
            "/images/city/lille/lille_1.jpg",
            "/images/city/lille/lille_2.jpg",
            "/images/city/lille/lille_3.jpg",
            "/images/city/lille/lille_4.jpg",
            "/images/city/lille/lille_5.jpg",
            "/images/city/lille/lille_6.jpg",
            "/images/city/lille/lille_7.jpg",
            "/images/city/lille/lille_8.jpg",
            "/images/city/lille/lille_9.jpg",
            "/images/city/lille/lille_10.jpg",
            "/images/city/lille/lille_11.jpg",
            "/images/city/lille/lille_12.jpg",
            "/images/city/lille/lille_13.jpg",
            "/images/city/lille/lille_14.jpg",
            "/images/city/lille/lille_15.jpg",
            "/images/city/lille/lille_16.jpg",
            "/images/city/lille/lille_17.jpg",
            "/images/city/lille/lille_18.jpg",
            "/images/city/lille/lille_19.jpg",
        ]
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
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
        coord: [48.4560, 1.4840],
        photos: [
            "/images/city/chartres/chartres1.jpg",
            "/images/city/chartres/chartres2.jpg",
            "/images/city/chartres/chartres3.jpg",
            "/images/city/chartres/chartres4.jpg",
            "/images/city/chartres/chartres5.jpg",
            "/images/city/chartres/chartres6.jpg"
        ]
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
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
        coord: [49.9225, 1.0771],
        photos: [
            "/images/city/dieppe/dieppe_1.jpg",
            "/images/city/dieppe/dieppe_2.jpg",
            "/images/city/dieppe/dieppe_3.jpg",
            "/images/city/dieppe/dieppe_4.jpg",
        ]
    },
    "Amiens": {
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
        coord: [49.8950, 2.3025],
        photos: [
            "/images/city/amiens/amiens_1.jpg",
            "/images/city/amiens/amiens_2.jpg",
            "/images/city/amiens/amiens_3.jpg",
            "/images/city/amiens/amiens_4.jpg",
            "/images/city/amiens/amiens_5.jpg",
            "/images/city/amiens/amiens_6.jpg",
            "/images/city/amiens/amiens_7.jpg",
            "/images/city/amiens/amiens_8.jpg",
            "/images/city/amiens/amiens_9.jpg",
        ]
    },
    "Troyes": {
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
        coord: [48.2967, 4.0784],
        photos: [
            "/images/city/troyes/troyes_1.jpg",
            "/images/city/troyes/troyes_2.jpg",
            "/images/city/troyes/troyes_3.jpg",
            "/images/city/troyes/troyes_4.jpg",
            "/images/city/troyes/troyes_5.jpg",
            "/images/city/troyes/troyes_6.jpg",
            "/images/city/troyes/troyes_7.jpg"
        ]
    },
    "Toulouse": {
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
        coord: [43.6111, 1.4546],
        photos: [
            "/images/city/toulouse/toulouse_1.jpg",
            "/images/city/toulouse/toulouse_2.jpg",
            "/images/city/toulouse/toulouse_3.jpg",
            "/images/city/toulouse/toulouse_4.jpg",
            "/images/city/toulouse/toulouse_5.jpg",
            "/images/city/toulouse/toulouse_6.jpg",
            "/images/city/toulouse/toulouse_7.jpg",
            "/images/city/toulouse/toulouse_8.jpg",
            "/images/city/toulouse/toulouse_9.jpg",
            "/images/city/toulouse/toulouse_10.jpg",
            "/images/city/toulouse/toulouse_11.jpg",
            "/images/city/toulouse/toulouse_12.jpg",
            "/images/city/toulouse/toulouse_13.jpg",
            "/images/city/toulouse/toulouse_14.jpg",
            "/images/city/toulouse/toulouse_15.jpg",
            "/images/city/toulouse/toulouse_16.jpg",
            "/images/city/toulouse/toulouse_17.jpg",
            "/images/city/toulouse/toulouse_18.jpg",
            "/images/city/toulouse/toulouse_19.jpg",
            "/images/city/toulouse/toulouse_20.jpg",
            "/images/city/toulouse/toulouse_21.jpg",
            "/images/city/toulouse/toulouse_22.jpg",
            "/images/city/toulouse/toulouse_23.jpg",
            "/images/city/toulouse/toulouse_24.jpg",
            "/images/city/toulouse/toulouse_25.jpg",
            "/images/city/toulouse/toulouse_26.jpg",
        ]
    },
    "Bayonne": {
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
        coord: [43.4933, -1.4747],
        photos: [
            "/images/city/bayonne/bayonne_1.jpg",
            "/images/city/bayonne/bayonne_2.jpg",
        ]
    },
    "Hendaye": {
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
        coord: [43.3589, -1.7746],
        photos: [
            "/images/city/hendaye/hendaye_1.jpg",
            "/images/city/hendaye/hendaye_2.jpg",
            "/images/city/hendaye/hendaye_3.jpg",
            "/images/city/hendaye/hendaye_4.jpg",
            "/images/city/hendaye/hendaye_5.jpg",
            "/images/city/hendaye/hendaye_6.jpg",
            "/images/city/hendaye/hendaye_7.jpg",
            "/images/city/hendaye/hendaye_8.jpg",
            "/images/city/hendaye/hendaye_9.jpg",
            "/images/city/hendaye/hendaye_10.jpg",
        ]
    },
    "Montauban": {
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
        coord: [44.0172, 1.3558],
        photos: [
            "/images/city/montauban/montauban_1.jpg",
            "/images/city/montauban/montauban_2.jpg",
            "/images/city/montauban/montauban_3.jpg",
            "/images/city/montauban/montauban_4.jpg",
            "/images/city/montauban/montauban_5.jpg",
            "/images/city/montauban/montauban_6.jpg"
        ]
    },
    "Agen": {
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
        coord: [44.2000, 0.6200],
        photos: [
            "/images/city/agen/agen_1.jpg",
            "/images/city/agen/agen_2.jpg",
            "/images/city/agen/agen_3.jpg",
            "/images/city/agen/agen_4.jpg",
            "/images/city/agen/agen_5.jpg",
            "/images/city/agen/agen_6.jpg",
            "/images/city/agen/agen_7.jpg",
            "/images/city/agen/agen_8.jpg",
            "/images/city/agen/agen_9.jpg"
        ]
    },
    "Carcassonne": {
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
        coord: [43.2130, 2.3530],
        photos: [
            "/images/city/carcassonne/carcassonne_1.jpg",
            "/images/city/carcassonne/carcassonne_2.jpg",
            "/images/city/carcassonne/carcassonne_3.jpg",
            "/images/city/carcassonne/carcassonne_4.jpg",
            "/images/city/carcassonne/carcassonne_5.jpg",
            "/images/city/carcassonne/carcassonne_6.jpg",
            "/images/city/carcassonne/carcassonne_7.jpg",
            "/images/city/carcassonne/carcassonne_8.jpg"
        ]
    },
    "Narbonne": {
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
        coord: [43.1843, 3.0034],
        photos: [
            "/images/city/narbonne/narbonne_1.jpg",
            "/images/city/narbonne/narbonne_2.jpg",
            "/images/city/narbonne/narbonne_3.jpg",
            "/images/city/narbonne/narbonne_4.jpg",
        ]
    },
    "Bordeaux": {
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
        coord: [44.8253, -0.5560],
        photos: [
            "/images/city/bordeaux/bordeaux_1.jpg",
            "/images/city/bordeaux/bordeaux_2.jpg",
            "/images/city/bordeaux/bordeaux_3.jpg",
            "/images/city/bordeaux/bordeaux_4.jpg",
            "/images/city/bordeaux/bordeaux_5.jpg",
            "/images/city/bordeaux/bordeaux_6.jpg",
            "/images/city/bordeaux/bordeaux_7.jpg",
            "/images/city/bordeaux/bordeaux_8.jpg",
            "/images/city/bordeaux/bordeaux_9.jpg",
            "/images/city/bordeaux/bordeaux_10.jpg",
            "/images/city/bordeaux/bordeaux_11.jpg",
            "/images/city/bordeaux/bordeaux_12.jpg",
            "/images/city/bordeaux/bordeaux_13.jpg",
        ]
    },
    "Montpellier": {
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
        coord: [43.6045, 3.8795],
        photos: [
            "/images/city/montpelier/montpelier_1.jpg",
            "/images/city/montpelier/montpelier_2.jpg",
            "/images/city/montpelier/montpelier_3.jpg",
            "/images/city/montpelier/montpelier_4.jpg",
            "/images/city/montpelier/montpelier_5.jpg",
            "/images/city/montpelier/montpelier_6.jpg",
            "/images/city/montpelier/montpelier_7.jpg",
        ]
    },
    "Nantes": {
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
        coord: [47.2173, -1.5534],
        photos: [
            "/images/city/nantes/nantes_1.jpg",
            "/images/city/nantes/nantes_2.jpg",
            "/images/city/nantes/nantes_3.jpg",
            "/images/city/nantes/nantes_4.jpg",
            "/images/city/nantes/nantes_5.jpg",
            "/images/city/nantes/nantes_6.jpg",
            "/images/city/nantes/nantes_7.jpg",
            "/images/city/nantes/nantes_8.jpg",
            "/images/city/nantes/nantes_9.jpg",
            "/images/city/nantes/nantes_10.jpg",
            "/images/city/nantes/nantes_11.jpg",
            "/images/city/nantes/nantes_12.jpg",
            "/images/city/nantes/nantes_13.jpg",
            "/images/city/nantes/nantes_14.jpg",
            "/images/city/nantes/nantes_15.jpg",
            "/images/city/nantes/nantes_16.jpg",
            "/images/city/nantes/nantes_17.jpg",
            "/images/city/nantes/nantes_18.jpg",
            "/images/city/nantes/nantes_19.jpg",
            "/images/city/nantes/nantes_20.jpg",
        ]
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
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
        coord: [49.037957, 3.409492],
        photos: [
            "/images/city/thierry/thierry_1.jpg",
            "/images/city/thierry/thierry_2.jpg",
            "/images/city/thierry/thierry_3.jpg",
            "/images/city/thierry/thierry_4.jpg",
            "/images/city/thierry/thierry_5.jpg",
            "/images/city/thierry/thierry_6.jpg"
        ]
    },
    "Vernon": {
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
        coord: [49.091193, 1.478397],
        photos: [
            "/images/city/vernon/vernon_1.jpg",
            "/images/city/vernon/vernon_2.jpg",
            "/images/city/vernon/vernon_3.jpg",
            "/images/city/vernon/vernon_4.jpg",
            "/images/city/vernon/vernon_5.jpg",
            "/images/city/vernon/vernon_6.jpg",
            "/images/city/vernon/vernon_7.jpg"
        ]
    },
    "Creil": {
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
        coord: [49.264104, 2.469087],
        photos: [
            "/images/city/creil/creil_1.jpg",
            "/images/city/creil/creil_2.jpg",
            "/images/city/creil/creil_3.jpg",
            "/images/city/creil/creil_4.jpg",
            "/images/city/creil/creil_5.jpg",
            "/images/city/creil/creil_6.jpg",
            "/images/city/creil/creil_7.jpg",
            "/images/city/creil/creil_8.jpg",
        ]
    },
    "Villers-Cotterêts": {
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
        coord: [49.250107, 3.093957],
        photos: [
            "/images/city/villiers/villiers_1.jpg",
            "/images/city/villiers/villiers_2.jpg",
            "/images/city/villiers/villiers_3.jpg",
            "/images/city/villiers/villiers_4.jpg",
            "/images/city/villiers/villiers_5.jpg",
        ]
    },
    "Chantilly": {
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
        coord: [49.1942, 2.4707],
        photos: [
            "/images/city/chantilly/chantilly_1.jpg",
            "/images/city/chantilly/chantilly_2.jpg",
            "/images/city/chantilly/chantilly_3.jpg",
            "/images/city/chantilly/chantilly_4.jpg",
            "/images/city/chantilly/chantilly_5.jpg",
            "/images/city/chantilly/chantilly_6.jpg",
            "/images/city/chantilly/chantilly_7.jpg",
            "/images/city/chantilly/chantilly_8.jpg",
            "/images/city/chantilly/chantilly_9.jpg",
            "/images/city/chantilly/chantilly_10.jpg",
            "/images/city/chantilly/chantilly_11.jpg",
            "/images/city/chantilly/chantilly_12.jpg",
            "/images/city/chantilly/chantilly_13.jpg",
            "/images/city/chantilly/chantilly_14.jpg",
            "/images/city/chantilly/chantilly_15.jpg",
        ]
    },
    "Compiegne": {
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
        coord: [49.4179, 2.8261],
        photos: [
            "/images/city/compiegne/compiegne_1.jpg",
            "/images/city/compiegne/compiegne_2.jpg",
            "/images/city/compiegne/compiegne_3.jpg",
            "/images/city/compiegne/compiegne_4.jpg",
            "/images/city/compiegne/compiegne_5.jpg",
            "/images/city/compiegne/compiegne_6.jpg",
        ]
    },
    "Pierrefonds": {
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
        coord: [49.3486, 2.9874],
        photos: [
            "/images/city/pierrefond/pierrefond_1.jpg",
            "/images/city/pierrefond/pierrefond_2.jpg",
            "/images/city/pierrefond/pierrefond_3.jpg",
            "/images/city/pierrefond/pierrefond_4.jpg",
            "/images/city/pierrefond/pierrefond_5.jpg",
            "/images/city/pierrefond/pierrefond_6.jpg",
            "/images/city/pierrefond/pierrefond_7.jpg",
        ]
    },
    "Reims": {
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
        coord: [49.2583, 4.0317],
        photos: [
            "/images/city/reims/reims_1.jpg",
            "/images/city/reims/reims_2.jpg",
            "/images/city/reims/reims_3.jpg",
            "/images/city/reims/reims_4.jpg",
            "/images/city/reims/reims_5.jpg",
            "/images/city/reims/reims_6.jpg",
            "/images/city/reims/reims_7.jpg",
            "/images/city/reims/reims_8.jpg",
        ]
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
        photos: [
            "/images/city/bruxelles/bruxelles_1.JPG",
            "/images/city/bruxelles/bruxelles_2.JPG",
            "/images/city/bruxelles/bruxelles_3.JPG",
            "/images/city/bruxelles/bruxelles_4.JPG",
            "/images/city/bruxelles/bruxelles_5.JPG",
            "/images/city/bruxelles/bruxelles_6.JPG",
            "/images/city/bruxelles/bruxelles_7.jpg",
            "/images/city/bruxelles/bruxelles_8.jpg",
            "/images/city/bruxelles/bruxelles_9.jpg",
            "/images/city/bruxelles/bruxelles_10.jpg",
            "/images/city/bruxelles/bruxelles_11.jpg",
            "/images/city/bruxelles/bruxelles_12.jpg",
            "/images/city/bruxelles/bruxelles_13.jpg",
            "/images/city/bruxelles/bruxelles_14.jpg",
            "/images/city/bruxelles/bruxelles_15.jpg",
            "/images/city/bruxelles/bruxelles_16.jpg",
            "/images/city/bruxelles/bruxelles_17.jpg",
            "/images/city/bruxelles/bruxelles_18.jpg",
            "/images/city/bruxelles/bruxelles_19.jpg",
            "/images/city/bruxelles/bruxelles_20.jpg",
            "/images/city/bruxelles/bruxelles_21.jpg",
            "/images/city/bruxelles/bruxelles_22.jpg",
            "/images/city/bruxelles/bruxelles_23.jpg",
            "/images/city/bruxelles/bruxelles_24.jpg",
            "/images/city/bruxelles/bruxelles_25.jpg",
            "/images/city/bruxelles/bruxelles_26.jpg",
            "/images/city/bruxelles/bruxelles_27.jpg",
            "/images/city/bruxelles/bruxelles_28.jpg",
            "/images/city/bruxelles/bruxelles_29.jpg",
            "/images/city/bruxelles/bruxelles_30.jpg",
            "/images/city/bruxelles/bruxelles_31.jpg",
            "/images/city/bruxelles/bruxelles_32.jpg",
            "/images/city/bruxelles/bruxelles_33.jpg",
            "/images/city/bruxelles/bruxelles_34.jpg",
            "/images/city/bruxelles/bruxelles_35.jpg",
            "/images/city/bruxelles/bruxelles_36.jpg",
            "/images/city/bruxelles/bruxelles_37.jpg",
            "/images/city/bruxelles/bruxelles_38.jpg",
            "/images/city/bruxelles/bruxelles_39.jpg",
        ]
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
    "Poitiers": {
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
        coord: [46.5802, 0.3404],
        photos: [
            "/images/city/poitier/poitier_1.jpg",
            "/images/city/poitier/poitier_2.jpg",
            "/images/city/poitier/poitier_3.jpg",
            "/images/city/poitier/poitier_4.jpg",
            "/images/city/poitier/poitier_5.jpg",
            "/images/city/poitier/poitier_6.jpg",
            "/images/city/poitier/poitier_7.jpg",
            "/images/city/poitier/poitier_8.jpg",
            "/images/city/poitier/poitier_9.jpg",
            "/images/city/poitier/poitier_10.jpg",
            "/images/city/poitier/poitier_11.jpg",
            "/images/city/poitier/poitier_12.jpg",
            "/images/city/poitier/poitier_13.jpg",
        ]
    },
    "Cable 1": {
        icons: "/images/icon/cable-car-cabin-cable-car-svgrepo-com.png",
        coord: [48.7687, 2.4649],
        photos: [
            "/images/city/cable/cable_1.jpg",
            "/images/city/cable/cable_2.jpg",
            "/images/city/cable/cable_3.jpg",
            "/images/city/cable/cable_4.jpg",
            "/images/city/cable/cable_5.jpg",
            "/images/city/cable/cable_6.jpg",
            "/images/city/cable/cable_7.jpg",
            "/images/city/cable/cable_8.jpg",
            "/images/city/cable/cable_9.jpg",
            "/images/city/cable/cable_10.jpg",
            "/images/city/cable/cable_11.jpg",
            "/images/city/cable/cable_12.jpg",
        ]
    },
    "Nevers": {
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
        coord: [46.9922, 3.1566],
        photos: [
            "/images/city/nevers/nevers_1.jpg",
            "/images/city/nevers/nevers_2.jpg",
            "/images/city/nevers/nevers_3.jpg",
            "/images/city/nevers/nevers_4.jpg",
            "/images/city/nevers/nevers_5.jpg",
            "/images/city/nevers/nevers_6.jpg",
            "/images/city/nevers/nevers_7.jpg",
            "/images/city/nevers/nevers_8.jpg",
            "/images/city/nevers/nevers_9.jpg",
            "/images/city/nevers/nevers_10.jpg",
            "/images/city/nevers/nevers_11.jpg",
            "/images/city/nevers/nevers_12.jpg",
            "/images/city/nevers/nevers_13.jpg",
            "/images/city/nevers/nevers_14.jpg",
        ]
    },
    "Bourges": {
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
        coord: [47.0810, 2.3988],
        photos: [
            "/images/city/bourges/bourges_1.jpg",
            "/images/city/bourges/bourges_2.jpg",
            "/images/city/bourges/bourges_3.jpg",
            "/images/city/bourges/bourges_4.jpg",
            "/images/city/bourges/bourges_5.jpg",
            "/images/city/bourges/bourges_6.jpg",
            "/images/city/bourges/bourges_7.jpg",
            "/images/city/bourges/bourges_8.jpg",
            "/images/city/bourges/bourges_9.jpg",
        ]
    },
    "Le Mans": {
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
        coord: [48.0061, 0.1996],
        photos: [
            "/images/city/lemans/lemans_1.jpg",
            "/images/city/lemans/lemans_2.jpg",
            "/images/city/lemans/lemans_3.jpg",
            "/images/city/lemans/lemans_4.jpg",
            "/images/city/lemans/lemans_5.jpg",
            "/images/city/lemans/lemans_6.jpg",
            "/images/city/lemans/lemans_7.jpg",
            "/images/city/lemans/lemans_8.jpg",
            "/images/city/lemans/lemans_9.jpg",
            "/images/city/lemans/lemans_10.jpg",
            "/images/city/lemans/lemans_11.jpg",
            "/images/city/lemans/lemans_12.jpg",
            "/images/city/lemans/lemans_13.jpg",
            "/images/city/lemans/lemans_14.jpg",
            "/images/city/lemans/lemans_15.jpg",
            "/images/city/lemans/lemans_16.jpg",
            "/images/city/lemans/lemans_17.jpg",
        ]
    },
    "Clermont-Ferrand": {
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
        coord: [45.7772, 3.0870],
        photos: [
            "/images/city/clermont/clermont_1.jpg",
            "/images/city/clermont/clermont_2.jpg",
            "/images/city/clermont/clermont_3.jpg",
            "/images/city/clermont/clermont_4.jpg",
            "/images/city/clermont/clermont_5.jpg",
            "/images/city/clermont/clermont_6.jpg",
            "/images/city/clermont/clermont_7.jpg",
            "/images/city/clermont/clermont_8.jpg",
            "/images/city/clermont/clermont_9.jpg",
            "/images/city/clermont/clermont_10.jpg",
            "/images/city/clermont/clermont_11.jpg",
            "/images/city/clermont/clermont_12.jpg",
            "/images/city/clermont/clermont_13.jpg",
            "/images/city/clermont/clermont_14.jpg",
            "/images/city/clermont/clermont_15.jpg",
            "/images/city/clermont/clermont_16.jpg",
            "/images/city/clermont/clermont_17.jpg",
            "/images/city/clermont/clermont_18.jpg",
            "/images/city/clermont/clermont_19.jpg",
        ]
    },
    "Vichy": {
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
        coord: [46.1267, 3.4267],
        photos: [
            "/images/city/vichy/vichy_1.jpg",
            "/images/city/vichy/vichy_2.jpg",
            "/images/city/vichy/vichy_3.jpg",
            "/images/city/vichy/vichy_4.jpg",
            "/images/city/vichy/vichy_5.jpg",
            "/images/city/vichy/vichy_6.jpg",
            "/images/city/vichy/vichy_7.jpg",
            "/images/city/vichy/vichy_8.jpg",
            "/images/city/vichy/vichy_9.jpg",
            "/images/city/vichy/vichy_10.jpg",
            "/images/city/vichy/vichy_11.jpg",
        ]
    },
    "Aix-les-Bains": {
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
        coord: [45.6886, 5.9155],
        photos: [
            "/images/city/aix-les-bain/aix-les-bains_1.jpg",
            "/images/city/aix-les-bain/aix-les-bains_2.jpg",
            "/images/city/aix-les-bain/aix-les-bains_3.jpg",
            "/images/city/aix-les-bain/aix-les-bains_4.jpg",
            "/images/city/aix-les-bain/aix-les-bains_5.jpg",
            "/images/city/aix-les-bain/aix-les-bains_6.jpg",
            "/images/city/aix-les-bain/aix-les-bains_7.jpg",
            "/images/city/aix-les-bain/aix-les-bains_8.jpg",
            "/images/city/aix-les-bain/aix-les-bains_9.jpg",
            "/images/city/aix-les-bain/aix-les-bains_10.jpg",
            "/images/city/aix-les-bain/aix-les-bains_11.jpg",
            "/images/city/aix-les-bain/aix-les-bains_12.jpg",
            "/images/city/aix-les-bain/aix-les-bains_13.jpg"
        ]
    },
    "Chambéry": {
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
        coord: [45.5646, 5.9178],
        photos: [
            "/images/city/chambery/chambery_1.jpg",
            "/images/city/chambery/chambery_2.jpg",
            "/images/city/chambery/chambery_3.jpg",
            "/images/city/chambery/chambery_4.jpg",
            "/images/city/chambery/chambery_5.jpg",
            "/images/city/chambery/chambery_6.jpg",
            "/images/city/chambery/chambery_7.jpg",
            "/images/city/chambery/chambery_8.jpg",
            "/images/city/chambery/chambery_9.jpg",
            "/images/city/chambery/chambery_10.jpg"
        ]
    },
    "Annecy": {
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
        coord: [45.8992, 6.1294],
        photos: [
            "/images/city/annecy/annecy_1.jpg",
            "/images/city/annecy/annecy_2.jpg",
            "/images/city/annecy/annecy_3.jpg",
            "/images/city/annecy/annecy_4.jpg",
            "/images/city/annecy/annecy_5.jpg",
            "/images/city/annecy/annecy_6.jpg",
            "/images/city/annecy/annecy_7.jpg",
            "/images/city/annecy/annecy_8.jpg",
            "/images/city/annecy/annecy_9.jpg",
            "/images/city/annecy/annecy_10.jpg",
            "/images/city/annecy/annecy_11.jpg",
            "/images/city/annecy/annecy_12.jpg",
            "/images/city/annecy/annecy_13.jpg",
            "/images/city/annecy/annecy_14.jpg",
            "/images/city/annecy/annecy_15.jpg",
        ]
    },
    "Saint-Sébastien": {
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
        coord: [43.3183, -1.9812],
        photos: [
            "/images/city/donastia/donastia_1.JPG",
            "/images/city/donastia/donastia_2.jpg",
            "/images/city/donastia/donastia_3.jpg",
            "/images/city/donastia/donastia_4.jpg",
            "/images/city/donastia/donastia_5.jpg",
            "/images/city/donastia/donastia_6.jpg",
            "/images/city/donastia/donastia_7.jpg",
            "/images/city/donastia/donastia_8.jpg",
            "/images/city/donastia/donastia_9.jpg",
        ]
    },
    "Bilbao": {
        icons: "/images/icon/town-svgrepo-com-with-photo.png",
        coord: [43.2630, -2.9350],
        photos: [
            "/images/city/bilbao/bilbao_1.jpg",
            "/images/city/bilbao/bilbao_2.jpg",
            "/images/city/bilbao/bilbao_3.jpg",
            "/images/city/bilbao/bilbao_4.jpg",
            "/images/city/bilbao/bilbao_5.jpg",
            "/images/city/bilbao/bilbao_6.jpg",
            "/images/city/bilbao/bilbao_7.jpg",
            "/images/city/bilbao/bilbao_8.jpg",
            "/images/city/bilbao/bilbao_9.jpg",
            "/images/city/bilbao/bilbao_10.jpg",
            "/images/city/bilbao/bilbao_11.jpg",
            "/images/city/bilbao/bilbao_12.jpg",
            "/images/city/bilbao/bilbao_13.jpg",
            "/images/city/bilbao/bilbao_14.jpg",
            "/images/city/bilbao/bilbao_15.jpg",
            "/images/city/bilbao/bilbao_16.jpg",
            "/images/city/bilbao/bilbao_17.jpg",
            "/images/city/bilbao/bilbao_18.jpg",
        ]
    },
    "Châlons-en-Champagne": {
            icons: "/images/icon/town-svgrepo-com.png",
            coord: [48.9573, 4.3649],
            photos: []
    },
    "Dormans": {
        icons: "/images/icon/town-svgrepo-com.png",
        coord: [49.0717, 3.6397],
        photos: []
    },
    "Metz": {
        icons: "/images/icon/town-svgrepo-com.png",
        coord: [49.1193, 6.1757],
        photos: []
    },
    "Nancy": {
        icons: "/images/icon/town-svgrepo-com.png",
        coord: [48.6921, 6.1844],
        photos: []
    },
    "Frankfurt": {
        icons: "/images/icon/town-svgrepo-com.png",
        coord: [50.1109, 8.6821],
        photos: []
    },
}

export { center, locations }
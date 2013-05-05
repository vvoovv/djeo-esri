/*
 COPYRIGHT 2009 ESRI

 TRADE SECRETS: ESRI PROPRIETARY AND CONFIDENTIAL
 Unpublished material - all rights reserved under the
 Copyright Laws of the United States and applicable international
 laws, treaties, and conventions.

 For additional information, contact:
 Environmental Systems Research Institute, Inc.
 Attn: Contracts and Legal Services Department
 380 New York Street
 Redlands, California, 92373
 USA

 email: contracts@esri.com
 */
//>>built
define("esri/nls/fr/jsapi",({io:{proxyNotSet:"esri.config.defaults.io.proxyUrl n'est pas défini."},map:{deprecateReorderLayerString:"Map.reorderLayer(/*String*/ id, /*Number*/ index) obsolète. Utiliser Map.reorderLayer(/*Layer*/ layer, /*Number*/ index).",deprecateShiftDblClickZoom:"Map.(enable/disable)ShiftDoubleClickZoom obsolète. Le comportement de Shift-Double-Clic ne sera pas pris en compte."},geometry:{deprecateToScreenPoint:"esri.geometry.toScreenPoint obsolète. Utiliser esri.geometry.toScreenGeometry.",deprecateToMapPoint:"esri.geometry.toMapPoint obsolète. Utiliser esri.geometry.toMapGeometry."},layers:{tiled:{tileError:"Chargement de la tuile impossible"},dynamic:{imageError:"Chargement de l'image impossible"},graphics:{drawingError:"Affichage du graphique impossible "},agstiled:{deprecateRoundrobin:"Option de constructeur 'roundrobin' déconseillée. Utilisez l'option 'tileServers'."},imageParameters:{deprecateBBox:"Propriété 'bbox' déconseillée. Utilisez la propriété 'extent'."},FeatureLayer:{noOIDField:"objectIdField n'est pas défini [url: ${url}]",fieldNotFound:"le champ '${field}' est introuvable dans les informations 'fields' de la couche [url: ${url}]",noGeometryField:"impossible de trouver un champ de type 'esriFieldTypeGeometry' dans les informations 'fields' de la couche. Si vous utilisez une couche de service de carte, les entités n'auront pas de géométrie [url: ${url}]",invalidParams:"la requête contient un ou plusieurs paramètres non pris en charge",updateError:"une erreur est survenue lors de la mise à jour de la couche",createUserSeconds:"Créé par ${userId} il y a quelques secondes",createUserMinute:"Créé par ${userId} il y a une minute",editUserSeconds:"Modifié par ${userId} il y a quelques secondes",editUserMinute:"Modifié par ${userId} il y a une minute",createSeconds:"Créé il y a quelques secondes",createMinute:"Créé il y a une minute",editSeconds:"Modifié il y a quelques secondes",editMinute:"Modifié il y a une minute",createUserMinutes:"Créé par ${userId} il y a ${minutes} minutes",createUserHour:"Créé par ${userId} il y a une heure",createUserHours:"Créé par ${userId} il y a ${hours} heures",createUserWeekDay:"Créé par ${userId} ${weekDay} à ${formattedTime}",createUserFull:"Créé par ${userId} le ${formattedDate} à ${formattedTime}",editUserMinutes:"Modifié par ${userId} il y a ${minutes} minutes",editUserHour:"Modifié par ${userId} il y a une heure",editUserHours:"Modifié par ${userId} il y a ${hours} heures",editUserWeekDay:"Modifié par ${userId} ${weekDay} à ${formattedTime}",editUserFull:"Modifié par ${userId} le ${formattedDate} à ${formattedTime}",createUser:"Créé par ${userId}",editUser:"Modifié par ${userId}",createMinutes:"Créé il y a ${minutes} minutes",createHour:"Créé il y a une heure",createHours:"Créé il y a ${hours} heures",createWeekDay:"Créé ${weekDay} à ${formattedTime}",createFull:"Créé le ${formattedDate} à ${formattedTime}",editMinutes:"Modifié il y a ${minutes} minutes",editHour:"Modifié il y a une heure",editHours:"Modifié il y a ${hours} heures",editWeekDay:"Modifié ${weekDay} à ${formattedTime}",editFull:"Modifié le ${formattedDate} à ${formattedTime}"}},tasks:{gp:{gpDataTypeNotHandled:"Type de données GP non géré."},na:{route:{routeNameNotSpecified:"RouteName non spécifié pour au moins un arrêt dans FeatureSet."}},query:{invalid:"Impossible d'exécuter la requête. Vérifiez vos paramètres."}},toolbars:{draw:{convertAntiClockwisePolygon:"Les polygones dessinés dans le sens anti-horaire seront inversés pour respecter le sens horaire.",addPoint:"Cliquez pour ajouter un point",addShape:"Cliquez pour ajouter une forme ou appuyez pour démarrer et relâchez pour terminer",addMultipoint:"Cliquez pour commencer à ajouter des points",freehand:"Appuyez pour commencer et relâchez pour terminer",start:"Cliquez pour commencer à dessiner",resume:"Cliquez pour continuer à dessiner",complete:"Double-cliquez pour exécuter",finish:"Double-cliquez pour terminer",invalidType:"Type de géométrie non pris en charge"},edit:{invalidType:"Impossible d'activer l'outil. Vérifiez que l'outil est valide pour le type de géométrie donné.",deleteLabel:"Supprimer"}},virtualearth:{vetiledlayer:{bingMapsKeyNotSpecified:"BingMapsKey doit être indiqué."},vegeocode:{bingMapsKeyNotSpecified:"BingMapsKey doit être indiqué.",requestQueued:"Impossible de récupérer le jeton du serveur. Mise en file d'attente de la requête à exécuter une fois le jeton récupéré du serveur."}},widgets:{attributeInspector:{NLS_first:"Premier",NLS_previous:"Précédente",NLS_next:"Suivante",NLS_last:"Dernier",NLS_deleteFeature:"Supprimer",NLS_title:"Modifier des attributs",NLS_errorInvalid:"Non valide",NLS_validationInt:"La valeur doit être un nombre entier.",NLS_validationFlt:"La valeur doit être un nombre réel.",NLS_of:"de",NLS_noFeaturesSelected:"Aucune entité sélectionnée"},overviewMap:{NLS_drag:"Faites glisser le curseur pour modifier l'étendue de la carte",NLS_show:"Afficher la vue d'ensemble de la carte",NLS_hide:"Masquer la vue d'ensemble de la carte",NLS_maximize:"Agrandir",NLS_restore:"Restaurer",NLS_noMap:"'map' introuvable dans les paramètres en entrée",NLS_noLayer:"carte principale sans couche de base",NLS_invalidSR:"la référence spatiale de la couche donnée n'est pas compatible avec la carte principale",NLS_invalidType:"type de couche non pris en charge. Les types valides sont 'TiledMapServiceLayer' et 'DynamicMapServiceLayer'"},timeSlider:{NLS_first:"Premier",NLS_previous:"Précédente",NLS_next:"Suivante",NLS_play:"Lecture/Pause",NLS_invalidTimeExtent:"TimeExtent non précisé ou le format est incorrect."},attachmentEditor:{NLS_attachments:"Pièces jointes :",NLS_add:"Ajouter",NLS_none:"Aucune",NLS_error:"Une erreur s'est produite.",NLS_fileNotSupported:"Ce type de fichier n'est pas pris en charge."},directions:{error:{notEnoughStops:"Entrez une origine et une destination.",unknownStop:"Emplacement <name> introuvable.",routeTask:"Impossible de créer un itinéraire vers ces adresses.",locator:"Emplacement introuvable.",invalidStopType:"Type d´arrêt non valide",locatorUndefined:"Géocodage inverse impossible. URL non définie.",noAddresses:"Aucune adresse renvoyée.",noStops:"Aucun arrêt donné à ajouter.",maximumStops:"Le nombre maximal d´arrêts est atteint."},time:{minute:"minute",minutes:"minutes",hour:"heure",hours:"heures"},units:{KILOMETERS:{name:"kilomètres",abbr:"km"},METERS:{name:"mètres",abbr:"m"},MILES:{name:"milles",abbr:"mi"},NAUTICAL_MILES:{name:"milles nautiques",abbr:"mn"}},showOptions:"Afficher les options",hideOptions:"Masquer les options",findOptimalOrder:"Chercher l´ordre optimal",returnToStart:"Revenir au départ",addDestination:"Ajouter une destination",viewFullRoute:"Zoom sur l´itinéraire entier",getDirections:"Obtenir la feuille de route",reverseDirections:"Feuille de route inverse",print:"Imprimer",printNotes:"Entrez les notes ici",printDisclaimer:"L´itinéraire est fourni uniquement pour prévoir votre trajet et reste soumis aux <a href='http://www.esri.com/legal/software-license' target='_blank'>conditions d´utilisation d´Esri</a>. Le caractère fluctuant des conditions de circulation doit être pris en compte et peut affecter la précision des informations de l´itinéraire. Tenez-en compte, ainsi que de la signalisation routière et du code de la route. Tous les risques d´utilisation sont sous votre responsabilité."},editor:{tools:{NLS_attributesLbl:"Attributs",NLS_cutLbl:"Couper",NLS_deleteLbl:"Supprimer",NLS_extentLbl:"Etendue",NLS_freehandPolygonLbl:"Polygone à main levée",NLS_freehandPolylineLbl:"Polyligne à main levée",NLS_pointLbl:"Point",NLS_polygonLbl:"Polygone",NLS_polylineLbl:"Polyligne",NLS_reshapeLbl:"Remodeler",NLS_selectionNewLbl:"Nouvelle sélection",NLS_selectionAddLbl:"Ajouter à la sélection",NLS_selectionClearLbl:"Effacer la sélection",NLS_selectionRemoveLbl:"Soustraire de la sélection",NLS_selectionUnionLbl:"Agréger",NLS_autoCompleteLbl:"Automatique",NLS_unionLbl:"Agréger",NLS_rectangleLbl:"Rectangle",NLS_circleLbl:"Cercle",NLS_ellipseLbl:"Ellipse",NLS_triangleLbl:"Triangle",NLS_arrowLbl:"Flèche",NLS_arrowLeftLbl:"Flèche gauche",NLS_arrowUpLbl:"Flèche haut",NLS_arrowDownLbl:"Flèche bas",NLS_arrowRightLbl:"Flèche droite",NLS_undoLbl:"Annuler",NLS_redoLbl:"Répéter"}},Geocoder:{main:{clearButtonTitle:"Effacer la recherche",searchButtonTitle:"Rechercher",geocoderMenuButtonTitle:"Changer de géocodeur",geocoderMenuHeader:"Sélectionner un géocodeur",geocoderMenuCloseTitle:"Fermer le menu",untitledGeocoder:"Géocodeur sans intitulé"},esriGeocoderName:"Esri World Geocoder"},HistogramTimeSlider:{NLS_range:"Plage",NLS_cumulative:"Cumul",NLS_play:"Lecture/Pause",NLS_invalidTimeExtent:"TimeExtent non précisé ou le format est incorrect.",NLS_overview:"APERÇU",NLS_range:"plage entière"},legend:{NLS_points:"Points",NLS_lines:"Lignes",NLS_polygons:"Polygones",NLS_creatingLegend:"Création de la légende",NLS_noLegend:"Pas de légende"},popup:{NLS_moreInfo:"Plus d’infos",NLS_searching:"Recherche",NLS_prevFeature:"Entité précédente",NLS_nextFeature:"Entité suivante",NLS_close:"Fermer",NLS_prevMedia:"Support précédent",NLS_nextMedia:"Support suivant",NLS_noInfo:"Aucune information n'est disponible",NLS_noAttach:"Aucune pièce jointe n'a été trouvée",NLS_maximize:"Agrandir",NLS_restore:"Restaurer",NLS_zoomTo:"Zoom sur",NLS_pagingInfo:"(${index} de ${total})",NLS_attach:"Pièces jointes"},measurement:{NLS_distance:"Distance",NLS_area:"Surface",NLS_location:"Emplacement",NLS_resultLabel:"Résultat de la mesure",NLS_length_miles:"Milles",NLS_length_kilometers:"Kilomètres",NLS_length_feet:"Pieds",NLS_length_meters:"Mètres",NLS_length_yards:"Verges",NLS_area_acres:"Acres",NLS_area_sq_miles:"Milles carrés",NLS_area_sq_kilometers:"Kilomètres carrés",NLS_area_hectares:"Hectares",NLS_area_sq_yards:"Verges carrés",NLS_area_sq_feet:"Pieds carrés",NLS_area_sq_meters:"Mètres carrés",NLS_deg_min_sec:"DMS",NLS_decimal_degrees:"Degrés",NLS_map_coordinate:"Coordonnées de la carte",NLS_longitude:"Longitude",NLS_latitude:"Latitude"},bookmarks:{NLS_add_bookmark:"Ajouter un géosignet",NLS_new_bookmark:"Sans titre",NLS_bookmark_edit:"Modifier",NLS_bookmark_remove:"Supprimer"},print:{NLS_print:"Imprimer",NLS_printing:"Impression en cours",NLS_printout:"Impression"},templatePicker:{creationDisabled:"La création d´entités est désactivée pour toutes les couches.",loading:"Chargement en cours..."}},arcgis:{utils:{baseLayerError:"Chargement de la couche de fond de carte impossible",geometryServiceError:"Fournissez un service de géométrie pour ouvrir une carte Web."}},identity:{lblItem:"élément",title:"Se connecter",info:"Veuillez vous connecter pour accéder à l´élément sur ${server} ${resource}",lblUser:"Nom d´utilisateur :",lblPwd:"Mot de passe :",lblOk:"OK",lblSigning:"Connexion…",lblCancel:"Annuler",errorMsg:"Nom d'utilisateur/mot de passe non valides. Réessayez.",invalidUser:"Le nom d’utilisateur ou le mot de passe que vous avez entré est incorrect.",forbidden:"Le nom d’utilisateur et le mot de passe sont valides, mais vous n’êtes pas autorisé à accéder cette ressource.",noAuthService:"Impossible d’accéder au service d’authentification."},common:{cancel:"Annuler",ok:"OK",create:"Créer",close:"Fermer",done:"Terminé",apply:"Appliquer",remove:"Supprimer",open:"Ouvrir",edit:"Modifier",share:"Partager",save:"Enregistrer",help:"Aide",warning:"Avertissement",deleteLabel:"Supprimer",titleLabel:"Titre :",newLabel:"Nouveau",arcgis:"ArcGIS",previous:"Précédente",submit:"Envoyer",next:"Suivante",yesLabel:"Oui",noLabel:"Non",errorTitle:"Erreur",upload:"Télécharger",sum:"Somme",minimum:"Minimum",maximum:"Maximum",average:"Moyenne",standardDev:"Écart type",statistic:"Statistiques",attribute:"Attribut",selectAttribute:"Sélectionner un attribut",runAnalysis:"Exécuter l’analyse",oneLabel:"1.",twoLabel:"2.",threeLabel:"3.",fourLabel:"4.",outputnameMissingMsg:"Nom de sortie obligatoire",miles:"Mile(s)",kilometers:"Kilomètre(s)",meters:"Mètre(s)",feet:"Pied(s)",degree:"Degré(s)",inches:"Pouce(s)",nautMiles:"Mille(s) nautique(s)",pointsUnit:"Point(s)",yards:"Yard(s)",comingSoonLabel:"Bientôt !"},analysisTools:{performAnalysis:"Réaliser l’analyse",summarizeData:"Synthétiser les données",findLocations:"Rechercher des lieux",aggregateTool:"Agréger les points",bufferTool:"Données de tampon",dataEnrichment:"Data Enrichment",analyzePatterns:"Analyser les similitudes",useProximity:"Utiliser la proximité",manageData:"Gérer les données",aggregateToolName:"Agréger les points",bufferToolName:"Créer des zones tampon",summarizeWithin:"Résumer - Dedans",sumnearby:"Résumer - À proximité",createBuffers:"Créer des zones tampon",driveTimes:"Créer des polygones de durée de parcours",findExistingLocations:"Trouver des lieux existants",findNewLocations:"Dériver de nouveaux lieux",geoenrichLayer:"Enrichir les entités",findRoute:"Trouver un itinéraire",findClosestFacility:"Trouver le plus proche",generateFleetPlan:"Générer un itinéraire de groupe",findHotSpots:"Trouver des points chauds",createDensitySurface:"Créer une surface de densité",correlationReporter:"Étudier les corrélations",createInterpolatedSurface:"Créer une surface",attributeCalculator:"Calculateur d’attributs",overlayLayers:"Superposer les couches",mergeLayers:"Fusionner les couches",dissolveBoundaries:"Dissoudre les limites",extractData:"Extraire les données",orgUsrMsg:"Vous devez faire partie d’une entreprise/organisation pour exécuter ce service.",pubRoleMsg:"Votre compte en ligne n’a pas été attribué au rôle Éditeur.",servNameExists:"Vous disposez déjà d’un résultat portant le même nom. Renommez votre résultat et renvoyez votre analyse.",outputLayerLabel:"Nom de la couche résultat",outputFileName:"Nom du fichier de sortie",emptyResultInfoMsg:"The result of your analysis did not return any features. No layer will be created."},aggregatePointsTool:{aggregateDefine:"Compter <b>${layername}</b> dans",outputLayerName:"Agrégation de ${pointlayername} dans ${polygonlayername}",groupByLabel:"Choisir un attribut selon lequel grouper (en option)",itemDescription:"Service d’entités généré en exécutant la solution Agréger les points. Les points du fichier csv ${pointlayername} ont été agrégés dans ${polygonlayername}",itemTags:"Analyse, Agréger les points, ${pointlayername}, ${polygonlayername}",itemSnippet:"Service d’entités Analyse généré à partir de Agréger les points",removeAttrStats:"Supprimer les statistiques d’attribut",keepPolygonLabel:"Conserver les polygones sans les points",addStatsLabel:"Ajouter des statistiques (facultatif)",chooseAreaLabel:"Choisir une surface"},findHotSpotsTool:{hotspotsPolyDefine:"Analyser <b>${layername}</b> pour rechercher des points chauds et froids statistiquement significatifs de ",hotspotsPointDefine:"Analyser <b>${layername}</b> pour rechercher des points chauds et froids statistiquement significatifs ",fieldLabel:"avec ou sans champ d’analyse",noAnalysisField:"Pas de champ d’analyse",hotspots:"Points chauds",outputLayerName:"Points chauds ${layername}",Options:"Options",defineBoundingLabel:"Définir où des incidents sont possibles",provideAggLabel:"Fournir les zones d’agrégation pour la somme des incidents",defaultBoundingOption:"Sélectionner des zones adjacentes",defaultAggregationOption:"Sélectionner des zones d’agrégation",itemDescription:"Service d’entités généré en exécutant la solution Trouver des points chauds",itemTags:"Analyse, Points chauds, ${layername}, ${fieldname}",itemSnippet:"Service d’entités Analyse généré à partir de Trouver des points chauds",chooseAttributeLabel:"Choisir un champ d’analyse",blayerName:"Dessiner les limites"},overlayLayersTool:{overlayDefine:"Recouvrir <b>${layername}</b> avec",chooseOverlayLayer:"Choisir la couche de superposition",chooseOverlayMethod:"Choisir la méthode de superposition",itemDescription:"Service d´entités généré avec la solution Superposer les couches.",itemTags:"Analyse, couches de superposition, ${layername}",itemSnippet:"Service d´entités Analyse généré à partir des couches de superposition",unionOutputLyrName:"union de ${layername} et de ${overlayname}",intersectOutputLyrName:"intersection de ${layername} et de ${overlayname}",eraseOutputLyrName:"effacement de ${layername} avec ${overlayname}",overlayLayerPolyMsg:"La couche de superposition doit être une Couche polygone pour la superposition Union",notSupportedEraseOverlayMsg:"Cette couche de superposition n´est pas prise en charge pour la superposition Effacement. Remplacée par la superposition Intersection.",intersect:"Intersecter",union:"Agréger",erase:"Effacer"},bufferTool:{bufferDefine:"Créer des tampons à partir de <b>${layername}</b>",outputLayerName:"Tampon de ${layername}",sizeLabel:"Entrer la taille du tampon",sizeHelp:"Pour créer des tampons multiples, entrez les distances séparées par des espaces (2 3 5.5).",typeLabel:"Type de tampon",resultLabel:"Nom de la couche résultat",optionsLabel:"Options",itemDescription:"Service d´entités généré à partir de la solution de Entités de tampon. L´entrée de ${layername} a été ajoutée au tampon avec ${distance_field} ${units}",itemTags:"Tampon, ${layername}",itemSnippet:"Service d´entités Analyse généré à partir du tampon",overlap:"Superposer",dissolve:"Fusionner",include:"Ajouter",exclude:"Exclure",around:"Autour",sideType:"Type de côté",endType:"Type de fin",left:"Gauche",right:"Droite",round:"Rond",flat:"Plat",multipleDistance:"Les tampons de distance multiples devraient être",rings:"Anneaux",disks:"Disques",areaofInputPoly:"Zone de polygones d´entrée en polygones de tampon",distanceMsg:"Valeurs numériques uniquement",distance:"Distance",field:"Champ"},driveTimes:{toolDefine:"Créer des zones autour de <b>${layername}</b>",outputLayerName:"Conduire à partir de ${layername} : ---",measureLabel:"Mesurer :",measureHelp:"Pour générer plusieurs zones pour chaque point, tapez les tailles séparées par des espaces (2 3.5 5).",areaLabel:"Zones depuis différents points :",trafficLabel:"Utiliser les conditions de circulation (facultatif)",resultLabel:"Nom de la couche résultat",itemDescription:"Service d´entité généré à partir de la solution Créer les temps de conduite.",itemTags:"Temps de conduite, ${layername}",itemSnippet:"Service d´entité Analyse généré à partir de Créer les temps de conduite"},extractDataTool:{layersToExtract:"Couches à extraire",studyArea:"Zone d´étude",outputDataFormat:"Format de données de sortie",filegdb:"Base de données géographique sur fichier",shpFile:"Fichier de forme",lyrpkg:"Package de couche",selectFtrs:"Sélectionner des entités",clipFtrs:"Services de clip",sameAsDisplay:"Identique à l´affichage",sameAsLayer:"Identique à ${layername}",outputfileName:"NomSortie.zip",itemDescription:"Fichier généré à partir de la solution Extraire des données.",itemTags:"Analyse, Extraire les données",itemSnippet:"Élément Fichier d´analyse généré à partir de Extraire les données"}}));
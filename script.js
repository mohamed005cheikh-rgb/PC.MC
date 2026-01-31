// Données du plan comptable (version simplifiée pour l'exemple)
// Dans une application réelle, vous chargeriez ceci depuis un fichier JSON externe
const accounts = [
    {
        "code": "100",
        "intitule": "Capital individuel ou capital social",
        "definition": "Compte de capital pour les entreprises individuelles ou sociétés."
    },
    {
        "code": "1001",
        "intitule": "Capital souscrit non appelé",
        "definition": "Part du capital souscrite mais non encore appelée."
    },
    {
        "code": "1002",
        "intitule": "Capital souscrit appelé, non versé",
        "definition": "Capital appelé mais non encore versé par les actionnaires."
    },
    {
        "code": "1003",
        "intitule": "Capital souscrit appelé, versé",
        "definition": "Capital appelé et effectivement versé."
    },
    {
        "code": "1041",
        "intitule": "Primes d'émission",
        "definition": "Primes liées à l'émission d'actions."
    },
    {
        "code": "1042",
        "intitule": "Primes de fusion",
        "definition": "Primes liées à des opérations de fusion."
    },
    {
        "code": "1043",
        "intitule": "Primes d'apport",
        "definition": "Primes liées à des apports en société."
    },
    {
        "code": "110",
        "intitule": "Réserves légales",
        "definition": "Réserves obligatoires imposées par la loi."
    },
    {
        "code": "113",
        "intitule": "Réserves statutaires et ou contractuelles",
        "definition": "Réserves définies par les statuts ou contrats."
    },
    {
        "code": "114",
        "intitule": "Réserves réglementées",
        "definition": "Réserves soumises à des règles spécifiques."
    },
    {
        "code": "115",
        "intitule": "Réserves libres",
        "definition": "Réserves non affectées et disponibles."
    },
    {
        "code": "116",
        "intitule": "Autres réserves",
        "definition": "Réserves diverses non classées ailleurs."
    },
    {
        "code": "120",
        "intitule": "Report à nouveau (solde créditeur)",
        "definition": "Report à nouveau créditeur des exercices précédents."
    },
    {
        "code": "129",
        "intitule": "Report à nouveau (solde débiteur)",
        "definition": "Report à nouveau débiteur des exercices précédents."
    },
    {
        "code": "130",
        "intitule": "Résultat net (solde créditeur)",
        "definition": "Bénéfice net en attente d'affectation."
    },
    {
        "code": "139",
        "intitule": "Résultat net (solde débiteur)",
        "definition": "Perte nette en attente d'affectation."
    },
    {
        "code": "140",
        "intitule": "Subventions d'équipement reçues",
        "definition": "Subventions reçues pour des investissements."
    },
    {
        "code": "149",
        "intitule": "Subvention d'équipement inscrites au compte de résultat",
        "definition": "Subventions d'équipement rattachées au résultat."
    },
    {
        "code": "1500",
        "intitule": "Plus values de cession à réinvestir",
        "definition": "Plus-values devant être réinvesties."
    },
    {
        "code": "1508",
        "intitule": "Amortissement spécial de réemploi",
        "definition": "Amortissement spécial lié au réinvestissement."
    },
    {
        "code": "151",
        "intitule": "Ecarts de réévaluation",
        "definition": "Différences de réévaluation d'actifs."
    },
    {
        "code": "152",
        "intitule": "Provisions réglementées",
        "definition": "Provisions soumises à des règles spécifiques."
    },
    {
        "code": "160",
        "intitule": "Emprunts obligataires",
        "definition": "Emprunts émis sous forme d'obligations."
    },
    {
        "code": "162",
        "intitule": "Emprunt auprès des établissements de crédit",
        "definition": "Emprunts contractés auprès de banques."
    },
    {
        "code": "165",
        "intitule": "Dépôts et cautionnement reçus",
        "definition": "Dépôts et cautionnements versés par des tiers."
    },
    {
        "code": "167",
        "intitule": "Avances de l'Etat",
        "definition": "Avances reçues de l'État."
    },
    {
        "code": "168",
        "intitule": "Autres emprunts et dettes assimilées",
        "definition": "Autres dettes à long et moyen terme."
    },
    {
        "code": "169",
        "intitule": "Primes de remboursements des obligations",
        "definition": "Primes liées au remboursement d'obligations."
    },
    {
        "code": "175",
        "intitule": "Dettes rattachées à des participations (groupe)",
        "definition": "Dettes liées à des participations dans le groupe."
    },
    {
        "code": "178",
        "intitule": "Dettes rattachées à des sociétés en participation",
        "definition": "Dettes liées à des sociétés en participation."
    },
    {
        "code": "2000",
        "intitule": "Frais d'établissement",
        "definition": "Frais liés à la création de l'entreprise."
    },
    {
        "code": "2001",
        "intitule": "Frais relatifs au pacte social",
        "definition": "Frais liés aux pactes d'actionnaires."
    },
    {
        "code": "2003",
        "intitule": "Frais d'émission des emprunts",
        "definition": "Frais liés à l'émission d'emprunts."
    },
    {
        "code": "2004",
        "intitule": "Frais d'acquisition des immobilisations",
        "definition": "Frais d'acquisition d'actifs immobilisés."
    },
    {
        "code": "2005",
        "intitule": "Frais exceptionnelles à étaler sur plusieurs exercices",
        "definition": "Frais exceptionnels à amortir sur plusieurs années."
    },
    {
        "code": "203",
        "intitule": "Frais de recherches et du développement",
        "definition": "Frais de R&D capitalisés."
    },
    {
        "code": "2050",
        "intitule": "Concessions, brevets, licences, procédés, modèles, dessins",
        "definition": "Actifs incorporels industriels."
    },
    {
        "code": "2051",
        "intitule": "Droit au bail",
        "definition": "Droit au bail immobilier."
    },
    {
        "code": "2052",
        "intitule": "Fonds commercial",
        "definition": "Fonds de commerce."
    },
    {
        "code": "2058",
        "intitule": "Autres immobilisations incorporelles",
        "definition": "Autres actifs incorporels."
    },
    {
        "code": "2100",
        "intitule": "Terrains nus",
        "definition": "Terrains non bâtis."
    },
    {
        "code": "2101",
        "intitule": "Terrains de chantiers",
        "definition": "Terrains affectés à des chantiers."
    },
    {
        "code": "2102",
        "intitule": "Sous-sol et sur-sol",
        "definition": "Droits sur le sous-sol et sur-sol."
    },
    {
        "code": "2103",
        "intitule": "Terrains de gisement",
        "definition": "Terrains contenant des ressources."
    },
    {
        "code": "2105",
        "intitule": "Terrains d'exploitation agricole",
        "definition": "Terrains agricoles."
    },
    {
        "code": "2106",
        "intitule": "Terrains bâtis",
        "definition": "Terrains avec constructions."
    },
    {
        "code": "21200",
        "intitule": "Bâtiments industriels",
        "definition": "Bâtiments à usage industriel."
    },
    {
        "code": "21205",
        "intitule": "Bâtiments administratifs et commerciaux",
        "definition": "Bâtiments à usage administratif/commercial."
    },
    {
        "code": "21208",
        "intitule": "Autres ensembles immobiliers",
        "definition": "Autres types de bâtiments."
    },
    {
        "code": "2122",
        "intitule": "Installations, Agencement, Aménagement des constructions",
        "definition": "Aménagements des constructions."
    },
    {
        "code": "2125",
        "intitule": "Ouvrages d'infrastructures",
        "definition": "Infrastructures (routes, barrages, pistes...)."
    },
    {
        "code": "213",
        "intitule": "Installations complexes spécialisées",
        "definition": "Installations techniques complexes."
    },
    {
        "code": "214",
        "intitule": "Matériel d'exploitation",
        "definition": "Matériel utilisé dans l'exploitation."
    },
    {
        "code": "215",
        "intitule": "Matériel de transport",
        "definition": "Véhicules et équipements de transport."
    },
    {
        "code": "216",
        "intitule": "Matériel de bureau et informatique",
        "definition": "Équipements de bureau et informatiques."
    },
    {
        "code": "217",
        "intitule": "Immobilisations animales",
        "definition": "Animaux d'élevage ou de travail."
    },
    {
        "code": "2180",
        "intitule": "Mobiliers de bureau",
        "definition": "Mobilier de bureau."
    },
    {
        "code": "2181",
        "intitule": "Mobiliers de logement",
        "definition": "Mobilier de logement."
    },
    {
        "code": "2182",
        "intitule": "Installations, agencements, aménagements",
        "definition": "Aménagements divers."
    },
    {
        "code": "2183",
        "intitule": "Emballages récupérables identifiables",
        "definition": "Emballages réutilisables identifiables."
    },
    {
        "code": "300",
        "intitule": "Marchandises (ou groupe A)",
        "definition": "Stocks de marchandises (catégorie A)."
    },
    {
        "code": "301",
        "intitule": "Marchandises (Ou groupe B)",
        "definition": "Stocks de marchandises (catégorie B)."
    },
    {
        "code": "310",
        "intitule": "Matières premières",
        "definition": "Stocks de matières premières."
    },
    {
        "code": "3120",
        "intitule": "Matières consommables",
        "definition": "Matières consommables en stock."
    },
    {
        "code": "3121",
        "intitule": "Combustibles, carburant et lubrifiants",
        "definition": "Stocks de combustibles et carburants."
    },
    {
        "code": "3122",
        "intitule": "Fournitures et matériaux d'entretien",
        "definition": "Fournitures d'entretien en stock."
    },
    {
        "code": "3123",
        "intitule": "Fournitures d'atelier, d'usine et de magasin",
        "definition": "Fournitures pour ateliers/usines/magasins."
    },
    {
        "code": "3124",
        "intitule": "Petits outillages",
        "definition": "Petits outils en stock."
    },
    {
        "code": "3125",
        "intitule": "Produits d'entretien",
        "definition": "Produits d'entretien en stock."
    },
    {
        "code": "3126",
        "intitule": "Fournitures de bureau et administratives",
        "definition": "Fournitures de bureau en stock."
    },
    {
        "code": "3128",
        "intitule": "Autres matières et fournitures",
        "definition": "Autres fournitures diverses en stock."
    },
    {
        "code": "320",
        "intitule": "Emballages perdus",
        "definition": "Emballages non récupérables."
    },
    {
        "code": "325",
        "intitule": "Emballages récupérables non identifiables",
        "definition": "Emballages récupérables non identifiés."
    },
    {
        "code": "327",
        "intitule": "Emballages à usage mixte",
        "definition": "Emballages à usage mixte."
    },
    {
        "code": "4000",
        "intitule": "Fournisseurs ordinaires",
        "definition": "Fournisseurs habituels."
    },
    {
        "code": "4003",
        "intitule": "Fournisseurs sous-traitants",
        "definition": "Fournisseurs sous-traitants."
    },
    {
        "code": "4004",
        "intitule": "Fournisseurs des biens d'équipement",
        "definition": "Fournisseurs d'équipements."
    },
    {
        "code": "4005",
        "intitule": "Fournisseurs sociétés apparentées",
        "definition": "Fournisseurs liés (groupe)."
    },
    {
        "code": "4008",
        "intitule": "Fournisseurs retenues de garantie",
        "definition": "Retenues de garantie chez les fournisseurs."
    },
    {
        "code": "405",
        "intitule": "Effets à payer",
        "definition": "Effets de commerce à payer."
    },
    {
        "code": "408",
        "intitule": "Fournisseurs factures à recevoir",
        "definition": "Factures fournisseurs non encore reçues."
    },
    {
        "code": "4090",
        "intitule": "Fournisseurs avances et acomptes versées sur commandes d'exploitation",
        "definition": "Acomptes versés aux fournisseurs."
    },
    {
        "code": "4096",
        "intitule": "Fournisseurs créances pour emballages et matériel à rendre",
        "definition": "Créances sur fournisseurs pour emballages."
    },
    {
        "code": "4097",
        "intitule": "Rabais, remises et ristourne à obtenir",
        "definition": "Rabais à recevoir des fournisseurs."
    },
    {
        "code": "4100",
        "intitule": "Clients ordinaires",
        "definition": "Clients habituels."
    },
    {
        "code": "4103",
        "intitule": "Clients, Etats et collectivités publiques",
        "definition": "Clients publics."
    },
    {
        "code": "4105",
        "intitule": "Clients, sociétés apparentées",
        "definition": "Clients liés (groupe)."
    },
    {
        "code": "4108",
        "intitule": "Clients, retenues de garantie",
        "definition": "Retenues de garantie chez les clients."
    },
    {
        "code": "412",
        "intitule": "Clients douteux ou litigieux",
        "definition": "Créances clients douteuses."
    },
    {
        "code": "415",
        "intitule": "Effets à recevoir",
        "definition": "Effets de commerce à recevoir."
    },
    {
        "code": "417",
        "intitule": "Créances sur des travaux non encore facturables",
        "definition": "Créances sur travaux non facturés (long terme)."
    },
    {
        "code": "418",
        "intitule": "Clients factures à établir",
        "definition": "Factures à établir pour clients."
    },
    {
        "code": "4190",
        "intitule": "Clients, avances et acomptes reçus sur commande en cours",
        "definition": "Acomptes reçus des clients."
    },
    {
        "code": "4196",
        "intitule": "Clients, dettes pour emballages et matériels consignés",
        "definition": "Dettes envers clients pour emballages consignés."
    },
    {
        "code": "4197",
        "intitule": "Rabais, remises et ristournes à accorder",
        "definition": "Rabais à accorder aux clients."
    },
    {
        "code": "420",
        "intitule": "Rémunérations dues au personnel",
        "definition": "Salaires et rémunérations dues."
    },
    {
        "code": "422",
        "intitule": "Organismes sociaux rattachés à l'entreprise",
        "definition": "Organismes sociaux internes."
    },
    {
        "code": "425",
        "intitule": "Avances et acomptes au personnel",
        "definition": "Avances versées au personnel."
    },
    {
        "code": "426",
        "intitule": "Dépôt au personnel",
        "definition": "Dépôts du personnel."
    },
    {
        "code": "427",
        "intitule": "Oppositions",
        "definition": "Oppositions sur comptes."
    },
    {
        "code": "428",
        "intitule": "Dettes provisionnées pour congés à payer",
        "definition": "Provisions pour congés payés."
    },
    {
        "code": "430",
        "intitule": "Fonds de dotation et subvention à recevoir",
        "definition": "Subventions et dotations à recevoir."
    },
    {
        "code": "431",
        "intitule": "Opérations particulières avec l'état, les collectivités publiques...",
        "definition": "Opérations avec les organismes publics."
    },
    {
        "code": "432",
        "intitule": "Impôts sur le bénéfice et Impôt minimum forfaitaire",
        "definition": "Impôts sur les bénéfices."
    },
    {
        "code": "433",
        "intitule": "Impôts recouvrables sur les tiers",
        "definition": "Impôts à récupérer sur tiers."
    },
    {
        "code": "434",
        "intitule": "Impôts sur les traitements et salaires",
        "definition": "Retenues à la source sur salaires."
    },
    {
        "code": "4350",
        "intitule": "Etat, TVA déductible",
        "definition": "TVA déductible."
    },
    {
        "code": "4355",
        "intitule": "Etat, TVA à décaisser",
        "definition": "TVA à payer."
    },
    {
        "code": "4357",
        "intitule": "Etat, TVA collectée",
        "definition": "TVA collectée."
    },
    {
        "code": "436",
        "intitule": "Douanes et autres impôts et taxes",
        "definition": "Droits de douane et autres taxes."
    },
    {
        "code": "437",
        "intitule": "Obligations cautionnées",
        "definition": "Obligations sous caution."
    },
    {
        "code": "438",
        "intitule": "Charges à payer",
        "definition": "Charges à payer (et produits à recevoir)."
    },
    {
        "code": "440",
        "intitule": "Sécurité sociale",
        "definition": "Dettes envers la sécurité sociale."
    },
    {
        "code": "442",
        "intitule": "Autres organismes sociaux",
        "definition": "Dettes envers autres organismes sociaux."
    },
    {
        "code": "448",
        "intitule": "Charges à payer (et produits à recevoir)",
        "definition": "Charges sociales à payer."
    },
    {
        "code": "600",
        "intitule": "Achats et variations de stocks",
        "definition": "Achats et variations de stocks de marchandises."
    },
    {
        "code": "6010",
        "intitule": "Matières premières",
        "definition": "Achats de matières premières."
    },
    {
        "code": "60120",
        "intitule": "Matières consommables",
        "definition": "Achats de matières consommables."
    },
    {
        "code": "60121",
        "intitule": "Combustible, carburant et lubrifiants",
        "definition": "Achats de combustibles et carburants."
    },
    {
        "code": "60122",
        "intitule": "Fournitures et matériels d'entretien",
        "definition": "Achats de fournitures d'entretien."
    },
    {
        "code": "60123",
        "intitule": "Fourniture d'atelier d'usine et de magasin",
        "definition": "Achats de fournitures pour ateliers."
    },
    {
        "code": "60124",
        "intitule": "Petits outillages",
        "definition": "Achats de petits outils."
    },
    {
        "code": "60125",
        "intitule": "Produits d'entretien",
        "definition": "Achats de produits d'entretien."
    },
    {
        "code": "60126",
        "intitule": "Fournitures de bureau et administratives",
        "definition": "Achats de fournitures de bureau."
    },
    {
        "code": "60128",
        "intitule": "Autres matières et fournitures",
        "definition": "Achats d'autres fournitures."
    },
    {
        "code": "700",
        "intitule": "Ventes de marchandises",
        "definition": "Produits des ventes de marchandises."
    },
    {
        "code": "7010",
        "intitule": "Productions des biens",
        "definition": "Produits de la production de biens."
    },
    {
        "code": "7012",
        "intitule": "Travaux",
        "definition": "Produits des travaux."
    },
    {
        "code": "7015",
        "intitule": "Etudes",
        "definition": "Produits des études."
    },
    {
        "code": "7017",
        "intitule": "Prestations de services",
        "definition": "Produits des prestations de services."
    },
    {
        "code": "7060",
        "intitule": "Produits des services exploités dans l'intérêt du personnel",
        "definition": "Produits de services pour le personnel."
    },
    {
        "code": "7061",
        "intitule": "Commissions et courtages",
        "definition": "Produits de commissions et courtages."
    },
    {
        "code": "7062",
        "intitule": "Locations diverses",
        "definition": "Produits de locations."
    },
    {
        "code": "7063",
        "intitule": "Bonis sur reprises d'emballages",
        "definition": "Boni sur reprises d'emballages."
    },
    {
        "code": "7064",
        "intitule": "Ports facturés aux clients",
        "definition": "Produits des ports facturés aux clients."
    }
];

// Variables globales
let filteredAccounts = [...accounts];
let currentSort = 'code';
let selectedAccount = null;

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', () => {
    // Initialiser les éléments DOM
    const searchInput = document.getElementById('search-input');
    const clearSearchBtn = document.getElementById('clear-search');
    const resultsList = document.getElementById('results-list');
    const resultsCount = document.getElementById('results-count');
    const accountDetail = document.getElementById('account-detail');
    const closeDetailBtn = document.getElementById('close-detail');
    const sortByCodeBtn = document.getElementById('sort-by-code');
    const sortByNameBtn = document.getElementById('sort-by-name');
    
    // Afficher les comptes initiaux
    displayAccounts();
    
    // Événement de recherche en temps réel
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.trim();
        filterAccounts(searchTerm);
        displayAccounts();
    });
    
    // Effacer la recherche
    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchInput.focus();
        filterAccounts('');
        displayAccounts();
    });
    
    // Fermer les détails du compte
    closeDetailBtn.addEventListener('click', () => {
        accountDetail.classList.remove('active');
        // Désélectionner l'élément dans la liste
        const selectedElement = document.querySelector('.result-item.selected');
        if (selectedElement) {
            selectedElement.classList.remove('selected');
        }
        selectedAccount = null;
    });
    
    // Trier par code
    sortByCodeBtn.addEventListener('click', () => {
        if (currentSort !== 'code') {
            currentSort = 'code';
            sortByCodeBtn.classList.add('active');
            sortByNameBtn.classList.remove('active');
            sortAccounts();
            displayAccounts();
        }
    });
    
    // Trier par nom
    sortByNameBtn.addEventListener('click', () => {
        if (currentSort !== 'name') {
            currentSort = 'name';
            sortByNameBtn.classList.add('active');
            sortByCodeBtn.classList.remove('active');
            sortAccounts();
            displayAccounts();
        }
    });
    
    // Fonction de filtrage des comptes
    function filterAccounts(searchTerm) {
        if (!searchTerm) {
            filteredAccounts = [...accounts];
            return;
        }
        
        // Vérifier si la recherche commence par un chiffre (recherche par code)
        const isNumericSearch = /^\d+/.test(searchTerm);
        
        filteredAccounts = accounts.filter(account => {
            if (isNumericSearch) {
                // Recherche par code (commence par)
                return account.code.startsWith(searchTerm);
            } else {
                // Recherche par intitulé (insensible à la casse)
                const searchLower = searchTerm.toLowerCase();
                return account.intitule.toLowerCase().includes(searchLower);
            }
        });
    }
    
    // Fonction de tri des comptes
    function sortAccounts() {
        if (currentSort === 'code') {
            filteredAccounts.sort((a, b) => {
                // Comparaison numérique des codes
                return parseInt(a.code) - parseInt(b.code);
            });
        } else {
            filteredAccounts.sort((a, b) => {
                // Comparaison alphabétique des intitulés
                return a.intitule.localeCompare(b.intitule, 'fr');
            });
        }
    }
    
    // Fonction d'affichage des comptes
    function displayAccounts() {
        // Mettre à jour le compteur de résultats
        if (filteredAccounts.length === 0) {
            resultsCount.textContent = "Aucun compte trouvé";
        } else {
            resultsCount.textContent = `${filteredAccounts.length} compte${filteredAccounts.length > 1 ? 's' : ''} trouvé${filteredAccounts.length > 1 ? 's' : ''}`;
        }
        
        // Vider la liste
        resultsList.innerHTML = '';
        
        // Afficher un message si aucun résultat
        if (filteredAccounts.length === 0) {
            resultsList.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search"></i>
                    <p>Aucun compte ne correspond à votre recherche</p>
                    <p class="hint-text">Essayez avec un autre code ou un autre nom de compte</p>
                </div>
            `;
            return;
        }
        
        // Ajouter chaque compte à la liste
        filteredAccounts.forEach(account => {
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';
            if (selectedAccount && selectedAccount.code === account.code) {
                resultItem.classList.add('selected');
            }
            
            resultItem.innerHTML = `
                <div class="account-code">${account.code}</div>
                <div class="account-name">${account.intitule}</div>
                <div class="account-arrow"><i class="fas fa-chevron-right"></i></div>
            `;
            
            // Ajouter un événement de clic pour afficher les détails
            resultItem.addEventListener('click', () => {
                showAccountDetail(account);
                // Désélectionner l'élément précédent
                const previousSelected = document.querySelector('.result-item.selected');
                if (previousSelected) {
                    previousSelected.classList.remove('selected');
                }
                // Sélectionner le nouvel élément
                resultItem.classList.add('selected');
            });
            
            resultsList.appendChild(resultItem);
        });
    }
    
    // Fonction pour afficher les détails d'un compte
    function showAccountDetail(account) {
        selectedAccount = account;
        
        // Créer le contenu des détails
        const detailContent = document.querySelector('.detail-content');
        detailContent.innerHTML = `
            <div class="account-info">
                <div class="account-info-header">
                    <div class="account-info-code">${account.code}</div>
                    <div class="account-info-name">${account.intitule}</div>
                    <div class="account-info-category">${getAccountCategory(account.code)}</div>
                </div>
                
                <div class="account-info-definition">
                    <h4>Définition</h4>
                    <p>${account.definition}</p>
                </div>
                
                <div class="account-info-rules">
                    <h4>Règles comptables associées</h4>
                    <p>${getAccountRules(account.code)}</p>
                </div>
            </div>
        `;
        
        // Afficher le panneau de détails
        accountDetail.classList.add('active');
        
        // Faire défiler jusqu'au panneau de détails sur les petits écrans
        if (window.innerWidth < 768) {
            accountDetail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }
    
    // Fonction pour déterminer la catégorie d'un compte basée sur son code
    function getAccountCategory(code) {
        const firstDigit = code.charAt(0);
        switch (firstDigit) {
            case '1': return 'Comptes de capitaux';
            case '2': return 'Comptes d\'immobilisations';
            case '3': return 'Comptes de stocks';
            case '4': return 'Comptes de tiers';
            case '5': return 'Comptes financiers';
            case '6': return 'Comptes de charges';
            case '7': return 'Comptes de produits';
            case '8': return 'Comptes de résultat';
            case '9': return 'Comptes analytiques';
            default: return 'Compte général';
        }
    }
    
    // Fonction pour obtenir des règles comptables basées sur le code
    function getAccountRules(code) {
        const firstDigit = code.charAt(0);
        const firstTwoDigits = code.substring(0, 2);
        
        // Règles générales par classe
        if (firstDigit === '1') {
            return "Les comptes de capitaux enregistrent les ressources permanentes de l'entreprise (capital, réserves, résultats). Ils figurent au passif du bilan.";
        } else if (firstDigit === '2') {
            return "Les comptes d'immobilisations représentent les actifs durables de l'entreprise. Ils sont soumis à des plans d'amortissement et peuvent faire l'objet de provisions pour dépréciation.";
        } else if (firstDigit === '3') {
            return "Les comptes de stocks sont évalués selon la méthode du coût moyen pondéré ou du premier entré, premier sorti (FIFO). Des provisions pour dépréciation peuvent être constituées.";
        } else if (firstDigit === '4') {
            return "Les comptes de tiers enregistrent les créances et dettes avec les partenaires de l'entreprise. Ils doivent être régulièrement rapprochés et faire l'objet de provisions pour créances douteuses.";
        } else if (firstDigit === '5') {
            return "Les comptes financiers comprennent les disponibilités et les instruments financiers. Ils font l'objet d'une réconciliation bancaire mensuelle.";
        } else if (firstDigit === '6') {
            return "Les comptes de charges sont imputés au compte de résultat de l'exercice au titre duquel elles se rattachent, selon le principe d'indépendance des exercices.";
        } else if (firstDigit === '7') {
            return "Les comptes de produits sont constatés au compte de résultat selon le principe de rattachement à l'exercice, indépendamment de leur encaissement.";
        } else if (firstDigit === '8') {
            return "Les comptes de résultat déterminent le résultat de l'exercice (bénéfice ou perte) avant et après impôt.";
        } else if (firstDigit === '9') {
            return "Les comptes analytiques sont utilisés pour le calcul des coûts et la mesure des performances internes. Ils ne font pas partie de la comptabilité générale.";
        }
        
        return "Règles comptables standard selon le Plan Comptable Mauritanien.";
    }
    
    // Initialiser le tri
    sortAccounts();
});

// Ajout d'un effet de focus automatique sur le champ de recherche
window.addEventListener('load', () => {
    document.getElementById('search-input').focus();
});

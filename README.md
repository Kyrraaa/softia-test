# Projet API Laravel 10 et PHP 8
## Introduction
Ce projet contient une API RESTful construite avec Laravel 10 et PHP 8. 

L'API contient 3 endpoints qui permettent de gérer les ressources suivantes:

`http://localhost:8000/api/agreement`: gestion des convention

`http://localhost:8000/api/student`: gestion des étudiants

`http://localhost:8000/api/certificate`: gestion des certificats

L'objectif de cette API est de fournir une interface permettant de stocker et de récupérer des données relatives à des conventions, des étudiants et des certificats.

## Prérequis
Pour préparer l'API, il est nécessaire d'installer les dépendances avec la commande composer install. Ensuite, il faut modifier les informations de connexion à la base de données dans le fichier .env.

Ensuite, il faut lancer la migration des tables avec les seeders avec la commande ci-dessous:

L'objectif est de générer les tables nécessaires à l'utilisation de la base de données ainsi que de les peupler avec les seeders.

```bash
cd ./softia-api/
composer install
php artisan migrate --seed
```

Une fois cela fait, l'API est prête à être lancée avec la commande:
```bash
php artisan serve
```

## Endpoints
Endpoint `http://localhost:8000/api/agreement`
Cet endpoint permet de gérer les accords. Les actions suivantes sont possibles:

    GET /api/agreement: récupérer la liste de toutes les conventions.
    GET /api/agreement/{id}: récupérer une convention selon son id.
    POST /api/agreement: créer une nouvelle convention


Endpoint `http://localhost:8000/api/student`
Cet endpoint permet de gérer les étudiants. Les actions suivantes sont possibles:

    GET /api/student: récupérer la liste de tous les étudiants.
    GET /api/student/{id}: récupérer un étudiant selon son id.
    POST /api/student: créer un nouvel étudiant.


Endpoint `http://localhost:8000/api/certificate`
Cet endpoint permet de gérer les certificats. Les actions suivantes sont possibles:

    GET /api/certificate: récupérer la liste de tous les certificats.
    GET /api/certificate/{id}: récupérer un certificat selon son id.
    POST /api/certificate: créer un nouveau certificat.


## Frontend

Pour installer les dépendances du frontend, il suffit d'éxecuter la commande dans le dossier `./softia-front/`
```bash
yarn install
```

Une fois que cette étape est passée, vous pouvez lancer le projet front-end avec la commande suivante

```bash
yarn start
```

L'application sera disponible à l'adresse suivante: `http://localhost:3000`.

Le frontend a été conçu pour communiquer avec l'API via les endpoints décrits ci-dessus.
# Bienvenue sur le projet Shelve

## Présentation et contexte

Je me présente Justin GALLY, connu sous le nom de Jintus sur [Twitch](https://www.twitch.tv/jintuslive) et [Twitter](https://www.twitter.com/jintuslive).

Je suis développeur WEB freelance sur Lyon et me suis lancé dans une aventure sur Twitch depuis peu. Mon but ? Partager à un maximum de personnes ma passion, le développement informatique, découvrir et m'améliorer en continue sur les technos WEB.

Dans cette optique, j'anime une émission où je développe des applications en direct.

Le projet shelve en fait partie.

## Stack technique

> **Prérequis**
>
> - [Node.js](https://nodejs.org/en/) (19.5.x)
> - [Pnpm](https://pnpm.io/fr/pnpm-cli) (7.26.X)
> - [Docker](https://www.docker.com/)

Le projet est découpé en 3 applications :
- Une application back, basée sur le framework [NestJS](https://nestjs.com/), portant la logique métier principale et l'accès à la base de donnée
- Une [application mobile](https://github.com/Jintus-live-projects/shelve-flutter), basée sur le framework [Flutter](https://flutter.dev/), permettant l'ajout et la supression d'aliment dans le stock
- Une application front, basée sur le framework [NextJS](https://nextjs.org/), de gestion plus globale en mode dashboard. 

## Installer le projet

> **Si vous n'êtes pas un viewer régulier**
>
> Il faut faire un fork du projet avant de faire les étapes suivantes.

Cloner le projet en local

```
git clone [git URL]
```

Se déplacer à la racine du projet, puis installer les dépendances externes :

```
cd shelve
pnpm install
```

Pour lancer le projet en local, lancer le container docker de la base de données et lancer l'application

```
docker compose -f .\docker\docker-compose.yml up -d
pnpm turbo dev
```

L'application front est accesible sur http://localhost:3000 où on accède à l'application

Le playground GraphQL est accesible à l'addresse suivante http://localhost:3333/graphql

## Contribution

Tout le monde peut proposer des pull requests qui seront relu en live sur [Twitch](https://www.twitch.tv/jintuslive).
Les pull requests devront être associées à une issue Github, existante ou nouvellement créée.

Si vous souhaitez être un collaborateur actif du projet et donc y accéder en tant que développeur, il faudra être un viewer régulier de la chaîne et participer aux émissions de façon active. Passer en live en discuter 🔴

### Règle de contribution

Toute pull request doit :
- Passer le pipeline d'intégration continue avant d'être relu
- Être relu par moi ou un contributeur actif du projet


# Changelog

Toutes les modifications notables apportées à ce projet seront documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.2] - 2024-10-26

### Ajouté
- Ajout d'un composant SimilarArticles.astro pour les articles similaires

## [1.2.1] - 2024-10-25

### Modifié
- remplacement de l'icone Twitter par X

### Corrigé
- bug des typographies qui s'affichaient mal sur les titres

## [1.2] - 2024-10-25

### Ajouté
- Ajout d'un module Accordion
- Ajout du support des tags (affichage dans les cartes articles)
- Ajout des tags clickables dans les articles et dans la page d'archive
- Ajout d'une page tag pour lister les articles par tag 

## [1.1] - 2024-10-24

### Ajouté

- composant newsletter, connecté à un webhook compatible avec n8n, zapier et make pour pas etre prisonnier d’un autoresponder
- correction du header et ajout d’un bouton CTA configurable dans header-footer.ts
- 2e module newsletter avec le design d’une image
- module “formulaire de contact” connecté à un webhook avec des champs personnalisables (pour les sous-sélection surtout)
- pages de documentationpour bien démarrer avec mdxforge et une description des modules ajoutés au template
- option de redirection sur le module newsletter (et newsletter avec image)

### Modifié

- Amélioration du design global pour une meilleure expérience utilisateur
- Design du module newsletter (placeholder au lieu de label)

### Corrigé

- Divers bugs mineurs et améliorations de performance

## [1.0] - 2024-10-24

- Version initiale du projet MDXForge
- Configuration initiale du projet Astro
- Intégration de Tailwind CSS pour le styling
- Composants de base (Header, Footer, Layout)
- Page d'accueil avec sections principales
- Page À propos
- Système de blog avec support MDX
- Fonctionnalité de recherche
- Page 404 personnalisée
- Support RSS
- Optimisation SEO
- Configuration facile via fichiers de configuration
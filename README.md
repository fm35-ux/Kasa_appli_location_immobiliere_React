# Refonte Frontend en React & Stratégie de Test Unitaire - Projet Kasa

## 🎯 Contexte du Projet
Ce projet simule une mission de développeuse front-end en freelance pour **Kasa**, l'un des leaders de la location d'appartements. 

L'objectif principal était de mener à bien la **refonte totale du site web**. Sous la direction de la CTO, l'application a été entièrement réécrite en adoptant une stack moderne : **Node.js** pour le back-end et **React** pour le front-end, en se basant sur de nouvelles maquettes Figma responsives.

---

## 👤 Mon Rôle & Missions Front-End
En tant que développeuse sur cette refonte, j'ai pris en charge l'intégralité du chantier Front-End :

1. **Initialisation de l'écosystème :** Configuration de l'environnement de développement moderne et rapide en utilisant **Vite**.
2. **Architecture et Routage SPA :** Mise en place d'une *Single Page Application* (SPA) avec une navigation fluide et dynamique gérée par **React Router** (incluant la gestion d'une page d'erreur 404 personnalisée).
3. **Intégration de données (API) :** Connexion de l'interface au serveur back-end local de Kasa afin de récupérer et d'afficher dynamiquement les annonces de logements et leurs spécifications.
4. **Développement de composants Pixel-Perfect :** Création de composants d'interface modulaires et réutilisables d'après les prototypes Figma (Desktop et Mobile).

---

## 🧪 Volet Assurance Qualité (QA) & Tests Unitaires

* **Choix de la Stack de Test :** Utilisation de **Vitest** (et de la *React Testing Library*) pour leur parfaite intégration et rapidité avec le bundler Vite.
* **Tests de Composants Sans État (*Stateless / Présentation*) :** Validation de l'affichage correct des données brutes injectées via les *props*.
* **Tests de Composants Avec État (*Stateful / Logique*) :** Simulation des interactions utilisateurs (ex: clics sur un bouton `Collapse`) et vérification du changement d'état du DOM.
* **Objectif de Couverture (KPI) :** Atteinte d'un taux de couverture globale de code (*code coverage*) supérieur à **80 %** sur l'ensemble des modules testés.

---

## 🛠️ Stack Technique 

* **Framework :** React
* **Routage :** React Router
* **Bundler :** Vite
* **Styles :** CSS3 / SASS (Animations de transition et Flexbox/Grid pour le responsive)
* **Outil de Design :** Figma (Extraction des assets et inspection des prototypes d'animation)
* **Tests :** Vitest / React Testing Library

---

## 💡 Impact pour mon profil de Testeuse Logiciel
La réalisation de ce projet de développement m'apporte des compétences fondamentales pour l'ingénierie QA :
* **Compréhension intime du code React :** Savoir comment sont construits l'état (*state*) et les propriétés (*props*) d'un composant me permet de cibler précisément mes futurs scénarios de test (E2E ou d'intégration).
* **Maîtrise des tests unitaires et du Code Coverage :** Expérience concrète dans l'écriture d'assertions logiques et l'analyse de rapports de couverture de test.
* **Analyse des flux asynchrones :** Compréhension des mécanismes de requêtes aux API REST, indispensable pour tester la cohérence des flux de données et simuler des comportements d'API (Mocking).

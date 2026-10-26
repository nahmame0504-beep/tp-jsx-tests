# TP 7 : Comprendre JSX, la Composition Avancée et les Tests React

Ce projet a été réalisé dans le cadre de l'apprentissage de React. Il traite de la compréhension interne de JSX, des motifs de composition avancés (*Higher-Order Components* et *Render Props*), ainsi que de l'écriture de tests unitaires et d'intégration avec Jest et React Testing Library.

##  Fonctionnalités réalisées

1. **Compréhension et règles de JSX** (`JSXDemo.js`)
   - Comparaison entre la syntaxe JSX et la méthode générée par Babel (`React.createElement`).
   - Application des bonnes pratiques JSX (utilisation de `className` et `htmlFor`).

2. **Higher-Order Component (HOC)** (`withLogging.js`, `Button.js`, `ButtonWithLogging.js`)
   - Création d'un composant d'ordre supérieur pour intercepter et afficher les *props* dans la console avant le rendu.

3. **Composition avec Render Props** (`DataLoader.js`)
   - Transmission d'une fonction de rendu (*render prop*) pour dynamiser l'affichage d'une liste de données (`Alice`, `Bob`, `Charlie`).

4. **Tests Unitaires et d'Intégration** (`Greeting.test.js`, `Counter.test.js`, `App.test.js`)
   - Test unitaire d'affichage avec `@testing-library/react`.
   - Test d'intégration simulant des événements utilisateur (`fireEvent.click`) sur un composant compteur.

---

##  Technologies utilisées

- **React** (Bootstrapped avec [Create React App](https://github.com/facebook/create-react-app))
- **Jest** & **React Testing Library**
- **JavaScript (ES6+)**

---

##  Structure du projet

```text
src/
├── App.js                   # Composant principal assemblant le TP
├── App.test.js              # Test du composant principal
├── JSXDemo.js               # Démonstration JSX vs React.createElement
├── withLogging.js           # HOC pour le logging des props
├── Button.js                # Composant Bouton de base
├── ButtonWithLogging.js     # Bouton enrichi par le HOC
├── DataLoader.js            # Composant utilisant le pattern Render Props
├── Greeting.js              # Composant simple pour test unitaire
├── Greeting.test.js         # Test unitaire de Greeting
├── Counter.js               # Composant Compteur avec état
└── Counter.test.js          # Test d'intégration interactif du Compteur
```

<img width="1916" height="971" alt="image" src="https://github.com/user-attachments/assets/602b46e5-dd54-46e4-a403-4cd9ce615f33" />

<img width="921" height="500" alt="Capture d&#39;écran 2026-10-26 181358" src="https://github.com/user-attachments/assets/3aeccba2-24e5-417f-94d1-1921ec2b9d71" />

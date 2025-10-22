
***

# Avatar Generator

**Générateur d'avatar personnalisable**

## Présentation

Ce projet permet de créer un avatar personnalisé composé :
- D’un couvre-chef (chapeau, casque, casquette…)
- D’un haut (veste, tee-shirt, etc.)
- D’un bas (pantalon, short, etc.)

Chaque élément possède ses propres images interchangeables via un carrousel de flèches ou via le bouton de randomisation.

### Technologie utilisées
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff&style=for-the-badge)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff&style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=222&style=for-the-badge)

***

## Fonctionnalités

- **3 catégories d'éléments graphiques** : couvre-chef, haut, bas
- **Changement d’image** grâce aux flèches ← → pour chaque catégorie
- **Bouton "randomize"** : génère une combinaison aléatoire
- **Code facilement extensible** : ajoutez/retirez vos propres images dans le code `categories`

***

## Structure du projet

```
Avatar-Generator/
│
├── images/              # images utilisées (addOns, tops, bottoms)
├── index.html           # page principale
├── style.css            # styles du site
├── script.js            # logique JS
└── README.md            # ce fichier
```

***

## Exemple d'utilisation

1. **Clonez le projet** sur votre machine :
   ```bash
   git clone https://github.com/votre-utilisateur/Avatar-Generator.git
   ```
2. Placez vos images personnalisées dans le dossier `images/` :
   - `images/addon1.png`, `images/haut1.png`, `images/bottom1.png`, ...
3. Ouvrez `index.html` avec votre navigateur préféré.
4. Cliquez sur les flèches ou le bouton "randomize!" pour créer votre personnage !

***

## Personnalisation

- Ajoutez simplement de nouvelles images dans le dossier `images/` puis dans le tableau `categories` du fichier `script.js` :
  ```js
  const categories = {
    tops: {
      images: ["images/haut1.png", "images/haut2.png", "images/haut3.png"],
      // ...
    },
    // ...
  }
  ```
- Personnalisez le style via `style.css` (couleurs, design, effet...)

***

**N’hésite pas à ouvrir une issue ou une pull request pour toute amélioration !**

***

// le dicttionaire categories qui permet de prendre les images en fonction des intération avec les listeners
const categories = {
  tops: {
    images: ["images/haut1.png", "images/haut2.png"],
    index: 0,
    nextBtn: "0nextBtn",
    prevBtn: "0prevBtn"
  },
  bottoms: {
    images: ["images/bottom1.png"],
    index: 0,
    nextBtn: "1nextBtn",
    prevBtn: "1prevBtn"
  },
  addons: {
    images: ["images/addon1.png"],
    index: 0,
    nextBtn: "2nextBtn",
    prevBtn: "2prevBtn"
  }
}
// cette fonction (appeler dans les listeners) permet de mettre à jour la source de l'image dans la partie html par celle corespondant à l'index choisie
function updateImage(cat) {
    const category = categories[cat];
    const imgElement = document.getElementById(cat + "-img");
    imgElement.src = category.images[category.index];
}


// il est interessant de remarquer que 3 listener sont utiliser
// permet l'interaction entre la partie front et 
document.getElementById("random-btn").addEventListener("click", randomize);

// cette fonction tire un nb aléatoir celon le nombre d'image disponible puis change l'affichage avec l'image corespondant à l'index pioché
function randomize() {
    for (const cat in categories) {
        const category = categories[cat];
        category.index = Math.floor(Math.random() * category.images.length);
        updateImage(cat);
    }
}

// ces deux bloque gère le changement d'image quand on appuis sur les flèche 
document.getElementById(category.nextBtn).addEventListener("click", () => {
  category.index = (category.index + 1) % category.images.length;  // ici lorsque le modulo de l'index de l'image (par rapport à la list) est egale à la length de la list, on retourne à la première image 
  updateImage(cat);
});

document.getElementById(category.prevBtn).addEventListener("click", () => {
  category.index = (category.index - 1 + category.images.length) % category.images.length;  // Loop to last image
  updateImage(cat);
});
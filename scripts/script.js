//INSTRUCTIONS

//Déclarez une variable listeMots qui est un tableau.
//Ce tableau contient trois mots que l’utilisateur devra taper au clavier : “Cachalot”, “Pétunia” et “Serviette”.
//Déclarez une deuxième variable score, initialisée à 0, qui contiendra le nombre de mots correctement tapés par l’utilisateur.
//À l’aide de l’instruction prompt, demandez à l’utilisateur de rentrer le mot contenu dans la première case du tableau. N’oubliez pas, la première case d’un tableau est la case numéro zéro !
//Écrivez une première structure conditionnelle pour savoir si le mot tapé par l’utilisateur est bien celui demandé par l’application.
//Si c’est le cas, on augmente la valeur de score de 1.
//Vérifiez avec des console.log si le score final est correct.
//Jusqu’à maintenant, nous avons répété trois fois les mêmes instructions dans notre projet :
//3 “prompts”, qui nous ont permis de demander des mots à l’utilisateur ;
//3 fois le test pour vérifier que le mot tapé par l’utilisateur est correct.
//Je vous propose de factoriser ce code, c'est-à-dire de mettre en commun les parties répétées à l’aide d'une boucle.
//Pour rendre le jeu plus engageant, nous voulons que l’utilisateur puisse avoir le choix entre deux listes de mots différentes : une liste avec des mots et une liste avec des phrases.
//Déclarez un tableau listePhrases qui contient 3 courtes phrases : “Pas de panique !”, “La vie, l’univers et le reste”, “Merci pour le poisson”.
//Demandez à l’utilisateur s’il veut la liste de mots ou la liste de phrases. Répétez la question tant que l’utilisateur n’a pas écrit “mots” ou “phrases”.
//Lancez votre boucle for, avec la liste que l’utilisateur a choisie.

/*let wordsList = ["cachalot", "pétunia", "serviette"];
let sentencesList = [
  "pas de panique !",
  "la vie l’univers et le reste",
  "merci pour le poisson",
];*/
//Function which start the game
function startGame() {
  let choice = chooseSentencesOrWords();
  let score = 0;
  let numberOfSuggestedWords = 0;

  if (choice === "mots") {
    score = loopStartGame(wordsList);
    numberOfSuggestedWords = wordsList.length;
    console.log(numberOfSuggestedWords);
  } else if (choice === "phrases") {
    score = loopStartGame(sentencesList);
    numberOfSuggestedWords = sentencesList.length;
  }
  returnMessageScore(score, numberOfSuggestedWords);
}

//chooseSentencesOrWords : cette fonction demande à l’utilisateur s’il veut jouer avec des phrases ou des mots.
function chooseSentencesOrWords() {
  let choice = prompt(`Veuillez choisir le jeu de mots, ou de phrases `);
  while (choice !== "mots" && choice !== "phrases") {
    choice = prompt(`Veuillez choisir le jeu de mots, ou de phrases `);
  }
  return choice;
}

//returnMessageScore : cette fonction prend en paramètre le résultat et le nombre total de mots proposés, et affiche le résultat du joueur ;
function returnMessageScore(score, numberOfSuggestedWords) {
  let message =
    "Votre score est de " + score + " sur " + numberOfSuggestedWords.length;
  console.log(message);
}

//Function which start the loop for the game
function loopStartGame(listOfSuggestedWords) {
  let score = 0;
  for (i = 0; i < listOfSuggestedWords.length; i++) {
    let userWord = prompt(
      `Veuillez saisir le mot : ${listOfSuggestedWords[i]}:`
    );

    if (userWord === listOfSuggestedWords[i]) {
      console.log("Bravo, vous avez correctement tapé le mot");
      score++;
      console.log(score);
    } else {
      console.log("Vous avez fait une erreur de frappe");
    }
  }
  return score;
}

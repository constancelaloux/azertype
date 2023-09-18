/*********************************************************************************
 *
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu.
 *
 *********************************************************************************/

/**
 * Cette fonction affiche dans la console le score de l'utilisateur
 * @param {number} result : le score de l'utilisateur
 * @param {number} numberOfSuggestedWords : le nombre de mots proposés à l'utilisateur
 */
function showResult(result, numberOfSuggestedWords) {
  /*let message =
    "Votre score est de " + result + " sur " + numberOfSuggestedWords;*/
  //console.log(message);*/

  let results = document.querySelector(".zoneScore span");

  let htmlMessage = `
    ${result} / ${numberOfSuggestedWords}
  `;

  results.innerHTML = htmlMessage;
}

/**
 * Cette fonction demande à l'utilisateur de choisir entre "mots" et "phrases" et retourne le choix de l'utilisateur
 * @return {string} : le choix de l'utilisateur, ce choix est nécessairement "mots" ou "phrases
 */
/*function chooseSentencesOrWords() {
  // Tant que l'utilisateur n'a pas saisi "mots" ou "phrases", on lui redemande de saisir un choix
  let choice = prompt(
    "Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?"
  );
  while (choice !== "mots" && choice !== "phrases") {
    choice = prompt(
      "Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?"
    );
  }
  return choice;
}*/

/**
 * Cette fonction lance la boucle de jeu, c'est à dire qu'elle demande à l'utilisateur de saisir tous les mots
 * contenus dans le tableau listOfSuggestedWords. A chaque mot saisi, on incrémente le score de l'utilisateur
 *
 * @param {array[string]} listOfSuggestedWords
 * @return {number} : le score de l'utilisateur
 */
//function loopStartGame(listOfSuggestedWords) {
//let result = 0;
//for (let i = 0; i < listOfSuggestedWords.length; i++) {
// On demande à l'utilisateur de saisir le mot correspondant à l'indice i
/*let userWord = prompt("Entrez le mot : " + listOfSuggestedWords[i]);
    if (userWord === listOfSuggestedWords[i]) {*/
// Si le mot saisi par l'utilisateur est correct, on incrémente le score
//console.log("Bravo, vous avez correctement tapé le mot");
//result++;
//}
//}
//return result;
//}

/**
 * Fonction qui va prendre en paramétre le mot à afficher et afficher ce mot dans la div zoneProposition
 */
function showWords(htmlSuggestedWord) {
  //Je récupére la zone de propositions de mots dans le html
  let suggestedWord = document.querySelector(".zoneProposition");
  suggestedWord.innerText = htmlSuggestedWord;
}

/**
 * Cette fonction lance le jeu.
 * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
 */
function startGame() {
  //Je met un index par définition à 0.
  let i = 0;

  //Je met un scrore à 0
  let score = 0;

  //Je choisis si c'est un mot ou une phrase

  //Je récupére l'input ou l'on écrit quelque chose
  let userWord = document.getElementById("inputEcriture");

  //Je valide ensuite grace au bouton valider btnValidateWord
  let btnValidateWord = document.getElementById("btnValidateWord");

  showWords(wordsList[i]);

  btnValidateWord.addEventListener("click", () => {
    //J'affiche le mot que j'ai tapé
    console.log(userWord.value);
    console.log(wordsList[i]);
    //Si les 2 mots correspondent ensembles
    if (userWord.value === wordsList[i]) {
      score++;
      console.log(score);
      showResult(score, wordsList.length);
    }
    //J'augmente l'index de 1 a chaque fois que je clique
    i++;
    userWord.value = "";
    if (wordsList[i] === undefined) {
      console.log("fin du jeu");
      let endOfGame = "fin du jeu";
      showWords(endOfGame);
      btnValidateWord.disabled = true;
    } else {
      showWords(wordsList[i]);
    }
  });
}
//Si le mot proposé correspond au mot que j'ai écrit, je continue à afficher un nouveau mot dans la zone proposition
/*if (userWord.value === words) {
      console.log("je passe la");*/
//J'obtient la valeur de ce que j'ai écrit dans l'input
//}
//});
// Initialisations
//let choice = chooseSentencesOrWords();
//let result = 0;
//let numberOfSuggestedWords = 0;

// On détermine la liste des mots ou des phrases à proposer à l'utilisateur
//if (choice === "mots") {
/*result = loopStartGame(wordsList);
    numberOfSuggestedWords = wordsList.length;*/
//} /*else {
//result = loopStartGame(sentencesList);
//numberOfSuggestedWords = sentencesList.length;

//showResult(result, numberOfSuggestedWords);

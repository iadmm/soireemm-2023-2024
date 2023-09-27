const QUOTES = [
  {
    text: "C'est pas demain la veille que Blender remplacera Maya.",
    author: "Salvatore Bordonaro",
  },
  {
    text: "Avec l'âge on grandit moins, sauf de la prostate.",
    author: "Jérôme Coupé",
  },
  {
    text: "Les rendus sont rarement un long fleuve tranquille.",
    author: "Fabrice Laroche",
  },
  {
    text: "Je suis sûr d'une chose: la télévision, c'est mort !",
    author: "Christophe Pesesse",
  },
  {
    text: "On ne peut jamais tout règler en post-production.",
    author: "Caroline Voglaire",
  },
  {
    text: "C'est décidé, je partirai dans une belle explosion.",
    author: "Damien Welsh",
  },
  {
    text: "Les ours, les ours ... et le cerf de nos Ardennes alors ?",
    author: "Sylvia Minnaert",
  },
];

function init() {
  const quoteText = document.querySelector(".js-quote-text");
  console.log(quoteText);
  const quoteAuthor = document.querySelector(".js-quote-author");
  console.log(quoteAuthor);

  const randomQuote = QUOTES[Math.floor(Math.random() * QUOTES.length)];

  quoteText.textContent = randomQuote.text;
  quoteAuthor.textContent = randomQuote.author;
}

export { init };

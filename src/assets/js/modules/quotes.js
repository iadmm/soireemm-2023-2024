const QUOTES = [
  {
    text: "C'est pas demain la veille que Blender remplacera Maya",
    author: "Salvatore Bordonaro",
  },
  {
    text: "Avec l'âge on grandit moins, sauf de la prostate",
    author: "Jérôme Coupé",
  },
  {
    text: "Old age is not for Sissies",
    author: "Beth Davis",
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

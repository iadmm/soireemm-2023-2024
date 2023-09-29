const QUOTES = [
  {
    text: "C'est pas demain que Blender remplacera Maya.",
    author: "Salvatore Bordonaro",
  },
  {
    text: "Mon début d'arthrose n'aide pas pour le speed coding.",
    author: "Jérôme Coupé",
  },
  {
    text: "Les rendus sont rarement un long fleuve tranquille.",
    author: "Fabrice Laroche",
  },
  {
    text: "Je suis sûr d'une chose: la télévision, c'est mort.",
    author: "Christophe Pesesse",
  },
  {
    text: "La post-production a ses limites, moi aussi.",
    author: "Caroline Voglaire",
  },
  {
    text: "C'est décidé, je partirai dans une belle explosion.",
    author: "Damien Welsh",
  },
  {
    text: "Duik Angela, c'est clairement de la balle!",
    author: "Claire Pineux",
  },
  {
    text: "Les ours, les ours ... et le cerf de nos Ardennes alors?",
    author: "Sylvia Minnaert",
  },
  {
    text: "Le web sera créatif ou ne sera pas.",
    author: "Julien Moreau",
  },
  {
    text: "Non, Houdini n'est pas un soft de compta ...",
    author: "Thomas Scourneau",
  },
  {
    text: "J'ai vu de la lumière, du coup je suis rentré.",
    author: "Romain Martin",
  },
  {
    text: "Pas de tablette graphique? Pas de cara design.",
    author: "Olivier Senny",
  },
  {
    text: "Cette année c'est clair, je reprends le CBD.",
    author: "Rémi Vandenitte",
  },
  {
    text: "Un storyboard c'est comme un lacquemant, ça se fignole.",
    author: "Pierre Neira",
  },
  {
    text: "Vous n'avez pas les bases.",
    author: "Fabian Andry",
  },
  {
    text: "L'objet Jeremy a une propriété couleur de cheveux.",
    author: "Thomas Henrion",
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

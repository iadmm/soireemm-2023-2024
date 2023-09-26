const sponsors = [
  {
    company: "Sowalfin",
    logo: "sowalfin.png",
    url: "https://www.sowalfin.be",
  },
  {
    logo: "club.png",
    company: "Le Club",
    url: "https://www.iad-arts.be",
  },
  {
    logo: "iad.png",
    company: "Institut des Arts de Diffusion",
    url: "https://www.iad-arts.be",
  },
  {
    logo: "wallonie-entreprendre.png",
    company: "Wallonie Entreprendre",
    url: "https://www.wallonie-entreprendre.be/",
  },
];

module.exports = sponsors.sort((a, b) => {
  return a.company.toLowerCase().localeCompare(b.company.toLowerCase(), "fr");
});

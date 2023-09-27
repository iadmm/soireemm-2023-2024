const sponsors = [
  {
    logo: "logo_sowalfin.png",
    company: "Sowalfin",
    url: "https://www.sowalfin.be",
  },
  {
    logo: "logo_club.png",
    company: "Le Club",
    url: "https://www.iad-arts.be",
  },
  {
    logo: "logo_iad.png",
    company: "Institut des Arts de Diffusion",
    url: "https://www.iad-arts.be",
  },
  {
    logo: "logo_we.png",
    company: "Wallonie Entreprendre",
    url: "https://www.wallonie-entreprendre.be/",
  },
];

module.exports = sponsors.sort((a, b) => {
  return a.company.toLowerCase().localeCompare(b.company.toLowerCase(), "fr");
});

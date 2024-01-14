const dateOptions = {
  dateStyle: 'long',
  timeZone: 'Europe/Paris',
};
const dateFormat = (date) => new Intl.DateTimeFormat('fr-FR', dateOptions).format(date);

const shuffle = (array) => { 
  // https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript/
  for (let i = array.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]]; 
  } 
  return array; 
}; 

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("site/assets");
  eleventyConfig.addPassthroughCopy("site/favicon.ico");

  eleventyConfig.addShortcode(
    "liste",
    (collection) => {
      const shuffled_collection = shuffle(collection);
      return `<section class="liste">
${shuffled_collection.map(item => {
  return `
  <article style="--hue: ${ item.data.couleur ?? '0' }deg;">
    <h3>${ item.data.titre }</h3>
    <p>
      <span class="adresse">${ item.data.adresse.replace(/^https?:\/\//, '') }</span>
      <small>Ajouté le ${ dateFormat(item.date) }</small><br>
      <small>Mis à jour le ${ dateFormat(item.data.update) }</small>
    </p>
    <span aria-hidden class="emoji">${ item.data.emoji }</span>
    <a href="${ item.data.adresse }" rel="nofollow">
      <span class="sr-only">Visiter ${ item.data.adresse.replace(/^https?:\/\//, '') }</span>
    </a>
  </article>`}).join('')}
</section>
`;});
};
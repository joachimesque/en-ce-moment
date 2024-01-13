const dateOptions = {
  dateStyle: 'long',
  timeZone: 'Europe/Paris',
};
const dateFormat = (date) => new Intl.DateTimeFormat('fr-FR', dateOptions).format(date);

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("site/assets");

  eleventyConfig.addShortcode(
    "liste",
    (collection) => {
      return `<section class="liste">
${collection.map(item => {
  return `
  <article>
    <h3>${ item.data.titre }</h3>
    <p>
      <span class="text-underline">${ item.data.adresse.replace(/^https?:\/\//, '') }</span><br>
      <small>Ajouté le ${ dateFormat(item.date) }</small><br>
      <small>Mis à jour le ${ dateFormat(item.data.update) }</small>
    </p>
    <a href="${ item.data.adresse }" rel="nofollow">
      <span class="sr-only">Visiter ${ item.data.adresse.replace(/^https?:\/\//, '') }</span>
    </a>
  </article>`}).join('')}
</section>
`;});
};
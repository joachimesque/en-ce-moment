const dateOptions = {
  dateStyle: 'long',
  timeZone: 'Europe/Paris',
};
const dateFormat = (date) => new Intl.DateTimeFormat('fr-FR', dateOptions).format(date);

module.exports = function(eleventyConfig) {
  eleventyConfig.addShortcode(
    "liste",
    (collection) => {
      return `<section>
${collection.map(item => {
  return `
  <article>
    <h3>${ item.data.titre }</h3>
    <p>
      ${ item.data.adresse.replace(/^https?:\/\//, '') }<br>
      Ajouté le ${ dateFormat(item.date) }<br>
      Mis à jour le ${ dateFormat(item.data.update) }
    </p>
    <a href="${ item.data.adresse }" rel="nofollow">
      <span class="sr-only">Visiter ${ item.data.adresse.replace(/^https?:\/\//, '') }</span>
    </a>
  </article>`}).join('')}
</section>
`;});
};
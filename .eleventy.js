const pluginRss = require("@11ty/eleventy-plugin-rss");

const dateOptions = {
  dateStyle: 'short',
  timeZone: 'Europe/Paris',
};
const dateFormat = (date) => new Intl.DateTimeFormat('fr-FR', dateOptions).format(date);

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("site/assets");
  eleventyConfig.addPassthroughCopy("site/favicon.ico");

  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addCollection("dateSortedLinks", function(collectionApi) {
    // get unsorted items
    const all = collectionApi.getAll().sort((a, b) => {
      console.log(a.date.getTime(), a.data.update?.getTime(),  Math.max(a.date.getTime(), a.data.update?.getTime()))
      const aDate = Math.max(a.date.getTime(), a.data.update?.getTime() ?? 0);
      const bDate = Math.max(b.date.getTime(), b.data.update?.getTime() ?? 0);
      return bDate - aDate;
    });
    return all;
  });

  eleventyConfig.addShortcode(
    "liste",
    (collection) => {
      return `<section class="liste">
${collection.map(item => {
  return `
  <article style="--hue: ${ item.data.couleur ?? '0' }deg;" ${!!item.data.lang ? `lang="${item.data.lang}"` : ''}>
    <h3>
      ${ item.data.titre } ${ item.data.lang == 'en' ? '<small>(in English)</small>' : ''}
    </h3>
    <p>
      <span class="adresse">${ item.data.adresse.replace(/^https?:\/\//, '') }</span>
      <small>
        Ajouté le ${ dateFormat(item.date) }${ !!item.data.update
          ? `, mis à jour le ${ dateFormat(item.data.update) }`
          : ""
        }
      </small>
    </p>
    <span aria-hidden class="emoji">${ item.data.emoji }</span>
    <a href="${ item.data.adresse }" rel="nofollow" ${!!item.data.lang ? `hreflang="${item.data.lang}"` : ''}>
      <span class="sr-only">Visiter ${ item.data.adresse.replace(/^https?:\/\//, '') }</span>
    </a>
  </article>`}).join('')}
</section>
`;});
};
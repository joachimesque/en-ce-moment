const { readdir, readFile, writeFile } = require("fs/promises");
const path = require("path");
const matter = require("gray-matter");
const { stringify } = require("yaml");
const HTMLParser = require("node-html-parser");

const linksDir = path.join(__dirname, "..", "site", "links");

function getTimeFromHtml(html) {
  const root = HTMLParser.parse(html);

  // These elements are unique
  const metaOg = root
    .querySelector('[property="og:updated_time"]')
    ?.getAttribute("content");
  const metaDm = root
    .querySelector('[itemprop="dateModified"]')
    ?.getAttribute("content");
  const metaArticle = root
    .querySelector('[property="article:modified_time"]')
    ?.getAttribute("content");

  // There might be multiple elements containting
  // a date or datetime attribute
  const dateAttr = root
    .querySelectorAll("[date]")
    .map((item) => {
      return item.getAttribute("date");
    })
    ?.sort()
    .reverse()[0];
  const datetimeAttr = root
    .querySelectorAll("[datetime]")
    .map((item) => {
      return item.getAttribute("datetime");
    })
    ?.sort()
    .reverse()[0];

  return [
    new Date(metaOg).getTime(),
    new Date(metaDm).getTime(),
    new Date(metaArticle).getTime(),
    new Date(dateAttr).getTime(),
    new Date(datetimeAttr).getTime(),
  ]
    .filter(Boolean)
    .sort()
    .reverse()[0];
}

async function getPage(adresse) {
  return await fetch(adresse, { method: "GET" })
    .then(function (response) {
      if (response.status != 200) {
        throw new Error(response.status);
      }

      return response.text();
    })
    .then(function (html) {
      return getTimeFromHtml(html);
    })
    .catch(function (err) {
      console.warn("Something went wrong.", err);
      throw new Error(err);
    });
}

async function updateFrontMatter(filename) {
  const filepath = path.join(linksDir, filename);

  const { data: frontMatter, content } = matter(await readFile(filepath));

  let update;

  try {
    update = await getPage(frontMatter.adresse);
  } catch ({ message }) {
    console.warn(message);
    frontMatter.problem = message;
    frontMatter.problemDate = new Date(Date.now());

    if (!frontMatter.problemTries) {
      frontMatter.problemTries = 0;
    }
    frontMatter.problemTries += 1;
  }

  let check = " ";

  if (!!update) {
    frontMatter.update = new Date(update);
    check = "✓";
  }

  const newContent = `---\n${stringify(frontMatter)}---\n${content}`;

  await writeFile(filepath, newContent);

  console.log(`- [${check}] ${filepath}`);
}

async function main() {
  const filenames = await readdir(linksDir);
  const markdownFilenames = filenames.filter((f) => f.endsWith(".md"));

  await Promise.all(markdownFilenames.map(updateFrontMatter));
}

main().catch(console.error);

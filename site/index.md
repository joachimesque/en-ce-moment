---
title: En ce moment…
layout: layouts/index.njk
eleventyExcludeFromCollections: true
---

# <span aria-hidden>🕰</span> En ce moment

Cette page web recense des pages “En ce moment” ou <span lang="en">“Now”</span>, à travers le web francophone.

Le concept de <span lang="en">“now page”</span> a été initié par <a href="https://sive.rs/nowff" rel="nofollow" hreflang="en">Derek Sivers</a> en 2015. Le concept est simple : alors qu’une page “À propos” renseigne des informations générales sur la personne qui entretient le site, la page “En ce moment” apporte des précisions sur ce qui se passe actuellement dans sa vie.

Comme le dit la page <a href="https://nownownow.com/about" rel="nofollow" hreflang="en">nownownow.com/about</a>, pensez à <strong>ce que vous diriez à un ami que vous n’avez pas vu depuis un an</strong>.

## Liste

{% liste collections.all %}

## Ajouter ma page “En ce moment”

L’ajout de ta page “En ce moment” dans la liste peut se faire via GitHub, ou par message à <a href="https://boitam.eu/@joachim">@joachim@boitam.eu</a> sur le web social ouvert (sur Mastodon, quoi).

### GitHub

Pour contribuer une nouvelle adresse, il faut créer un fichier dans `site/links`. Ce fichier doit avoir un nom unique, je recommande le domaine ou sous-domaine du lien, et avoir pour extension `.md`.

Le contenu du fichier suivre la structure suivante :

```
---
adresse: <url de la page En ce moment>
titre: <titre de la page>
update: <date de la dernière mise à jour, au format année-mois-jour>
---
```

Par exemple :

```
---
adresse: https://blog.professeurjoachim.com/en-ce-moment
titre: 🪴 En ce moment — blog.professeurjoachim.com
update: 2024-01-13
---
```

Une fois ce fichier édité, il faut ouvrir une Pull Request, que je vérifierai puis mergerai. Évidemment, il n’est pas permis de modifier sans permission les fichiers d’autres sites que le sien.

## Webring

À venir.

Comme dans les années 90, un petit bout de script JS sera disponible pour chaque membre de la liste, qui affichera des liens vers cette page, vers les pages précédentes et suivantes de la liste, et une page au hasard.

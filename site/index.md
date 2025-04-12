---
title: En ce moment
layout: layouts/index.njk
eleventyExcludeFromCollections: true
---

# <span aria-hidden>🕰</span> En ce moment

Cette page web recense des pages “En ce moment” (ou <span lang="en">“now pages”</span>), à travers le web francophone.

Le concept de <span lang="en">“now page”</span> a été initié par <a href="https://sive.rs/nowff" rel="nofollow" hreflang="en">Derek Sivers</a> en 2015. Ce concept est simple : alors qu’une page “À propos” renseigne des informations générales sur la personne qui entretient le site, la page “En ce moment” apporte des précisions sur ce qui se passe actuellement dans sa vie.

Comme le dit la page <a href="https://nownownow.com/about" rel="nofollow" hreflang="en">nownownow.com/about</a>, pensez à <strong>ce que vous diriez à un ami que vous n’avez pas vu depuis un an</strong>.

## Liste

{% liste collections.dateSortedLinks %}

## Ajouter ma page “En ce moment”

L’ajout de ta page “En ce moment” dans la liste peut se faire via GitHub, ou par message à <a href="https://boitam.eu/@joachim">@joachim@boitam.eu</a> sur le web social ouvert (sur Mastodon, quoi). Il faudra renseigner une adresse et un titre pour le lien vers ta page, et un emoji et une nuance de couleur pour faire joli dans la liste.   
La nuance de couleur se note en degrés, de `0` à `360`, en fonction de sa position sur la roue des couleurs. Pour trouver une nuance, l’outil <https://paletton.com> peut être utile (voir la valeur de `hue`).

### GitHub

Pour contribuer une nouvelle adresse, il faut créer un fichier dans `site/links`, par exemple <a href="https://github.com/joachimesque/en-ce-moment/new/main/site/links" rel="nofollow noopener noreferer">en suivant ce lien</a>. Ce fichier doit avoir un nom unique, je recommande le domaine ou sous-domaine du lien, et il doit avoir pour extension `.md`.

Le contenu du fichier suivre la structure suivante :

```
---
emoji: <un emoji>
couleur: <une nuance de couleur (voir plus haut)>
adresse: <url de la page>
titre: <titre de la page>
---
```

Par exemple :

```
---
emoji: 🪴
couleur: 200
adresse: https://fourbi.eu/en-ce-moment
titre: En ce moment — le carnet de Joachim
---
```

Une fois ce fichier édité, il faut ouvrir une Pull Request, que je vérifierai puis mergerai. Évidemment, il n’est pas permis de modifier sans permission les fichiers d’autres sites que le sien.

## Webring

Comme dans les années 90 un petit bout de script JS est disponible pour les membres de la liste, il affiche sur ton site des liens vers cette page, vers les pages précédentes et suivantes de la liste, et une page au hasard.

### Comment l’afficher ?   

Il faut charger sur ta page le script hébergé sur ce serveur, et poser la balise `<now-webring>` qui affichera les liens à l’aide du script. Il est possible de poser la balise de chargement du script à un autre endroit de la page (ça dépend de ce que ton CMS te propose).

```html
<script type="text/javascript" src="https://encemoment.site/script.js"></script>
<now-webring><a href="https://encemoment.site">Découvrez le Webring “En ce moment”</a></now-webring>
```

Il n’est pas recommandé de copier le contenu du `script.js` pour l’exécuter sur la page même, mais ça peut  se faire si vous avez des soucis d’autorisation (par exemple avec les CORS). En revanche sa liste ne sera pas à jour.

Ce script ne dépose pas de cookies et ne tracera pas les gens qui visitent ta page. Son code est visible à l’adresse [script.js](./script.js).

#### Styles custom

Pour ajouter des styles aux éléments du composant, il faut utiliser le sélecteur `::part()`, de la manière suivante :

```css
now-webring::part(a) {
  color: rebeccapurple;
}
```

Les éléments suivants sont directement sélectionnables :

- `now-webring::part(wrapper)` (pour le conteneur)
- `now-webring::part(p)` pour le bout de texte
- `now-webring::part(a)` pour les liens
- `now-webring::part(strong)`
- `now-webring::part(span)`

Prévenez-moi si ça marche pas !

## Affichage de la dernière mise à jour

Le site met à jour automagiquement la date de dernière mise à jour de chaque page.

Pour ça il fait faire une visite quotidienne par un petit script, qui va lire la page, essayer de voir s’il y a des informations de date, et renseigner cette date pour chacun des lien.

La détection de la date se fait via des balises et attributs présents sur la page.   

Notamment les balises meta suivantes :

- `property="og:updated_time"`
- `itemprop="dateModified"`
- `property="article:modified_time"`

Ainsi que les balises `<time>` ou `<date>` qui ont des attribut `datetime` ou `date` ayant des dates valides.

Si ton site est dans la liste mais qu’il ne montre pas sa date de dernière mise à jour, il faut que tu voies avec ton CMS ou ton thème si tu peux avoir ces balises `meta`, ou `time` ou `date`.

Et si ça ne fonctionne pas, on peut en parler : <a href="https://boitam.eu/@joachim">@joachim@boitam.eu</a> ou <a href="mailto:joachim@encemoment.site">joachim@encemoment.site</a>.

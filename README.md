# En ce moment

**Répertoire francophone de “now pages”, ou pages “En ce moment”**

<https://encemoment.site/>

## Ajouter ma page “En ce moment”

L’ajout de ta page “En ce moment” dans la liste peut se faire via GitHub, ou par message à <a href="https://boitam.eu/@joachim">@joachim@boitam.eu</a> sur le web social ouvert (sur Mastodon, quoi).

### GitHub

Pour contribuer une nouvelle adresse, il faut créer un fichier dans `site/links`, par exemple <a href="https://github.com/joachimesque/en-ce-moment/new/main/site/links" rel="nofollow noopener noreferer">en suivant ce lien</a>. Ce fichier doit avoir un nom unique, je recommande le domaine ou sous-domaine du lien, et avoir pour extension `.md`.

Le contenu du fichier suivre la structure suivante :

```
---
emoji: <un emoji au choix>
couleur: <une nuance de couleur (1)>
adresse: <url de la page En ce moment>
titre: <titre de la page>
---
```

Par exemple :

```
---
emoji: 🪴
couleur: 200
adresse: https://blog.professeurjoachim.com/en-ce-moment
titre: En ce moment — le carnet de Joachim
---
```

Une fois ce fichier édité, il faut ouvrir une Pull Request, que je vérifierai puis mergerai. Évidemment, il n’est pas permis de modifier sans permission les fichiers d’autres sites que le sien.

#### Notes

1. La nuance de couleur se note en degrés, de `0` à `360`, en fonction de sa position sur la roue des couleurs. Pour trouver une nuance, l’outil <https://paletton.com> peut être utile (voir la valeur de `hue`).

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

Et si ça ne fonctionne pas, n’hésite pas à ouvrir une issue.

## Licence

Le code est distribué sous license libre GNU AGPL.

Le fichier de typographie inclus est <a href="https://github.com/Etcetera-Type-Co/Trispace">© 2020 Tyler Fink et ses contributeur·ices</a>, distribué sous licence OFL. Voir `site/assets/fonts/OFL.txt`.

L’emoji utilisé pour la favicon et l’image OpenGraph est tiré de la collection Twemoji <a href="https://twemoji.twitter.com/">© 2020 Twitter, Inc et autres contributeur·ices</a>, disponible sous licence <a href="https://creativecommons.org/licenses/by/4.0/">CC-BY 4.0</a>. Ces deux images du projet sont partagées sous la même licence <a href="https://creativecommons.org/licenses/by/4.0/">CC-BY 4.0</a>.

# MDX Forge 1.3

Bienvenue sur MDX Forge, un template Astro en français, rapide et facile à configurer.

**Documentation en cours de rédaction**

![MDX Forge](/MDXForge-og.jpg)

## Bien démarrer
Vous trouverez les fichiers principaux dans le dossier src/config

`siteconfig.ts` : configuration du site
`header-footer.ts` : configuration de la navigation

Vous pourrez configurer la navigation, vos informations générales, la bio de l'auteur, les polices de caractères, etc. dans ces deux fichiers.

Il suffit de modifier les fichiers dans le dossier src/config pour pouvoir commencer à personnaliser votre site.

## Images

Les images sont dans le dossier /public. Chaque fois que vous référencez une image, si elle est à la racine du dossier public utilisez seulement /image.jpg
Si elle est dans un sous dossier, utilisez le chemin /sous-dossier/image.jpg

## Les dépendances ajoutées au Astro de base

- astro mdx
- astro sitemap
- astro react
- astro compressor
- astro robots.txt
- astrojs/rss
- shadcn/ui
- fontawesome

## 🧞 Commandes

Toutes les commandes sont exécutées depuis la racine du projet, dans un terminal :

| Commande                  | Action                                                    |
| :------------------------ | :-------------------------------------------------------- |
| `npm install`             | Installe les dépendances                                  |
| `npm run dev`             | Démarre le serveur de développement local sur `localhost:4321` |
| `npm run build`           | Construit votre site de production dans `./dist/`         |
| `npm run preview`         | Prévisualisez votre build localement, avant le déploiement |
| `npm run astro ...`       | Exécute les commandes CLI comme `astro add`, `astro check` |
| `npm run astro -- --help` | Obtient de l'aide sur l'utilisation de l'CLI Astro        |

## 👀 Vous voulez en savoir plus sur Astro ?

N'hésitez pas à consulter [la documentation officielle](https://docs.astro.build) ou à rejoindre le [serveur Discord Astro](https://astro.build/chat).

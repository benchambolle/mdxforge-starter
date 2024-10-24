import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteConfig } from '../config/siteconfig';

export async function GET(context) {
  const posts = await getCollection('blog');
  return rss({
    title: siteConfig.siteName,
    description: siteConfig.siteDescription,
    site: siteConfig.siteUrl,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `${siteConfig.siteUrl}/blog/${post.slug}/`,
    })),
    customData: `<language>fr-fr</language>`,
  });
}

import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/studio/'],
    },
    sitemap: 'https://ict.net.pk/sitemap.xml',
  }
}
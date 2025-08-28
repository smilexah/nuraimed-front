/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://di-clinic.kz',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/api/*', '/admin/*'],
  alternateRefs: [
    {
      href: 'https://di-clinic.kz/ru',
      hreflang: 'ru',
    },
    {
      href: 'https://di-clinic.kz/kk',
      hreflang: 'kk',
    },
  ],
  transform: async (config, path) => {
    // Настройка приоритетов для разных страниц
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.includes('/specialists') || path.includes('/department')) {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path.includes('/about-us') || path.includes('/contact')) {
      priority = 0.6;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    additionalSitemaps: [
      'https://di-clinic.kz/sitemap.xml',
    ],
  },
};

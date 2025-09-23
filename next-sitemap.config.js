/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.logisticaecoandes.com", // sin slash final
  generateRobotsTxt: true, // genera robots.txt automáticamente
  sitemapSize: 5000, // opcional, por si tuvieras muchísimas URLs
  changefreq: "weekly", // sugerencia para Google
  priority: 0.7,        // prioridad por defecto
};

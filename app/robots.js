export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/status"],
      },
    ],
    sitemap: "https://www.chimakonveksi.my.id/sitemap.xml",
  };
}

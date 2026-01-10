export default function robots() {
    return {
      rules: [
        {
          userAgent: "*",
          allow: "/",
        },
      ],
      sitemap: "https://agencia-gl.vercel.app/sitemap.xml",
    };
  }
  
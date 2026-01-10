export default function sitemap() {
    const baseUrl = "https://agencia-gl.vercel.app";
  
    return [
      {
        url: `${baseUrl}/`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 1,
      },
    ];
  }
  
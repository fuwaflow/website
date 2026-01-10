const pages = Object.entries(
  import.meta.glob("/src/pages/*.astro", { eager: true }),
)
  .map(([path, mod]) => {
    const file = path
      .split("/")
      .pop()
      .replace(/\.(astro|md|mdx)$/, "");

    const url = file === "index" ? "/" : `/${file}`;

    const title = file === "index" ? "home" : (mod.frontmatter?.title ?? file);

    return {
      url,
      title,
    };
  })
  .sort((a, b) => a.url.localeCompare(b.url));

export { pages };

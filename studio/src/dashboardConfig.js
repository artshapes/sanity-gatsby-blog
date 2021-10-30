export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "617cf7269159be8b2de8ac72",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-4xtzbgzv",
                  apiId: "73e04fc7-42c7-4d71-829a-0677ad58f669",
                },
                {
                  buildHookId: "617cf7269159be9acde8aa32",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-ivx3pfjg",
                  apiId: "b8ebc8f3-1372-4b6f-80b2-24fdf84aba15",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/artshapes/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-ivx3pfjg.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};

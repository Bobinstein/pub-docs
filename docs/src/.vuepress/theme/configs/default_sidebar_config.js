module.exports = [
  {
    title: "Core-js",
    path: "/docs/core-sdk",
  },
  {
    title: "CLI",
    initialOpenGroupIndex: -1,
    collapsable: true,
    children: [
      {
        title: "Overview",
        path: "/docs/cli/intro",
      },
      {
        title: "Getting Started",
        path: "/docs/cli/getting-started",
      },
      {
        title: "Using the CLI",
        path: "/docs/cli/using-the-cli",
      },
      {
        title: "All Commands",
        path: "/docs/cli/all-commands",
      },
      {
        title: "Help",
        path: "/docs/cli/getting-help",
      },
    ],
  },
  {
    title: "ArFS",
    initialOpenGroupIndex: -1,
    children: [
      {
        title: "Overview",
        path: "/docs/arfs/overview",
      },
      {
        title: "Data Model",
        path: "/docs/arfs/data-model",
      },
      {
        title: "Entity Types",
        path: "/docs/arfs/entity-types",
      },
      {
        title: "Content Types",
        path: "/docs/arfs/content-types",
      },
      {
        title: "Privacy",
        path: "/docs/arfs/privacy",
      },
      {
        title: "Usage",
        children: [
          {
            title: "Create",
            children: [
              {
                title: "Create Drive",
                path: "/docs/arfs/usage/create/create-drive",
              },
              {
                title: "Create Folder",
                path: "/docs/arfs/usage/create/create-folder",
              },
              {
                title: "Create File",
                path: "/docs/arfs/usage/create/create-file",
              },
            ],
          },
          {
            title: "Modify",
            children: [
              {
                title: "Modify Drives",
                path: "/docs/arfs/usage/change/drives",
              },
              {
                title: "Modify Folders",
                path: "/docs/arfs/usage/change/folders",
              },
              {
                title: "Modify Files",
                path: "/docs/arfs/usage/change/files",
              },
            ],
          },
          {
            title: "Read",
            path: "/docs/arfs/usage/read/read-operations",
          },
        ],
      },
    ],
  },
  {
    title: "Misc.",
    children: [
      {
        title: "Price Calculator",
        path: "/docs/price-calculator",
      },
    ],
  },
];

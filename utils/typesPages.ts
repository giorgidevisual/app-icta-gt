export type Pages = {
  id: string
  slug: string
  title: string
  content: string
};

export type PagesData = {
  pages: {
    nodes: Pages[];
  };
};



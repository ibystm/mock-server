interface Post {
  id: number;
  title: string;
  content: string;
  date: string;
  author: string;
}

export const POSTS: Post[] = [...Array(20)].map((_, index) => ({
  id: index,
  title: `これは${index}番目の投稿`,
  content: `これは${index}番目の投稿です。こちらを読んだ感想何かがあれば教えてください。よろしくお願いします。`,
  date: "2023-05-02",
  author: `Author${index}`,
}));

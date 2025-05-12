export type Chapter = {
  id: number;
  name: string;
  title: string;
};
export const chapter: Chapter[] = [
  { id: 1, name: "Chapter 1", title: "New Life" },
];

export const updateChapter = (updateChapter: Chapter[]): void => {
  chapter.length = 0;
  chapter.push(...updateChapter);
};

export type Page = {
  id: number;
  content: string;
};

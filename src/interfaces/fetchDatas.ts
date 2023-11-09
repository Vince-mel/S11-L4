export default interface singleElement {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
  featured: false;
  launches: [];
  events: [];
}
export default interface mainFetch {
  count: number;
  next: string;
  previous: null;
  results: Array<singleElement>;
}

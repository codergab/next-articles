import { articles } from '../../../data';

export default function handler({ query: { id } }, res) {
  const filtered = articles.find((article) => article.id === id);
  if (!filtered) {
    return res.status(404).json({ message: `Article ${id} not found` });
  }
  res.status(200).json(filtered);
}

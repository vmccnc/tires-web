import React, { useEffect, useState } from 'react';
import { INews } from '../../interfaces/INews';
import { loadNews } from '../../dbRequests/tiresRequests';

const NewsList: React.FC = () => {
  const [news, setNews] = useState<INews[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsData = await loadNews();
        setNews(newsData);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Latest News</h1>
      {news.length > 0 ? (
        <ul>
          {news.map((item) => (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              {item.url && <a href={item.url} target="_blank" rel="noopener noreferrer">Read more</a>}
              <p><small>{new Date(item.createdDate).toLocaleDateString()}</small></p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No news available.</p>
      )}
    </div>
  );
};

export default NewsList;

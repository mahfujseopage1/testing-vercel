import { useEffect, useState } from 'react';

const ReactIframe = () => {
  const [htmlContent, setHtmlContent] = useState('');
  const url = 'https://seopage1.360elevate.co'; // Replace with the website URL

  useEffect(() => {
    const fetchWebsite = async () => {
      try {
        const response = await fetch(`http://localhost:5000/proxy?url=${encodeURIComponent(url)}`); // Replace with the website URL
        const html = await response.text();
        setHtmlContent(html);
      } catch (error) {
        console.error('Error fetching the website:', error);
      }
    };

    fetchWebsite();
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}

export default ReactIframe
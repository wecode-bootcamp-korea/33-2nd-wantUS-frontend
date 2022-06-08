import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GoogleCallback = () => {
  const location = useLocation();

  const authorizationCode = location.search.split('=')[1].split('&')[0];

  useEffect(() => {
    fetch(
      `http://10.58.7.25:8000/user/signin/google/callback?code=${authorizationCode}`,
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(result => {
        console.log(result);
      });
  }, []);

  return <div>Google callback</div>;
};

export default GoogleCallback;

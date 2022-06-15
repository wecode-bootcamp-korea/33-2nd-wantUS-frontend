import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const GoogleCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const authorizationCode = location.search.split('=')[1].split('&')[0];

  useEffect(() => {
    fetch(
      `http://10.58.3.196:8000/user/signin/google/callback?code=${authorizationCode}`,
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(result => {
        console.log(result);
        console.log(result.token);
        localStorage.setItem('token', result.token);
        navigate('/');
      });
  }, []);

  useEffect(() => {
    console.log('통신 테스트');
  }, []);

  return;
};

export default GoogleCallback;

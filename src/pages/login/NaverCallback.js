//import axios from 'axios';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
//import { callBackUrl, clientId, clientSecret, state } from './LoginData';
import { state } from './NaverLoginData';

const NaverCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location.search.split('=')[1].split('&')[0]);

  //const accessTokenRequestURL = `https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=${clientId}&client_secret=${clientSecret}&code=${authorizationCode}&state=${state}`;

  const authorizationCode = location.search.split('=')[1].split('&')[0];

  useEffect(() => {
    fetch(
      `http://10.58.7.25:8000/user/signin/naver/callback?code=${authorizationCode}&state=${state} `,
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(result => {
        console.log(result);
        navigate('/');
      });
  }, []);

  return <div>Naver callback</div>;
};

export default NaverCallback;

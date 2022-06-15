import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
const KakaoCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const authorizationCode = location.search.split('=')[1];

  // const getAuthorizationCode = () => {
  //   console.log(authorizationCode);
  // };

  useEffect(() => {
    fetch(
      `http://10.58.3.196:8000/user/signin/kakao/callback?code=${authorizationCode}`,
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

  return <div>Kakao callback</div>;
};

export default KakaoCallback;

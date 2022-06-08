import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const KakaoCallback = () => {
  const location = useLocation();

  const authorizationCode = location.search.split('=')[1];

  // const getAuthorizationCode = () => {
  //   console.log(authorizationCode);
  // };

  useEffect(() => {
    fetch(
      `http://10.58.7.25:8000/user/signin/kakao/callback?code=${authorizationCode}`,
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(result => {
        console.log(result);
      });
  }, []);

  // 토큰 저장 코드

  return <div>Kakao callback</div>;
};

export default KakaoCallback;

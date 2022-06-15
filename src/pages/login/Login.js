import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import { FaComment } from 'react-icons/fa';
import { TbLetterN } from 'react-icons/tb';
import { FcGoogle } from 'react-icons/fc';
import { SiNaver } from 'react-icons/si';
import {
  LoginContainer,
  Container,
  Head,
  Title,
  XIcon,
  Intro,
  IntroBold,
  IntroNormal,
  Email,
  EmailInput,
  EmailText,
  Select,
  SelectEmailButton,
  EmailIcon,
  SelectOtherText,
  Options,
  Kakao,
  KakaoIcon,
  KakaoText,
  Naver,
  NaverIcon,
  ReactNaverIcon,
  NaverText,
  Google,
  GoogleIcon,
  GoogleText,
} from './LoginStyleComponents';
import { callBackUrl, clientId, state } from './NaverLoginData';
import { REST_API_KEY, REDIRECT_URI } from './KakaoLoginData';
import {
  GOOGLE_CLIENT_ID,
  GOOGLE_REDIRECT_URI,
  GOOGLE_SCOPE,
} from './GoogleLoginData';

const Login = () => {
  const NaverAuthURL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=${callBackUrl}&state=${state}`;
  const KakaoAuthURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
  const GOOGLE_LOGIN_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=${GOOGLE_SCOPE}`;

  const handleKakaoLogin = () => {
    window.location.href = KakaoAuthURL;
  };

  const handleNaverLogin = () => {
    window.location.href = NaverAuthURL;
  };

  const handleGoogleLogin = () => {
    window.location.href = GOOGLE_LOGIN_URL;
  };

  return (
    <LoginContainer>
      <Container>
        <Head>
          <Title>Wanted</Title>
          <XIcon>
            <AiOutlineClose />
          </XIcon>
        </Head>

        <Intro>
          <IntroBold>
            직장인을 위한
            <br /> 커리어 플랫폼, 원티드!
          </IntroBold>
          <IntroNormal>
            커리어 성장과 행복을 위한 여정
            <br />
            지금 원티드에서 시작하세요.
          </IntroNormal>
        </Intro>
        <Email>
          <EmailText>이메일</EmailText>
          <EmailInput />
        </Email>
        <Select>
          <SelectEmailButton>
            <EmailIcon />
            이메일로 계속하기
          </SelectEmailButton>
          <SelectOtherText>
            or <br /> 다음 계정으로 계속하기
          </SelectOtherText>
        </Select>
        <Options>
          <Kakao onClick={handleKakaoLogin}>
            <KakaoIcon>
              <FaComment />
            </KakaoIcon>
            <KakaoText>Kakao</KakaoText>
          </Kakao>
          <Naver onClick={handleNaverLogin}>
            <NaverIcon>
              <ReactNaverIcon />
            </NaverIcon>
            <NaverText>Naver</NaverText>
          </Naver>
          <Google onClick={handleGoogleLogin}>
            <GoogleIcon>
              <FcGoogle />
            </GoogleIcon>
            <GoogleText>Google</GoogleText>
          </Google>
        </Options>
      </Container>
    </LoginContainer>
  );
};

export default Login;

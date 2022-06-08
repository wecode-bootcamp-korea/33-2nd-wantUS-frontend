import styled, { css } from 'styled-components';

const IconAndText = css`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.2rem;
`;

export const LoginContainer = styled.div`
  margin: auto;
  height: 100vh;
  width: 25rem;
  display: flex;
  align-items: center;
  overflow-y: auto;
  z-index: 5;
`;

export const Container = styled.div`
  width: 100%;
  border: 1px solid black;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Head = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 1rem;
`;

export const Title = styled.div`
  font-weight: bold;
`;

export const XIcon = styled.div`
  cursor: pointer;
  position: absolute;
  right: 1rem;
`;

export const Intro = styled.div`
  margin: 4rem 0 2.5rem;
  text-align: center;
  line-height: 1.5;
`;

export const IntroBold = styled.div`
  font-weight: bold;
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const IntroNormal = styled.div``;

export const Email = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const EmailText = styled.span`
  margin-bottom: 1rem;
`;

export const EmailInput = styled.input`
  padding: 1rem;
  font-size: 1.3rem;
  border-radius: 0.4rem;
  border-color: #999999;
  background-color: rgba(135, 206, 235, 0.2);
`;

export const Select = styled.div`
  margin: 1rem;
  width: 90%;
  text-align: center;
  line-height: 2rem;
`;

export const SelectEmailButton = styled.button`
  width: 100%;
  font-size: 1.2rem;
  border-radius: 2.5rem;
  border: none;
  background-color: #238bfe; // secondaryBlue
  color: white;
  padding: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #1f59fb; // primaryBlue
  }
`;

export const SelectOtherText = styled.div``;

export const Options = styled.div`
  width: 90%;
  height: 5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Kakao = styled.div`
  cursor: pointer;
`;

export const KakaoIcon = styled.div`
  background-color: yellow;
  ${IconAndText}
`;

export const KakaoText = styled.div`
  text-align: center;
  font-size: 0.8rem;
`;

export const Naver = styled.div`
  cursor: pointer;
`;

export const NaverIcon = styled.div`
  background-color: #3bda80;
  color: white;
  ${IconAndText}
`;

export const NaverText = styled.div`
  text-align: center;
  font-size: 0.8rem;
`;

export const Google = styled.div`
  cursor: pointer;
`;

export const GoogleIcon = styled.div`
  border: 0.1rem solid gray;
  ${IconAndText}
`;

export const GoogleText = styled.div`
  text-align: center;
  font-size: 0.8rem;
`;

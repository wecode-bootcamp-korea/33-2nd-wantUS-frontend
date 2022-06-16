import React from 'react';
import styled from 'styled-components';
import { AiOutlineInstagram } from '@react-icons/all-files/ai/AiOutlineInstagram';
import { AiFillYoutube } from '@react-icons/all-files/ai/AiFillYoutube';
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook';
import { RiGooglePlayFill } from '@react-icons/all-files/ri/RiGooglePlayFill';

const Footer = () => {
  return (
    <Wrapper>
      <FooterBox>
        <FooterContainer>
          <FooterTop>
            <FooterTopLeft>
              <img
                src="https://img4.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202108/12/kukinews/20210812102806613yney.jpg"
                alt="logo"
              />
              <TopMenu>
                <MenuList>기업소개</MenuList>
                <MenuList>이용약관</MenuList>
                <MenuList>개인정보 처리방침</MenuList>
                <MenuList>고객센터</MenuList>
              </TopMenu>
            </FooterTopLeft>
            <IconBox>
              <Icons>
                <AiOutlineInstagram />
              </Icons>
              <Icons>
                <AiFillYoutube />
              </Icons>
              <Icons>
                <FaFacebook />
              </Icons>
              <Icons>
                <RiGooglePlayFill />
              </Icons>
            </IconBox>
          </FooterTop>
          <FooterBottom>
            <BottomDescription>
              (주)원트어스 (대표이사:김정준) | 서울특별시 송파구 올림픽로 300
              롯데월드타워 35층 | 통신판매번호 : 2020-서울송파-3147 <br />
              유료직업소개사업등록번호 : (국내) 제2020-3230259-14-5-00018호 |
              (국외) 서울동부-유-2020-2 | 사업자등록번호 : 123-3413-34134 |
              02-123-4567 <br /> © WantUS, Inc.
            </BottomDescription>
          </FooterBottom>
        </FooterContainer>
      </FooterBox>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  height: 100%;
  min-height: 100%;
`;

const FooterBox = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  transform: translateY(-0%);
  width: 100vw;
  height: 200px;
  padding: 18px 0 65px;
  background-color: #fff;
  border-top: 1px solid #ececec;
`;

const FooterContainer = styled.div`
  width: 60%;
`;

const FooterTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #ececec;

  img {
    width: 100px;
  }
`;

const FooterTopLeft = styled.div`
  display: flex;
  align-items: center;
`;

const TopMenu = styled.div`
  display: flex;
`;

const MenuList = styled.div`
  margin: 0 20px;
  color: #3a3a3a;
  font-weight: 600;
  cursor: pointer;
`;

const IconBox = styled.div`
  display: flex;
  font-size: 30px;
`;

const Icons = styled.div`
  margin: 0 10px;
  color: gray;
  cursor: pointer;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 30px;
`;

const BottomDescription = styled.div`
  font-size: 12px;
  line-height: 18px;
  color: #3a3a3a;
`;

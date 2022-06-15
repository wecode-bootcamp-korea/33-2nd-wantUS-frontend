import HeaderCarousel from './HeaderCarousel';
import MidNavBar from './MidNavBar';
import LikedCarousel from './LikedCarousel';
import styled from 'styled-components';
const Main = () => {
  return (
    <>
      <HeaderMargin />
      <HeaderCarousel />
      <MidNavBar />
      <SideMargin>
        <Text>지금 바로 지원해볼까요?</Text>
        <LikedCarousel />
      </SideMargin>

      <SideMargin>
        <Text>wanted ai가 제안하는 합격률 높은 포지션</Text>
        <LikedCarousel />
      </SideMargin>
      <Text>일할만큼 받는 보상 회사들을 모아봤어요</Text>
      <SideMargin>
        <LikedCarousel />
      </SideMargin>
      <Text>퇴사율 10% 이하 회사들을 모아봐어요</Text>
      <SideMargin>
        <LikedCarousel />
      </SideMargin>
    </>
  );
};

const SideMargin = styled.div`
  margin: 0 20rem;
`;

const HeaderMargin = styled.div`
  margin-top: 2rem;
`;
const Text = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Fascinate&family=Lobster&display=swap');
  display: flex;
  justify-content: center;
  margin: 15rem 0 2rem;
  font-size: 2rem;
  font-family: 'Black Han Sans', sans-serif;
`;

export default Main;

// import { useEffect, useRef, useState } from 'react';

// const Main = () => {
//   const modalEl = useRef();
//   const [isOpen, setOpen] = useState(false);

//   const handleClickOutside = ({ target }) => {
//     if (isOpen && !modalEl.current.contains(target)) setOpen(false);
//   };

//   useEffect(() => {
//     window.addEventListener('click', handleClickOutside);
//     return () => {
//       window.removeEventListener('click', handleClickOutside);
//     };
//   }, []);

//   return (
//     <>
//       <div onClick={setOpen(true)}>test</div>
//       {isOpen && <div ref={modalEl}>asdf</div>}
//     </>
//   );
// };

// export default Main;

import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { FaSearch } from 'react-icons/fa';

const MidNavBar = () => {
  const navigate = useNavigate();

  const goToJoblist = () => {
    navigate('/joblist');
  };

  const goToMyProfile = () => {
    navigate('/');
  };

  return (
    <Bar>
      <EmployAnnouncement onClick={goToJoblist}>
        <SearchIcon />
        <div>채용공고</div>
      </EmployAnnouncement>
      <MyProfile>내 프로필</MyProfile>
    </Bar>
  );
};

const Bar = styled.div`
  display: flex;
  justify-content: center;
  width: 70%;
  margin: 10rem auto;
`;

const EmployAnnouncement = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  padding: 2rem 0;
  background-color: #c2dff9;
  border-radius: 3rem;

  font-size: 1.5rem;
  cursor: pointer;
`;
const SearchIcon = styled(FaSearch)`
  margin-right: 1rem;
`;
const MyProfile = styled(EmployAnnouncement)`
  background-color: #f7c8f1;
  margin-left: 1.5rem;
`;

export default MidNavBar;

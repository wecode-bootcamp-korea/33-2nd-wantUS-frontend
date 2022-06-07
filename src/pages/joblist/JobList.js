import styled from 'styled-components';
import Navbar from './components/Navbar';
import JobItemList from './components/JobItemList';

const JobList = () => {
  return (
    <MainContainer>
      <Navbar />
      <JobItemList />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default JobList;

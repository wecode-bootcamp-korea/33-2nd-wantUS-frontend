import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MainFilter from './MainFilter';
import SubFilter from './SubFilter';

const Navbar = () => {
  const [selectState, setSelectState] = useState({
    job: [],
    locations: [],
    years: [],
    skills: [],
    sort: [],
  });

  const navigate = useNavigate();

  // TODO: 서버와 통신 이후 주석 해제
  // 백엔드 엔드포인트에 전달할 queryparameter 구현부
  // const location = useLocation();
  // const queryParams = location.search;

  const selectHandler = useCallback((key, value) => {
    setSelectState(prevState => {
      return { ...prevState, [key]: value };
    });
  }, []);

  const queryCategory = {
    job: { string: '', length: 3 },
    locations: { string: '', length: 3 },
    years: { string: '', length: 2 },
    skills: { string: '', length: 4 },
  };

  for (let key in queryCategory) {
    queryCategory[key].string =
      selectState[key].length === 0 ||
      selectState[key].length === queryCategory[key].length
        ? `${key}=all`
        : selectState[key]
            .map(selectedItem => {
              return `${key}=` + selectedItem;
            })
            .join('&');
  }

  const queryForSort =
    selectState.sort.length === 0
      ? 'sort=latest'
      : selectState.sort
          .map(selectedItem => {
            return 'sort=' + selectedItem;
          })
          .join('&');

  const { job, locations, years, skills } = queryCategory;

  const myNavigate = useCallback(() => {
    navigate(
      `/jobList?${job.string}&${locations.string}&${years.string}&${skills.string}&${queryForSort}`
    );
  }, [
    navigate,
    job.string,
    locations.string,
    years.string,
    skills.string,
    queryForSort,
  ]);

  useEffect(() => {
    myNavigate();
  }, [myNavigate]);

  return (
    <Filterbar>
      <MainFilter selectHandler={selectHandler} />
      <SubFilter selectHandler={selectHandler} />
    </Filterbar>
  );
};

const Filterbar = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 175px;
  border-bottom: 2px solid ${({ theme }) => theme.borderColor};
  background-color: white;
  z-index: 10;
`;

export default Navbar;

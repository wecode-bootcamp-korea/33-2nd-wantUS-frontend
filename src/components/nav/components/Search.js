import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import useFetch from '../../../hooks/useFetch';

const Search = () => {
  const [itemList, setItemList] = useState([]);
  // TODO: 테스트 이후 아래 state 초기값 재설정
  const [isValidKeyword, setIsValidKeyword] = useState(false);

  const { httpRequest } = useFetch();

  const navigation = useNavigate();
  // TODO: 백엔드 엔드포인트 요청시 아래 변수 활용
  const location = useLocation();

  const goToDetail = id => {
    navigation(`/jobdetail/${id}`);
  };

  const likeHandler = id => {
    setItemList(prevState => {
      return [
        ...prevState.map(item => {
          if (item.id === id) {
            return { ...item, like: true };
          } else {
            return item;
          }
        }),
      ];
    });
  };

  // 좋아요 리스트 송부를 위한 기능
  // const likeItemList = itemList.filter(item => {
  //   return item.like;
  // });

  // console.log(likeItemList);

  const listHandler = data => {
    setItemList([
      ...data.map(item => {
        return {
          id: item.id,
          name: item.author,
          category: '프론트엔드 개발자',
          location: '서울',
          years: 2,
          like: false,
          url: item.download_url,
        };
      }),
    ]);
  };

  useEffect(() => {
    httpRequest(
      {
        // TODO: 아래 URL은 임시 URL로 서버 통신 이후 수정 할 것
        url: `https://picsum.photos/v2/list?page=1&limit=3`,
      },
      listHandler
    );
  }, [httpRequest]);

  useEffect(() => {
    if (itemList.length === 0) {
      setIsValidKeyword(false);
    } else {
      setIsValidKeyword(true);
    }
  }, [itemList]);

  return (
    <SearchResult>
      <SearchResultTitle>
        {decodeURI(location.search.split('=')[1])}
      </SearchResultTitle>
      <SearchResultSection>
        {!isValidKeyword && (
          <InvalidSearchResult>
            검색 내용과 일치하는 결과가 없습니다.
          </InvalidSearchResult>
        )}
        {isValidKeyword && (
          <SearchedResultList>
            <SearchedResultTitle>{`검색결과 ${itemList.length}`}</SearchedResultTitle>
            <SearchedResultItems>
              {itemList.map(item => (
                <SearchedResultItem
                  key={item.id}
                  onClick={() => {
                    goToDetail(item.id);
                  }}
                >
                  <ImgContainer>
                    <LogoImg src={item.url} />
                  </ImgContainer>
                  <TextContainer>
                    <CompanyName>{item.name}</CompanyName>
                    <CompanyCategory>IT, 개발</CompanyCategory>
                  </TextContainer>
                  <LikeButton
                    onClick={event => {
                      event.stopPropagation();
                      likeHandler(item.id);
                    }}
                  >
                    좋아요
                  </LikeButton>
                </SearchedResultItem>
              ))}
            </SearchedResultItems>
          </SearchedResultList>
        )}
      </SearchResultSection>
    </SearchResult>
  );
};

const SearchResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchResultTitle = styled.h1`
  width: 100%;
  height: 160px;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  text-align: center;
  line-height: 160px;
  font-size: 48px;
`;

const SearchResultSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(100vh - 160px);
  background-color: rgb(248, 248, 248);
  overflow: auto;
`;

const InvalidSearchResult = styled.div`
  margin-top: 50px;
  color: ${({ theme }) => theme.primaryBlue};
  font-size: 24px;
  font-weight: bold;
`;

const SearchedResultList = styled.div`
  width: 70%;
  padding: 20px 0;
`;

const SearchedResultTitle = styled.h2`
  margin: 40px 0 20px 0;
  font-size: 24px;
`;

const SearchedResultItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const SearchedResultItem = styled.div`
  display: flex;
  align-items: center;
  width: 47%;
  margin: 10px;
  padding: 20px;
  background-color: white;
  cursor: pointer;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  margin-right: 20px;
  overflow: hidden;
`;

//TODO : 이미지 url 확정 시 스타일 지정할 것
const LogoImg = styled.img`
  height: 60px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 60px;
`;

const CompanyName = styled.p`
  margin-bottom: 4px;
  font-size: 18px;
`;

const CompanyCategory = styled.p`
  color: ${({ theme }) => theme.fontGray};
  font-size: 14px;
`;

const LikeButton = styled.button`
  width: 100px;
  height: 40px;
  margin: 0 0 0 auto;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 20px;
  background-color: transparent;
  color: ${({ theme }) => theme.primaryBlue};
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme }) => theme.primaryBlue};
  }
`;

export default Search;

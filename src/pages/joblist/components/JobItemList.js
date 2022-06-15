import { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import JobItem from './JobItem';
import SkeletonUi from './SkeletonUI';
import useFetch from '../hooks/useFetch';

const JobItemList = () => {
  const [itemList, setItemList] = useState([]);
  const [newItemList, setNewItemList] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [renderNewItem, setRenderNewItem] = useState(true);

  const { httpRequest, error } = useFetch();

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

  const newListHandler = data => {
    setNewItemList([
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

  const limit = 12;

  useEffect(() => {
    if (page === 1) {
      httpRequest(
        {
          url: `https://picsum.photos/v2/list?page=${page}&limit=${limit}`,
        },
        listHandler
      );
    } else {
      httpRequest(
        {
          url: `https://picsum.photos/v2/list?page=${page}&limit=${limit}`,
        },
        newListHandler
      );
    }
  }, [httpRequest, page]);

  const onChangeList = id => {
    setItemList(prevState => {
      return prevState.map(item => {
        if (item.id === id) {
          return { ...item, like: !item.like };
        } else {
          return item;
        }
      });
    });
  };

  // TODO: 서버와 통신 구현 시 주석 해제
  // const likeItemList = itemList.filter(item => {
  //   return item.like;
  // });

  // console.log(likeItemList);

  const loadingUIHandler = value => {
    setIsLoading(value);
  };

  const intersectionObserver = useMemo(() => {
    return new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            loadingUIHandler(true);
            setRenderNewItem(true);
            setPage(prevState => prevState + 1);

            setTimeout(() => {
              loadingUIHandler(false);
            }, 2000);
          }
        });
      },
      {
        threshold: 0.8,
      }
    );
  }, []);

  useEffect(() => {
    const jobItemList = document.querySelectorAll('.jobItem');
    if (jobItemList.length !== 0) {
      const lastJobItem = jobItemList[jobItemList.length - 1];
      intersectionObserver.observe(lastJobItem);
    }
  }, [intersectionObserver, itemList]);

  useEffect(() => {
    if (!isLoading) {
      setItemList(prevState => {
        return [...prevState, ...newItemList];
      });
      setRenderNewItem(false);
    }
  }, [isLoading, newItemList]);

  return (
    <ItemListContainer>
      {error && (
        <>
          <ErrorMessage>데이터 송/수신에 문제가 발생했습니다.</ErrorMessage>
          <ErrorMessage>{error.message}</ErrorMessage>
        </>
      )}
      <ItemList>
        {itemList.map(item => {
          return (
            <JobItem key={item.id} item={item} onChangeList={onChangeList} />
          );
        })}
        {isLoading
          ? MOCK_SKELETON_UI.map(item => {
              return <SkeletonUi key={item.id} />;
            })
          : renderNewItem
          ? newItemList.map(item => {
              return (
                <JobItem
                  key={item.id}
                  item={item}
                  onChangeList={onChangeList}
                />
              );
            })
          : null}
      </ItemList>
    </ItemListContainer>
  );
};

const ItemListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 175px;
`;

const ErrorMessage = styled.p`
  margin: 50px 0 0 0;
  color: ${({ theme }) => theme.primaryBlue};
  font-size: 24px;
  font-weight: bold;
`;

const ItemList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 55%;
`;

export default JobItemList;

const MOCK_SKELETON_UI = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

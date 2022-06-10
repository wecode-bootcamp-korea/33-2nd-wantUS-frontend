import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import ResumeItemList from './ResumeItemList';
import { FiCopy } from 'react-icons/fi';
import { BsUpload } from 'react-icons/bs';

const Resume = () => {
  const [userFile, setUserFile] = useState([]);
  const [userInfo, setUserInfo] = useState([]);

  const handleChangeFile = e => {
    let copy = [...userFile];
    copy.push(e.target.files);
    setUserFile(copy);
  };

  useEffect(() => {
    fetch('/data/resumeuserdata.json')
      .then(res => res.json())
      .then(data => setUserInfo(data));
  }, []);

  return (
    <ResumeWrapper>
      <ResumeContainer>
        <ResumeListHeader>
          <HeaderLeft>최근 문서</HeaderLeft>
          <HeaderRight>원티드 이력서 소개 ⓘ</HeaderRight>
        </ResumeListHeader>
        <ResumeList>
          <ResumeItemFix>
            <ResumeAdd>
              <FiCopy />
            </ResumeAdd>
            <ResumeAddText>새 이력서 작성</ResumeAddText>
          </ResumeItemFix>
          <ResumeItemFix>
            <ResumeUpload>
              <BsUpload />
            </ResumeUpload>
            <ResumeUploadText
              method="post"
              action="upload"
              encType="multipart/form-data"
            >
              <FileInput
                type="file"
                accept=".pdf"
                onChange={handleChangeFile}
                id="file"
              />
              <FileInputLabel htmlFor="file">파일 업로드</FileInputLabel>
            </ResumeUploadText>
          </ResumeItemFix>
          {userFile &&
            userFile.map((resumeData, i) => (
              <ResumeItemList
                key={i}
                resumeData={resumeData}
                id={i}
                userInfo={userInfo}
                userFile={userFile}
                setUserFile={setUserFile}
              />
            ))}
        </ResumeList>
      </ResumeContainer>
    </ResumeWrapper>
  );
};
const ResumeItemCard = css`
  height: 190px;
  width: calc(25% - 20px);
  margin: 0 20px 20px 0;
  border: 1px solid #dbdbdb;
  background-color: white;
`;

const ResumeWrapper = styled.div`
  margin: 0 auto;
  height: 100vh;
  background-color: #f8f8f8;
`;

const ResumeContainer = styled.div`
  margin: 0 auto;
  max-width: 1060px;
`;

const ResumeListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 25px 0 0 5px;
  padding: 15px 0;
  font-weight: bold;
  line-height: 1.5;
`;

const HeaderLeft = styled.div`
  color: ${props => props.theme.fontBlack};
`;

const HeaderRight = styled.div`
  color: ${props => props.theme.primaryBlue};
`;

const ResumeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% + 20px);
`;

const ResumeItemFix = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${ResumeItemCard}
`;

const ResumeAdd = styled.div`
  padding: 25px;
  background-color: ${props => props.theme.primaryBlue};
  border-radius: 50%;
  color: white;
  font-size: 26px;
`;

const ResumeUpload = styled.div`
  padding: 25px;
  background-color: #e1e2e3;
  border-radius: 50%;
  font-size: 26px;
  cursor: pointer;
`;

const ResumeUploadText = styled.form`
  margin-top: 20px;
  font-weight: bold;
  color: ${props => props.theme.fontBlack};
`;

const FileInput = styled.input`
  display: none;
`;

const FileInputLabel = styled.label`
  cursor: pointer;
`;

const ResumeAddText = styled(ResumeUploadText)``;

export default Resume;

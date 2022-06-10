import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { BsThreeDotsVertical } from 'react-icons/bs';
// import { saveAs } from 'file-saver';

const ResumeItemList = ({
  resumeData,
  userInfo,
  userFile,
  id,
  setUserFile,
}) => {
  const [modal, setModal] = useState(false);
  const { name, date } = userInfo.user;

  const showModal = e => {
    setModal(!modal);
  };

  //파일 다운로드
  let FileSaver = require('file-saver');
  let downloadFile = new Blob(resumeData, { type: 'text/plain;charset=utf-8' });

  const fileDownload = e => {
    FileSaver.saveAs(downloadFile, resumeData[0].name);
  };

  const fileDelete = e => {
    let copy = [...userFile];
    copy.splice(id, 1);
    setUserFile(copy);
  };

  return (
    <ResumeItem>
      <ResumeItemText>
        <ResumeItemTitle>{name}</ResumeItemTitle>
        <ResumeItemTime>{date}</ResumeItemTime>
        <FileName>{resumeData[0].name}</FileName>
      </ResumeItemText>
      <ResumeItemInfo onClick={showModal}>
        <ResumeItemInfoLang>한</ResumeItemInfoLang>
        <ResumeItemInfoWriting>작성 완료</ResumeItemInfoWriting>
        <FontDot />
      </ResumeItemInfo>
      {modal && (
        <ResumeItemInfoModal>
          <ModalForm>
            <ModalFormButton>이름변경</ModalFormButton>
            <ModalFormButton onClick={fileDownload}>다운로드</ModalFormButton>
            <ModalFormButton onClick={fileDelete}>삭제</ModalFormButton>
          </ModalForm>
        </ResumeItemInfoModal>
      )}
    </ResumeItem>
  );
};

const ResumeItemCard = css`
  height: 190px;
  width: calc(25% - 20px);
  margin: 0 20px 20px 0;
  border: 1px solid #dbdbdb;
  background-color: white;
`;

const ResumeItem = styled.div`
  position: relative;
  ${ResumeItemCard}
`;

const ResumeItemText = styled.div`
  padding: 20px;
  text-align: left;
  color: ${props => props.theme.fontGray};
`;

const ResumeItemTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
`;

const ResumeItemTime = styled.p`
  padding-top: 10px;
`;

const FileName = styled.p`
  padding-top: 60px;
  font-size: 14px;
`;

const ResumeItemInfo = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  padding: 8px 12px 8px 20px;
  border-top: 1px solid #e0e0e0;
  font-weight: bold;
  color: #999;
  line-height: 1.3;
  cursor: pointer;
`;

const ResumeItemInfoLang = styled.div`
  margin-right: 12px;
  border: 1px solid #999;
  border-radius: 2px;
  color: #999;
  font-size: 12px;
  line-height: 1.5;
`;

const ResumeItemInfoWriting = styled.span``;

const FontDot = styled(BsThreeDotsVertical)`
  margin-left: 100px;
  border: none;
  background-color: transparent;
  font-size: 20px;
  font-weight: bold;
`;

const ResumeItemInfoModal = styled.div`
  position: absolute;
  z-index: 101;
`;

const ModalForm = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  top: 20px;
  right: -80px;
  min-width: 160px;
  padding: 5px 0;
  border: 1px solid #d2d2d2;
`;

const ModalFormButton = styled.div`
  padding: 5px 20px;
  border: none;
  background-color: white;
  text-align: left;
  font-size: 14px;
  color: ${props => props.theme.fontGray};
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;

export default ResumeItemList;

import React from 'react';
import styled from 'styled-components';

const ProfileApplyStatus = ({ applyList }) => {
  const passCount = applyList.filter(list => list.result === '합격').length;
  const documentpassCount = applyList.filter(
    list => list.result === '서류통과'
  ).length;
  const failCount = applyList.filter(list => list.result === '불합격').length;

  const APPLY_STATUS = [
    { id: 1, content: '지원 완료', statusNumber: applyList.length },
    { id: 2, content: '서류 통과', statusNumber: documentpassCount },
    { id: 3, content: '최종 합격', statusNumber: passCount },
    { id: 4, content: '불합격', statusNumber: failCount },
  ];

  return (
    applyList && (
      <ProfileApplySummary>
        <ApplyTitle>지원 현황</ApplyTitle>
        <ApplyRating>
          {APPLY_STATUS.map(applyStatusData => {
            const { id, statusNumber, content } = applyStatusData;
            return (
              <ApplyStatus key={id}>
                <ApplyRatingNumber>{statusNumber}</ApplyRatingNumber>
                <ApplyRatingText>{content}</ApplyRatingText>
              </ApplyStatus>
            );
          })}
        </ApplyRating>
      </ProfileApplySummary>
    )
  );
};

const ProfileApplySummary = styled.div`
  padding: 26px 0 34px;
  border: 1px solid #dbdbdb;
  background-color: white;
`;

const ApplyTitle = styled.div`
  padding: 0 32px 26px;
  font-size: 18px;
  font-weight: bold;
`;

const ApplyRating = styled.div`
  display: flex;
  text-align: center;
`;

const ApplyStatus = styled.div`
  flex: 2.5;
  border-right: 2px solid #dbdbdb;

  &:last-child {
    border-right: none;
  }
`;

const ApplyRatingNumber = styled.div`
  padding-bottom: 11px;
  font-size: 36px;
`;

const ApplyRatingText = styled.div`
  line-height: 19px;
`;

export default ProfileApplyStatus;

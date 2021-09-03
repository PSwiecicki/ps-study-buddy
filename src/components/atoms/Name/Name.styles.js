import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-left: 24px;
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.fontGrey};
  display: flex;
  flex-direction: column;
  justify-content: center;

  .name {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: bold;
    margin-bottom: 0;
  }

  .attendence {
    font-size: ${({ theme }) => theme.fontSize.s};
    margin-top: 0;
  }
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: ${({ children, theme }) => {
    const avg = children.props.children;
    if (avg < 3) return theme.colors.error;
    if (avg < 4) return theme.colors.warning;
    else return theme.colors.success;
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  margin-top: 33px;

  p {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: bold;
  }
`;

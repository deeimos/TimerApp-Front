import styled from "styled-components";

export const Wrapper = styled.div`
  width: 250px;
  margin: 8px 0;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 4px;
`;

export const Bar = styled.div`
  height: 12px;
  background-color: #ddd;
  border-radius: 6px;
  overflow: hidden;
`;

export const Fill = styled.div`
  height: 100%;
  background-color: teal;
  transition: width 0.3s ease;
`;

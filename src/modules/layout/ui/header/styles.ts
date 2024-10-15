import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: white;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`;

export const HeaderContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const IconButton = styled.button`
  padding: 0.5rem;
  border-radius: 9999px;
  color: #9ca3af;
  &:hover {
    color: #6b7280;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.75rem;
`;

export const Avatar = styled.img`
  height: 2rem;
  width: 2rem;
  border-radius: 9999px;
`;

export const Username = styled.span`
  margin-left: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #4b5563;
`;

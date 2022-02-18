import styled from 'styled-components';

export const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ItemSideBar = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: var(--color-gray-700);
  font-weight: bold;
  padding: 1rem 1.5rem;
  border-radius: 0.75rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  margin-bottom: 10px;
  span {
    margin-left: 1rem;
  }

  &:hover {
    background-color: #c2c2c2;
  }
`;

export const NavBarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  height: 100vh;
  background: black;
  @media (max-width: 768px) {
    display: flex;
    overflow: hidden;
    overflow-y: hidden;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-height: ${(props) => (props.open ? '100vh' : '0')};
    transition: max-height 0.2s ease-in;
  }
`;

export const ItemNav = styled(ItemSideBar)`
  color: white;
`;

export const Close = styled.img`
  position: absolute;
  width: 1.5rem;
  top: 3rem;
  right: 3rem;
`;

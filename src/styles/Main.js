import styled, { css } from 'styled-components';

export const Content = styled.div`
  width: 100%;
  padding: 0.5rem 1.5rem;
  ${(props) =>
    props.grid &&
    css`
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
    `}
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const OptionsHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(195, 195, 195);
  padding: 2rem 0.5rem;
`;
export const Actions = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ItemGrid = styled.div`
  background-color: white;
  padding: 10px 25px;
  border-radius: 10px;
  border-width: 1px;
  border-color: rgb(170, 170, 170);
  border-style: solid;
`;

export const HeaderItemGrid = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(162, 162, 162);
  padding-bottom: 15px;
`;

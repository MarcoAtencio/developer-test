import styled, { css } from 'styled-components';

export const Title = styled.h4`
  font-weight: bold;
  font-size: 1.5rem;
  color: var(--color-black);
`;

export const Text = styled.p`
  font-weight: 600;
  font-size: 1rem;
  color: var(--color-black);
`;

export const SubText = styled.p`
  color: var(--color-gray-500);
  font-weight: 600;
  font-size: 1rem;
`;

export const Card = styled.div`
  border-radius: 1rem;
  background-color: var(--color-white);
  min-width: 450px;
  margin: 1rem auto;
  padding: 2rem;
`;

export const GroupButton = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const ButtonStyle = styled.button`
  border-radius: 1.5rem;
  font-size: 0.8rem;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  padding: 0 0.8rem;
  min-width: 80px;
  min-height: 2.25rem;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  ${(props) => {
    switch (props.mode) {
      case 'danger':
        return css`
          background-color: var(--color-red-200);
          color: var(--color-red-700);
        `;
      case 'secondary':
        return css`
          background-color: var(--color-gray-100);
          color: var(--color-black);
        `;
      default:
        return css`
          background-color: var(--color-black);
          color: var(--color-white);
        `;
    }
  }}

  :disabled {
    pointer-events: none;
  }

  :hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }

  :active {
    box-shadow: none;
    transform: translateY(0);
  }
`;

export const Label = styled.label`
  color: var(--color-gray-500);
  margin-bottom: 0.2rem;
`;

export const Input = styled.input`
  background-color: var(--color-gray-100);
  border: none;
  padding: 1rem;
  margin-top: 0.3rem;
  margin-bottom: 1.1rem;
  border-radius: 0.75rem;
  width: -webkit-fill-available;
  border-style: none;
  height: auto;
  outline: none;
  font-size: 0.8rem;
  color: var(color-black-900);
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-shadow);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

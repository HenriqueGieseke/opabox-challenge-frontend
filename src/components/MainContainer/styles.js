import styled, { keyframes } from 'styled-components';

export const Main = styled.main`
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

export const ContentBox = styled.div`
  width: 50rem;
  color: #7a7a7a;
  display: flex;
  justify-content: space-between;
  gap: 3rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  form {
    button {
      margin-left: 3rem;
      margin-top: 2.4rem;
      margin-bottom: 1.7rem;
      background: #fd6804;
      border-radius: 10px;
      padding: 0.9rem 1.8rem;
      border: none;
      color: #fff;
      font-size: 1rem;
      transition: all 0.2s;

      :hover {
        filter: brightness(90%);
      }

      :active {
        transform: translateY(2px);
      }
    }
  }
`;

export const Label = styled.label`
  display: inline-block;
  margin-top: 2rem;
  margin-bottom: 1rem;
  margin-left: 3rem;
  font-size: 0.9rem;
`;

export const TextWrapper = styled.div`
  display: flex;

  h3 {
    font-weight: 400;
    width: max-content;
  }

  img {
    margin-right: 0.9rem;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 1.25rem;
  padding-left: 3rem;

  input {
    width: 4.2rem;
    height: 2rem;
    border: none;
    background: #f4f8ff;
    border-radius: 5px;
    outline: none;
    padding: 0 0.7rem;

    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      margin: 0;
    }
  }
`;

export const ReturnBox = styled.div`
  width: 100%;
  padding: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ReturnBoxTitle = styled.span`
  font-size: 0.9rem;
  margin-bottom: 1.6rem;
`;

export const ReturnWrapper = styled.div`
  width: 18rem;
  height: 8rem;
  background: #f4f8ff;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;

export const ValueWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ReturnTitle = styled.span`
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`;

export const ReturnValue = styled.span``;

export const BooleanValue = styled.span`
  text-transform: uppercase;
`;

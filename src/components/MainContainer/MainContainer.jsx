import React from 'react';
import PageTitle from '../PageTitle/PageTitle';
import {
  BooleanValue,
  ContentBox,
  ContentWrapper,
  InputWrapper,
  Label,
  Main,
  ReturnBox,
  ReturnBoxTitle,
  ReturnTitle,
  ReturnValue,
  ReturnWrapper,
  TextWrapper,
  ValueWrapper,
} from './styles';
import endpointIcon from '../../assets/endpoint-icon.svg';

const MainContainer = () => {
  return (
    <Main>
      <PageTitle />
      <ContentBox>
        <ContentWrapper>
          <TextWrapper>
            <img src={endpointIcon} alt="Endpoint Icon" />
            <h3>Endpoint /ordenalista</h3>
          </TextWrapper>

          <form action="">
            <Label htmlFor="">Sala N</Label>
            <InputWrapper>
              <input type="number" />
              <input type="number" />
              <input type="number" />
              <input type="number" />
            </InputWrapper>
            <Label htmlFor="">Sala S</Label>
            <InputWrapper>
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </InputWrapper>
            <button>Enviar</button>
          </form>
        </ContentWrapper>

        <ReturnBox>
          <ReturnBoxTitle>Retorno</ReturnBoxTitle>

          <ReturnWrapper>
            <ValueWrapper>
              <ReturnTitle>Sala N</ReturnTitle>
              <ReturnValue>15654</ReturnValue>
            </ValueWrapper>
            <ValueWrapper>
              <ReturnTitle>Sala S</ReturnTitle>
              <ReturnValue>axad</ReturnValue>
            </ValueWrapper>
          </ReturnWrapper>
        </ReturnBox>
      </ContentBox>

      <ContentBox>
        <ContentWrapper>
          <TextWrapper>
            <img src={endpointIcon} alt="Endpoint Icon" />
            <h3>Endpoint /interlace?</h3>
          </TextWrapper>

          <form action="">
            <Label htmlFor="">Intervalo A</Label>
            <InputWrapper>
              <input type="number" />
              <input type="number" />
            </InputWrapper>
            <Label htmlFor="">Intervalo B</Label>
            <InputWrapper>
              <input type="number" />
              <input type="number" />
            </InputWrapper>
            <button>Enviar</button>
          </form>
        </ContentWrapper>

        <ReturnBox>
          <ReturnBoxTitle>Retorno</ReturnBoxTitle>

          <ReturnWrapper>
            <BooleanValue>false</BooleanValue>
          </ReturnWrapper>
        </ReturnBox>
      </ContentBox>
    </Main>
  );
};

export default MainContainer;

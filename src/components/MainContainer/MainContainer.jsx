import React, { useState } from 'react';
import axios from 'axios';
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
  const [roomNInput1, setRoomNInput1] = useState('');
  const [roomNInput2, setRoomNInput2] = useState('');
  const [roomNInput3, setRoomNInput3] = useState('');
  const [roomNInput4, setRoomNInput4] = useState('');

  const [roomSInput1, setRoomSInput1] = useState('');
  const [roomSInput2, setRoomSInput2] = useState('');
  const [roomSInput3, setRoomSInput3] = useState('');

  const [intervalAInput1, setIntervalAInput1] = useState('');
  const [intervalAInput2, setIntervalAInput2] = useState('');

  const [intervalBInput1, setIntervalBInput1] = useState('');
  const [intervalBInput2, setIntervalBInput2] = useState('');

  const [intervalA, setIntervalA] = useState([]);
  const [intervalB, setIntervalB] = useState([]);

  const orderSubmit = async (event) => {
    event.preventDefault();
    try {
      const roomN = [roomNInput1, roomNInput2, roomNInput3, roomNInput4];
      const roomS = [roomSInput1, roomSInput2, roomSInput3];

      const roomData = {
        listas: {
          salaN: roomN,
          salaS: roomS,
        },
      };

      await axios({
        method: 'post',
        url: 'http://localhost:8080/ordenaLista',
        data: roomData,
      }).then((res) => {
        console.log(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const interlaceSubmit = (event) => {
    event.preventDefault();
    setIntervalA([intervalAInput1, intervalAInput2]);
    setIntervalB([intervalBInput1, intervalBInput2]);
    console.log(intervalA + ' ' + intervalB);
  };

  return (
    <Main>
      <PageTitle />
      <ContentBox>
        <ContentWrapper>
          <TextWrapper>
            <img src={endpointIcon} alt="Endpoint Icon" />
            <h3>Endpoint /ordenalista</h3>
          </TextWrapper>

          <form onSubmit={orderSubmit}>
            <Label htmlFor="">Sala N</Label>
            <InputWrapper>
              <input
                type="number"
                onChange={(e) => setRoomNInput1(e.target.value)}
                required
              />
              <input
                type="number"
                onChange={(e) => setRoomNInput2(e.target.value)}
                required
              />
              <input
                type="number"
                onChange={(e) => setRoomNInput3(e.target.value)}
              />
              <input
                type="number"
                onChange={(e) => setRoomNInput4(e.target.value)}
              />
            </InputWrapper>
            <Label htmlFor="">Sala S</Label>
            <InputWrapper>
              <input
                type="text"
                onChange={(e) => setRoomSInput1(e.target.value)}
                required
              />
              <input
                type="text"
                onChange={(e) => setRoomSInput2(e.target.value)}
                required
              />
              <input
                type="text"
                onChange={(e) => setRoomSInput3(e.target.value)}
              />
            </InputWrapper>
            <button type="submit">Enviar</button>
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

          <form onSubmit={interlaceSubmit}>
            <Label htmlFor="">Intervalo A</Label>
            <InputWrapper>
              <input
                type="number"
                required
                onChange={(e) => setIntervalAInput1(e.target.value)}
              />
              <input
                type="number"
                required
                onChange={(e) => setIntervalAInput2(e.target.value)}
              />
            </InputWrapper>
            <Label htmlFor="">Intervalo B</Label>
            <InputWrapper>
              <input
                type="number"
                required
                onChange={(e) => setIntervalBInput1(e.target.value)}
              />
              <input
                type="number"
                required
                onChange={(e) => setIntervalBInput2(e.target.value)}
              />
            </InputWrapper>
            <button type="submit">Enviar</button>
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

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
  const [roomNInput1, setRoomNInput1] = useState('1');
  const [roomNInput2, setRoomNInput2] = useState('5');
  const [roomNInput3, setRoomNInput3] = useState('7');
  const [roomNInput4, setRoomNInput4] = useState('8');

  const [roomSInput1, setRoomSInput1] = useState('a');
  const [roomSInput2, setRoomSInput2] = useState('x');
  const [roomSInput3, setRoomSInput3] = useState('n');

  const [intervalAInput1, setIntervalAInput1] = useState('20');
  const [intervalAInput2, setIntervalAInput2] = useState('40');

  const [intervalBInput1, setIntervalBInput1] = useState('10');
  const [intervalBInput2, setIntervalBInput2] = useState('60');

  const [roomsResponse, setRoomsResponse] = useState({
    responseStatus: false,
    rooms: {},
  });
  const [intervalsResponse, setIntervalsResponse] = useState({
    responseStatus: false,
    interlace: '',
  });

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
        setRoomsResponse({
          responseStatus: true,
          rooms: res.data,
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  const interlaceSubmit = async (event) => {
    event.preventDefault();
    try {
      const intervalA = [intervalAInput1, intervalAInput2];
      const intervalB = [intervalBInput1, intervalBInput2];

      const intervalData = {
        intervaloA: intervalA,
        intervaloB: intervalB,
      };

      await axios({
        method: 'post',
        url: 'http://localhost:8080/interlace?',
        data: intervalData,
      }).then((res) => {
        setIntervalsResponse({
          responseStatus: true,
          interlace: res.data,
        });
      });
    } catch (error) {
      console.log(error);
    }
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
                value={roomNInput1}
                required
              />
              <input
                type="number"
                onChange={(e) => setRoomNInput2(e.target.value)}
                value={roomNInput2}
                required
              />
              <input
                type="number"
                onChange={(e) => setRoomNInput3(e.target.value)}
                value={roomNInput3}
                required
              />
              <input
                type="number"
                onChange={(e) => setRoomNInput4(e.target.value)}
                value={roomNInput4}
                required
              />
            </InputWrapper>
            <Label htmlFor="">Sala S</Label>
            <InputWrapper>
              <input
                type="text"
                onChange={(e) => setRoomSInput1(e.target.value)}
                required
                value={roomSInput1}
                pattern="[a-zA-Z][a-zA-Z0-9\s]*"
              />
              <input
                type="text"
                onChange={(e) => setRoomSInput2(e.target.value)}
                required
                value={roomSInput2}
                pattern="[a-zA-Z][a-zA-Z0-9\s]*"
              />
              <input
                type="text"
                onChange={(e) => setRoomSInput3(e.target.value)}
                required
                value={roomSInput3}
                pattern="[a-zA-Z][a-zA-Z0-9\s]*"
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
              <ReturnValue>
                {roomsResponse.responseStatus &&
                  roomsResponse.rooms.listas.salaN.map((value) => {
                    return <span key={value}>{value}</span>;
                  })}
              </ReturnValue>
            </ValueWrapper>
            <ValueWrapper>
              <ReturnTitle>Sala S</ReturnTitle>
              <ReturnValue>
                {roomsResponse.responseStatus &&
                  roomsResponse.rooms.listas.salaS.map((value) => {
                    return <span key={value}>{value}</span>;
                  })}
              </ReturnValue>
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
                value={intervalAInput1}
                onChange={(e) => setIntervalAInput1(e.target.value)}
              />
              <input
                type="number"
                required
                value={intervalAInput2}
                onChange={(e) => setIntervalAInput2(e.target.value)}
              />
            </InputWrapper>
            <Label htmlFor="">Intervalo B</Label>
            <InputWrapper>
              <input
                type="number"
                required
                value={intervalBInput1}
                onChange={(e) => setIntervalBInput1(e.target.value)}
              />
              <input
                type="number"
                required
                value={intervalBInput2}
                onChange={(e) => setIntervalBInput2(e.target.value)}
              />
            </InputWrapper>
            <button type="submit">Enviar</button>
          </form>
        </ContentWrapper>

        <ReturnBox>
          <ReturnBoxTitle>Retorno</ReturnBoxTitle>

          <ReturnWrapper>
            <BooleanValue>
              {intervalsResponse.responseStatus &&
                String(intervalsResponse.interlace)}
            </BooleanValue>
          </ReturnWrapper>
        </ReturnBox>
      </ContentBox>
    </Main>
  );
};

export default MainContainer;

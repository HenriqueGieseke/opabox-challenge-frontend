import axios from 'axios';

const orderListRequest = async (roomData, setRoomsResponse) => {
  try {
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

export { orderListRequest };

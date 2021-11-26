import axios from 'axios';

const interlaceRequest = async (intervalData, setIntervalsResponse) => {
  try {
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

export { interlaceRequest };

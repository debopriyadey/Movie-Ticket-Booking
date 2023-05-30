import axios from "axios";
const bookingUri = "http://localhost:8081/api/v1/booking";

export const insertBooking = async booking => {
  const { data } = await axios.post(`${bookingUri}/insertBooking`, booking);
  return data;
};

export const getBookingByUserId = async id => {
  const { data } = await axios.get(
    `${bookingUri}/getBookingByUserId?userId=${id}`
  );
  return data;
};

export const getBookingByDateAndShift = async query => {
  const { data } = await axios.get(
    `${bookingUri}/getBookingByDateAndShift?screeningDate=${query.screeningDate}&screeningShift=${query.screeningShift}`
  );
  return data;
};

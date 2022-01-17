import moment from "moment";
// import "moment/locale/sk";

// moment.locale("sk");

const fakeTimes = [
  {
    offsetDays: 7,
    startTime: "6:39",
  },
  {
    offsetDays: 5,
    startTime: "20:26",
  },
  {
    offsetDays: 3,
    startTime: "19:24",
  },
];

export const generateFakeTimes = () =>
  fakeTimes
    .concat([
      {
        offsetDays: 0,
        startTime: moment().subtract(7, "minutes").format("LT"),
      },
    ])
    .map(({ offsetDays, startTime }) => {
      const time = moment(startTime, "hh:mm").subtract(offsetDays, "days");
      return {
        date: time.clone().format("DD-MM-YYYY"),
        divisorDate: time
          .clone()
          .format("dddd,\u00A0MMM\u00A0D\u00A0•\u00A0HH:mm"),
        endTime: time.clone().add(1, "hour").format("HH:mm"),
        receivedTime: time.clone().add(1, "minute").format("ddd HH:mm"),
        startTime: time.clone().format("HH:mm"),
      };
    });

import { FC, useEffect, useState } from "react";
import Snowfall from "react-snowfall";
import classNames from "classnames";

import { DAY_ICONS } from "images/Images";

import classes from "./Calendar.module.scss";

type TimeType = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

interface CounterProps {
  setCurrentDay: (value: number | ((prevVar: number) => number)) => void;
  setIsModalOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  timeLeftUntilCalendarOpens: TimeType;
}

type ImgType = string;

type DayType = {
  day: number;
  img: ImgType;
};

const createArrayDays = () => {
  const days: Array<DayType> = Array.from({ length: 24 }, (_, i) => {
    const day = i + 1;
    const picture = `day${day.toString()}`;
    const img: string = DAY_ICONS[picture];

    return {
      day,
      img,
    };
  });
  return days;
};

const Calendar: FC<CounterProps> = ({
  setCurrentDay,
  setIsModalOpen,
  timeLeftUntilCalendarOpens,
}) => {
  const [days] = useState(createArrayDays());

  useEffect(
    () => console.log({ dayLeft: timeLeftUntilCalendarOpens.days }),
    [timeLeftUntilCalendarOpens.days],
  );

  const handleClick = (currentDay: number) => {
    setCurrentDay(currentDay);
    setIsModalOpen(current => !current);
  };

  return (
    <div className={classes.container}>
      <div className={classes.calendar}>
        <Snowfall style={{ height: "inherit" }} />
        {days.map((currentDay: DayType) => {
          const { day, img } = currentDay;

          return (
            <div key={day} className={classes.box}>
              <div
                className={classNames(classes.day, {
                  [classes["day--disabled"]]: day > timeLeftUntilCalendarOpens.days,
                })}
                onClick={() => (day > timeLeftUntilCalendarOpens.days ? null : handleClick(day))}>
                <img src={img} alt={day.toString()} />
                {day > timeLeftUntilCalendarOpens.days ? (
                  <img className={classes.dis} src={DAY_ICONS.icy} alt={day.toString()} />
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;

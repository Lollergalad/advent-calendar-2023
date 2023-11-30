import { FC, useState } from "react";
import Snowfall from "react-snowfall";
import classNames from "classnames";

import day1 from "assets/day-1.png";
import day2 from "assets/day-2.png";
import day3 from "assets/day-3.png";
import day4 from "assets/day-4.png";
import day5 from "assets/day-5.png";
import day6 from "assets/day-6.png";
import day7 from "assets/day-7.png";
import day8 from "assets/day-8.png";
import day9 from "assets/day-9.png";
import day10 from "assets/day-10.png";
import day11 from "assets/day-11.png";
import day12 from "assets/day-12.png";
import day13 from "assets/day-13.png";
import day14 from "assets/day-14.png";
import day15 from "assets/day-15.png";
import day16 from "assets/day-16.png";
import day17 from "assets/day-17.png";
import day18 from "assets/day-18.png";
import day19 from "assets/day-19.png";
import day20 from "assets/day-20.png";
import day21 from "assets/day-21.png";
import day22 from "assets/day-22.png";
import day23 from "assets/day-23.png";
import day24 from "assets/day-24.png";
import icy from "assets/icy.jpg";

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

const getImage = (day: number) => {
  let image;
  switch (day) {
    case 1:
      image = day1;
      break;
    case 2:
      image = day2;
      break;
    case 3:
      image = day3;
      break;
    case 4:
      image = day4;
      break;
    case 5:
      image = day5;
      break;
    case 6:
      image = day6;
      break;
    case 7:
      image = day7;
      break;
    case 8:
      image = day8;
      break;
    case 9:
      image = day9;
      break;
    case 10:
      image = day10;
      break;
    case 11:
      image = day11;
      break;
    case 12:
      image = day12;
      break;
    case 13:
      image = day13;
      break;
    case 14:
      image = day14;
      break;
    case 15:
      image = day15;
      break;
    case 16:
      image = day16;
      break;
    case 17:
      image = day17;
      break;
    case 18:
      image = day18;
      break;
    case 19:
      image = day19;
      break;
    case 20:
      image = day20;
      break;
    case 21:
      image = day21;
      break;
    case 22:
      image = day22;
      break;
    case 23:
      image = day23;
      break;
    case 24:
      image = day24;
      break;

    default:
      image = day1;
      break;
  }

  return image;
};

const createArrayDays = () => {
  const days: Array<DayType> = Array.from({ length: 24 }, (_, i) => {
    const day = i + 1;
    const img = getImage(day);

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
                  [classes["day--disabled"]]: day > timeLeftUntilCalendarOpens.days + 1,
                })}
                onClick={() =>
                  day > timeLeftUntilCalendarOpens.days + 1 ? null : handleClick(day)
                }>
                <img src={img} alt={day.toString()} />
                {day > timeLeftUntilCalendarOpens.days + 1 ? (
                  <img className={classes.dis} src={icy} alt={day.toString()} />
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

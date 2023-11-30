import { FC, useState } from "react";
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

const getImage = (day: number) => {
  let image;
  switch (day) {
    case 1:
      image = DAY_ICONS.day1;
      break;
    case 2:
      image = DAY_ICONS.day2;
      break;
    case 3:
      image = DAY_ICONS.day3;
      break;
    case 4:
      image = DAY_ICONS.day4;
      break;
    case 5:
      image = DAY_ICONS.day5;
      break;
    case 6:
      image = DAY_ICONS.day6;
      break;
    case 7:
      image = DAY_ICONS.day7;
      break;
    case 8:
      image = DAY_ICONS.day8;
      break;
    case 9:
      image = DAY_ICONS.day9;
      break;
    case 10:
      image = DAY_ICONS.day10;
      break;
    case 11:
      image = DAY_ICONS.day11;
      break;
    case 12:
      image = DAY_ICONS.day12;
      break;
    case 13:
      image = DAY_ICONS.day13;
      break;
    case 14:
      image = DAY_ICONS.day14;
      break;
    case 15:
      image = DAY_ICONS.day15;
      break;
    case 16:
      image = DAY_ICONS.day16;
      break;
    case 17:
      image = DAY_ICONS.day17;
      break;
    case 18:
      image = DAY_ICONS.day18;
      break;
    case 19:
      image = DAY_ICONS.day19;
      break;
    case 20:
      image = DAY_ICONS.day20;
      break;
    case 21:
      image = DAY_ICONS.day21;
      break;
    case 22:
      image = DAY_ICONS.day22;
      break;
    case 23:
      image = DAY_ICONS.day23;
      break;
    case 24:
      image = DAY_ICONS.day24;
      break;

    default:
      image = DAY_ICONS.day1;
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

import { FC } from "react";
import Snowfall from "react-snowfall";

import { IMAGES } from "assets/Images";

import classes from "./Counter.module.scss";

type TimeType = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

interface CounterProps {
  timeLeftUntilCalendarOpens: TimeType;
}

const Counter: FC<CounterProps> = ({ timeLeftUntilCalendarOpens }) => {
  return (
    <div className={classes.container}>
      <Snowfall />
      <div className={classes.description}>
        <span className={classes.title}>Advent Calendar 2023</span>
        <span className={classes.info}>
          It is a new year, so it is time to announce your new calendar. But sadly you have to wait
          a bit. The clock is ticking, the time is running, so be patient and count the remaining
          days, hours, minutes and seconds. Do not afraid, the timer helps you.
        </span>
        <span className={classes.info}>Be prepared, your calendar is coming!</span>
      </div>
      <div className={classes.logoAndTimerContainer}>
        <div className={classes.imageContainer}>
          <img src={IMAGES.calendarLogo} alt="first image" />
        </div>
        <div className={classes.timerContainer}>
          {Object.keys(timeLeftUntilCalendarOpens).map(key => (
            <div key={key}>
              <span>{timeLeftUntilCalendarOpens[key as keyof TimeType]}</span>
              <span>{key}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Counter;

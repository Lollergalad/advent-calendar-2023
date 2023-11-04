import { useEffect, useMemo, useState } from "react";

import IMAGES from "images/Images";

import classes from "./Counter.module.scss";

const CALENDAR_OPEN_DAY = new Date(2023, 11, 1);

interface TimeForCalendar {
  [index: string]: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Counter = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setCurrentDate(new Date()), 1000);

    return () => clearInterval(intervalId);
  }, []);

  const timeLeftUntilCalendarOpens: TimeForCalendar = useMemo(() => {
    const remainderTime = Math.abs(CALENDAR_OPEN_DAY.getTime() - currentDate.getTime());
    const totalSeconds = Math.floor(remainderTime / 1000);
    const days = Math.floor(totalSeconds / 60 / (24 * 60));
    const hours = Math.floor((totalSeconds / 60 - days * 24 * 60) / 60);
    const minutes = Math.floor(totalSeconds / 60 - days * 24 * 60 - hours * 60);
    const seconds = totalSeconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;

    return { days, hours, minutes, seconds };
  }, [currentDate]);

  return (
    <div className={classes.container}>
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
              <span>{timeLeftUntilCalendarOpens[key]}</span>
              <span>{key}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Counter;

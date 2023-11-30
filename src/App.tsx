import { useEffect, useMemo, useState } from "react";
import Calendar from "views/calendar/Calendar";
import Modal from "views/calendar/Modal";
import Counter from "views/counter/Counter";

interface TimeForCalendar {
  [index: string]: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CALENDAR_OPEN_DAY = new Date(2023, 11, 1);
//const CALENDAR_OPEN_DAY = new Date(2023, 10, 6);

const App = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentDay, setCurrentDay] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <>
      {currentDate <= CALENDAR_OPEN_DAY ? (
        <Counter timeLeftUntilCalendarOpens={timeLeftUntilCalendarOpens} />
      ) : (
        <Calendar
          setCurrentDay={setCurrentDay}
          setIsModalOpen={setIsModalOpen}
          timeLeftUntilCalendarOpens={timeLeftUntilCalendarOpens}
        />
      )}
      {isModalOpen ? <Modal day={currentDay} setIsModalOpen={setIsModalOpen} /> : null}
    </>
  );
};
export default App;

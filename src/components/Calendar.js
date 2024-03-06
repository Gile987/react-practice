import { useState } from "react";
import {
  Container,
  Header,
  Select,
  GridContainer,
  DayNameContainer,
  DayContainer,
  ArrowButton,
  SelectedDateContainer,
  SelectedDateText,
} from "./CalendarStyles";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const getDaysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1);
    const startingDayOfWeek = firstDayOfMonth.getDay();
    const numDays = new Date(year, month + 1, 0).getDate();
    const days = [];

    for (let i = 1; i <= numDays; i++) {
      days.push({ day: i, month: month });
    }

    const numDaysPrevMonth = new Date(year, month, 0).getDate();

    for (let i = 0; i < startingDayOfWeek; i++) {
      days.unshift({ day: numDaysPrevMonth - i, month: month - 1 });
    }

    const lastDayOfMonth = new Date(year, month + 1, 0);
    const endingDayOfWeek = lastDayOfMonth.getDay();
    const numEmptyCells = 6 - endingDayOfWeek;

    for (let i = 0; i < numEmptyCells; i++) {
      days.push({ day: i + 1, month: month + 1 });
    }

    return days;
  };

  const daysInMonth = getDaysInMonth();

  const handleMonthChange = (e) => {
    try {
      const month = parseInt(e.target.value);
      if (month < 0 || month > 11) {
        throw new Error("Month must be between 0 (January) and 11 (December).");
      }
      const newDate = new Date(currentDate);
      newDate.setMonth(month);
      setCurrentDate(newDate);
    } catch (error) {
      console.error("An error occurred when changing the month:", error);
    }
  };

  const handleDayClick = (day, month) => {
    if (month !== currentDate.getMonth()) {
      const newDate = new Date(currentDate.getFullYear(), month, day);
      setCurrentDate(newDate);
    }
    setSelectedDate(`${day}-${month + 1}-${currentDate.getFullYear()}`);
  };

  const handlePrevMonth = () => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1
    );
    setCurrentDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1
    );
    setCurrentDate(newDate);
  };

  return (
    <Container>
      <Header>
        {`${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`}
      </Header>
      <ArrowButton onClick={handlePrevMonth}>Prev</ArrowButton>
      <Select value={currentDate.getMonth()} onChange={handleMonthChange}>
        {months.map((month, index) => (
          <option key={month} value={index}>
            {month}
          </option>
        ))}
      </Select>
      <ArrowButton onClick={handleNextMonth}>Next</ArrowButton>
      <GridContainer>
        {daysOfWeek.map((day) => (
          <DayNameContainer key={day}>{day}</DayNameContainer>
        ))}
        {daysInMonth.map((dayInfo) => (
          <DayContainer
            key={`${currentDate.getFullYear()}-${dayInfo.month}-${dayInfo.day}`}
            onClick={() =>
              handleDayClick(
                dayInfo ? dayInfo.day : null,
                dayInfo ? dayInfo.month : null
              )
            }
            className={
              dayInfo &&
              selectedDate ===
                `${dayInfo.day}-${
                  dayInfo.month + 1
                }-${currentDate.getFullYear()}` &&
              dayInfo.month === currentDate.getMonth()
                ? "calendar-day clicked"
                : ""
            }
            month={dayInfo ? dayInfo.month : null}
            currentMonth={currentDate.getMonth()}
          >
            {dayInfo ? <div>{dayInfo.day}</div> : null}
          </DayContainer>
        ))}
      </GridContainer>
      {selectedDate ? (
        <SelectedDateContainer>
          <SelectedDateText>
            Selected Date:{" "}
            {selectedDate
              ? selectedDate.split("-").join("/")
              : "No date selected"}
          </SelectedDateText>
        </SelectedDateContainer>
      ) : null}
    </Container>
  );
};

export default Calendar;

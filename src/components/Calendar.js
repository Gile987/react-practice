import { useState } from "react";
import { styled } from "@mui/system";

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

const Container = styled("div")({
  textAlign: "center",
  backgroundColor: "#121212",
  color: "#0ff",
  padding: "20px",
  borderRadius: "10px",
});

const Header = styled("h2")({
  marginBottom: "10px",
  color: "#0ff",
});

const Select = styled("select")({
  marginBottom: "10px",
  backgroundColor: "#222",
  color: "#0ff",
  border: "none",
  padding: "5px",
  borderRadius: "5px",
});

const GridContainer = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  gap: "5px",
});

const DayContainer = styled("div")(({ month, currentMonth }) => ({
  border: "1px solid #0ff",
  padding: "5px",
  textAlign: "center",
  cursor: "pointer",
  backgroundColor: month === currentMonth ? "#222" : "#111",
  color: month === currentMonth ? "#0ff" : "#999",
  "&:hover": {
    backgroundColor: month === currentMonth ? "#0ff" : "#bbb",
    color: "#121212",
  },
  "&.calendar-day.clicked": {
    backgroundColor: "#FF69B4",
    color: "#121212",
  },
}));

const DayNameContainer = styled("div")({
  border: "1px solid #0ff",
  padding: "5px",
  textAlign: "center",
});

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

    console.log('startingDayOfWeek', startingDayOfWeek);

    for (let i = 1; i <= numDays; i++) {
      days.push({ day: i, month: month });
    }
    console.log('days', days)

    const numDaysPrevMonth = new Date(year, month, 0).getDate();
    console.log('numDaysPrevMonth', numDaysPrevMonth);

    for (let i = 0; i < startingDayOfWeek; i++) {
      days.unshift({ day: numDaysPrevMonth - i, month: month - 1 })
    }

    const lastDayOfMonth = new Date(year, month + 1, 0);
    const endingDayOfWeek = lastDayOfMonth.getDay();
    const numEmptyCells = 6 - endingDayOfWeek;
    console.log('numEmptyCells', numEmptyCells)

    for (let i = 0; i < numEmptyCells; i++) {
      days.push({ day: i + 1, month: month + 1 })
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
      setSelectedDate(null);
    } catch (error) {
      console.error("An error occurred when changing the month:", error);
    }
  };

  const handleDayClick = (day) => {
    setSelectedDate(day);
  };

  return (
    <Container>
      <Header>
        {`${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`}
      </Header>
      <Select value={currentDate.getMonth()} onChange={handleMonthChange}>
        {months.map((month, index) => (
          <option key={month} value={index}>
            {month}
          </option>
        ))}
      </Select>
      <GridContainer>
        {daysOfWeek.map((day) => (
          <DayNameContainer key={day}>{day}</DayNameContainer>
        ))}
        {daysInMonth.map((dayInfo, index) => (
  <DayContainer
    key={`${currentDate.getFullYear()}-${dayInfo.month}-${dayInfo.day}`}
    onClick={() => handleDayClick(dayInfo ? dayInfo.day : null, dayInfo ? dayInfo.month : null)}
    className={
      dayInfo && selectedDate === dayInfo.day && dayInfo.month === currentDate.getMonth()
        ? "calendar-day clicked"
        : ""
    }
    month={dayInfo ? dayInfo.month : null}
    currentMonth={currentDate.getMonth()}
  >
    {dayInfo && <div>{dayInfo.day}</div>}
  </DayContainer>
))}
      </GridContainer>
      {selectedDate ? (
        <div>
          <p>
            Selected Date:{" "}
            {`${selectedDate}/${
              currentDate.getMonth() + 1
            }/${currentDate.getFullYear()}`}
          </p>
        </div>
      ) : null}
    </Container>
  );
};

export default Calendar;

import { useState } from 'react';
import { styled } from '@mui/system';

const Container = styled('div')({
  textAlign: 'center',
});

const Header = styled('h2')({
  marginBottom: '10px',
});

const Select = styled('select')({
  marginBottom: '10px',
});

const GridContainer = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gap: '5px',
});

const DayContainer = styled('div')({
  border: '1px solid #ccc',
  padding: '5px',
  textAlign: 'center',
});

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1);
    const startingDayOfWeek = firstDayOfMonth.getDay();
    const numDays = new Date(year, month + 1, 0).getDate();
    const days = [];

    for (let i = 1; i <= numDays; i++) {
      days.push({ day: i });
    }

    for (let i = 0; i < startingDayOfWeek; i++) {
      days.unshift(null);
    }

    const lastDayOfMonth = new Date(year, month + 1, 0);
    const endingDayOfWeek = lastDayOfMonth.getDay();
    const numEmptyCells = 6 - endingDayOfWeek;
    
    for (let i = 0; i < numEmptyCells; i++) {
      days.push(null);
    }

    return days;
  };

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const daysInMonth = getDaysInMonth();

  const handleMonthChange = (e) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(parseInt(e.target.value));
    setCurrentDate(newDate);
  };

  const getKeyForDay = (day) => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    return `${year}-${month}-${day}`;
  };

  return (
    <Container>
      <Header>{`${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`}</Header>
      <Select value={currentDate.getMonth()} onChange={handleMonthChange}>
        <option value={0}>January</option>
        <option value={1}>February</option>
        <option value={2}>March</option>
        <option value={3}>April</option>
        <option value={4}>May</option>
        <option value={5}>June</option>
        <option value={6}>July</option>
        <option value={7}>August</option>
        <option value={8}>September</option>
        <option value={9}>October</option>
        <option value={10}>November</option>
        <option value={11}>December</option>
      </Select>
      <GridContainer>
        {daysOfWeek.map((day) => (
          <DayContainer key={day}>{day}</DayContainer>
        ))}
        {daysInMonth.map((dayInfo, index) => (
          <DayContainer key={getKeyForDay(index)}>
            {dayInfo && <div>{dayInfo.day}</div>}
          </DayContainer>
        ))}
      </GridContainer>
    </Container>
  );
};

export default Calendar;

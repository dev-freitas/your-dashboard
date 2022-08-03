import React from 'react'
import { StyledCalendar } from '../styled/Calendar.styled';

const Calendar = () => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


    const time = new Date();
    const year = time.getFullYear();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();

    const hour = time.getHours();
    const minutes = time.getMinutes();
    const ampm = hour >=12 ? 'PM' : 'AM'



  return (
    <StyledCalendar>
      <h2>
        {days[day]}, {months[month]} {date},{year}, {hour}:{minutes} {ampm}
      </h2>
    </StyledCalendar>
  )
}

export default Calendar

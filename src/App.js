import React from 'react';
import { useRef } from 'react';
import './style.css';
import { useForm } from 'react-hook-form';
export default function App() {
  const refer = useRef();
  const { register, handleSubmit } = useForm();
  const weekDay = [
    { day: 'Monday', Check: false },
    { day: 'Tuesday', Check: false },
    { day: 'Wednesday', Check: false },
    { day: 'Thursday', Check: false },
    { day: 'Friday', Check: false },
    { day: 'Saturday', Check: false },
    { day: 'Sunday', Check: false }
  ];
  const onSubmit = data => {
    const updatedDay = refer.current.value;
    data.day = updatedDay;
    const updateDate = data.payDate
      .split('-')
      .reverse()
      .join('-');
    data.payDate = updateDate;
    const updateDateFrom = data.payDateFrom
      .split('-')
      .reverse()
      .join('-');
    data.payDateFrom = updateDateFrom;
    console.log(data);
  };
  const AddDay = day => {
    weekDay[day].Check = !weekDay[day].Check;
    console.log(weekDay[day].Check);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="workWeek">Select Work Week </label>
        {weekDay.map((day, i) => {
          return (
            <>
              <br />
              <label>
                <input
                  key={day.day}
                  type="checkbox"
                  onChange={AddDay(i)}
                  name={{ day }}
                  value={{ day }}
                />
                {day.day}
              </label>
            </>
          );
        })}
        <br />
        <br />
        <label htmlFor="hoursWork">Working Hours </label>
        <input
          {...register('hoursWork')}
          type="hours"
          placeholder="Enter Week Hours"
          name="hoursWork"
        />
        <br />
        <br />
        <label htmlFor="payDate">Pay Date </label>
        <input {...register('payDate')} type="date" name="payDate" />
        <br />
        <br />
        <label htmlFor="payDateFrom">Pay Date From </label>
        <input {...register('payDateFrom')} type="date" name="payDateFrom" />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

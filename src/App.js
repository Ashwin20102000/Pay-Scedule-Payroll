import React from 'react';
import { useRef } from 'react';
import './style.css';
import { useForm } from 'react-hook-form';
export default function App() {
  const refer = useRef();
  const { register, handleSubmit } = useForm();
  let weekDay = [
    { day: 'Monday', Check: false },
    { day: 'Tuesday', Check: false },
    { day: 'Wednesday', Check: false },
    { day: 'Thursday', Check: false },
    { day: 'Friday', Check: false },
    { day: 'Saturday', Check: false },
    { day: 'Sunday', Check: false }
  ];
  let setDate = '';
  const onSubmit = data => {
    let weekDays = [];
    const updatedDay = weekDay.filter(day => {
      if (day.Check === true) weekDays.push(day.day);
    });
    data.day = weekDays;
    if (
      data.hoursWork === '' ||
      data.payDate === '' ||
      data.payDateFrom == ''
    ) {
      alert('Fill all the Details');
      return;
    }
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
    setDate = data.payDateFrom;
    console.log(data);
    return data;
  };
  return (
    <div>
      <h1 className="text-light bg-dark p-4 ">Pay Schedule</h1>
      <form
        className="form-group m-5 p-3 px-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2>It's Time to set up your Pay Schedule</h2>
        <small class="form-text text-muted">
          tell us when and how when you pay your employees. We'll make they will
          be paid on time
        </small>
        <label className="mt-4 mb-2" htmlFor="workWeek">
          Select Work Week{' '}
        </label>
        <br />
        {weekDay.map((day, i) => {
          return (
            <>
              <br />
              <input
                class="form-check-input"
                key={day.day}
                type="checkbox"
                htmlFor="day"
                onChange={() => {
                  weekDay[i].Check = !weekDay[i].Check;
                }}
                name={{ day }}
                value={{ day }}
              />
              <label class="form-check-label" for="day">
                {' '}
                &nbsp; {day.day}
              </label>
            </>
          );
        })}
        <br />
        <br />
        <label htmlFor="hoursWork">Working Hours </label>
        <input
          className="form-control"
          {...register('hoursWork')}
          type="hours"
          placeholder="Enter Week Hours"
          name="hoursWork"
        />
        <br />
        <label htmlFor="payDate">Pay Date </label>
        <input
          className="form-control"
          {...register('payDate')}
          type="date"
          name="payDate"
        />
        <br />
        <label htmlFor="payDateFrom">Pay Date From </label>
        <input
          className="form-control"
          {...register('payDateFrom')}
          type="date"
          name="payDateFrom"
        />
        <br />
        {/* <span class="bg-secondary text-light p-1 rounded ">
          Salary for the month of {setDate}
        </span> */}
        {/* <br />
        <br /> */}
        <button
          className="form-control btn btn-primary"
          type="submit"
          value="Save & Continue →"
        >
          Save & Continue →
        </button>
      </form>
    </div>
  );
}

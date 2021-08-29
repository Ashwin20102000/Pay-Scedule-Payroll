import React from 'react';
import { useRef } from 'react';
import './style.css';
import { useForm } from 'react-hook-form';
export default function App() {
  const refer = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
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
    const update = () => {
      return <h4>Submitted</h4>;
    };
    update();
    return data;
  };
  return (
    <div class="form">
      {/* style={{ maxWidth: 680, marginLeft: 350}} */}
      <h1 className="text-light bg-dark p-4 ">Pay Schedule</h1>
      <form
        className="form-group m-5 p-2 px-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2>It's Time to set up your Pay Schedule</h2>
        <small class="form-text text-muted">
          tell us when and how when you pay your employees. We'll make they will
          be paid on time
        </small>
        <br />
        <label className="mt-4 mb-2" htmlFor="workWeek">
          Select Work Week <span class="text-danger ">*</span>
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
        <label htmlFor="hoursWork">
          Working Hours <span class="text-danger ">*</span>{' '}
        </label>
        <input
          className="form-control"
          {...register('hoursWork', { required: true })}
          type="hours"
          placeholder="Enter Week Hours"
          name="hoursWork"
        />
        {errors.hoursWork && (
          <p class="text-danger">*Working Hours is required.</p>
        )}
        <br />
        <label htmlFor="payDate">
          Pay Date <span class="text-danger ">*</span>{' '}
        </label>
        <input
          className="form-control"
          {...register('payDate', { required: true })}
          type="date"
          name="payDate"
        />
        {errors.payDate && <p class="text-danger">*Pay Date is required.</p>}
        <br />
        <label htmlFor="payDateFrom">
          Pay Date From <span class="text-danger ">*</span>
        </label>
        <input
          className="form-control"
          {...register('payDateFrom', { required: true })}
          type="date"
          name="payDateFrom"
        />
        {errors.payDateFrom && (
          <p class="text-danger">*Pay Date From is required.</p>
        )}
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

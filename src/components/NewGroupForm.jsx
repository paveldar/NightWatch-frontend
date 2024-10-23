import { useState } from "react";

const NewGroupForm = ({ createGroup }) => {
  const today = new Date();

  const [names, setNames] = useState("");
  const [startDate, setStartDate] = useState(today.toJSON().slice(0, 10));
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("19:00");
  const [endTime, setEndTime] = useState("05:00");

  // Limit endDate range based on provided startDate
  let minEndDate = new Date(startDate);
  let maxEndDate = new Date(startDate);
  minEndDate.setDate(minEndDate.getDate() + 1);
  maxEndDate.setDate(maxEndDate.getDate() + 10);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Split string of names into an array
    let namesArr = names.split(/\s*,\s*/);

    // Accept a maximum of 10 names in the array
    namesArr = namesArr.slice(0, 10);

    // Set max length of a name in the array to 10 chars
    const namesArrSanitized = namesArr.map((v) => v.slice(0, 10));

    const newGroup = {
      participants: namesArrSanitized,
      date_from: startDate,
      date_to: endDate,
      time_from: startTime,
      time_to: endTime,
    };
    createGroup(newGroup);
  };

  return (
    <>
      <div>
        <h3 id="newgroup-title">New Group</h3>
      </div>
      <section>
        <form className="group-form" onSubmit={handleSubmit}>
          <label>
            <span>Enter names:</span>
            <input
              className="form-control-lg border-0"
              type="text"
              name="names"
              placeholder="comma-separated (e.g. CJ, Ian)"
              maxLength="100"
              required
              value={names}
              onChange={(e) => setNames(e.target.value)}
            />
          </label>
          <br />
          <label>
            <span>Date from - to:</span>
            <input
              className="form-control-lg border-0"
              type="date"
              name="start-date"
              required
              min={today.toJSON().slice(0, 10) || null}
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <span></span>
            <input
              className="form-control-lg border-0"
              type="date"
              name="end-date"
              required
              min={minEndDate.toJSON().slice(0, 10) || null}
              max={maxEndDate.toJSON().slice(0, 10) || null}
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </label>
          <br />
          <label>
            <span>Time from - to:</span>
            <input
              className="form-control-lg border-0"
              type="time"
              name="start-time"
              min="19:00"
              max="01:00"
              step="1800"
              required
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
            <span></span>
            <input
              className="form-control-lg border-0"
              type="time"
              name="end-time"
              min="04:00"
              max="10:00"
              step="1800"
              required
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </label>
          <button type="submit" className="border-0" id="groupform-btn">
            Generate
          </button>
        </form>
      </section>
    </>
  );
};

export default NewGroupForm;

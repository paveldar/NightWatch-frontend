import Shift from "./Shift";
import React, { useState } from "react";

const Group = ({ group, deleteGroup }) => {
  const [selectedOption, setSelectedOption] = useState(
    group.shifts[0].date.from
  );
  const [deleteClicked, setDeleteClicked] = useState(false);

  return (
    <>
      <section>
        <select
          className="form-control-lg border-0"
          name="night-list"
          val={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          {group.shifts.map((shift, index) => (
            <option key={shift.date.from} value={shift.date.from}>
              Night {index + 1} ({shift.date.from} - {shift.date.to})
            </option>
          ))}
        </select>
      </section>

      {group.shifts.map((shift) => (
        <React.Fragment key={shift.date.from}>
          {shift.date.from === selectedOption ? (
            <Shift shift={shift.shift_slots} />
          ) : null}
        </React.Fragment>
      ))}

      <section>
        {!deleteClicked && (
          <button className="border-0" onClick={() => setDeleteClicked(true)}>
            Delete Group
          </button>
        )}
        {deleteClicked && (
          <>
            <p>Are you sure you want to delete the group?</p>
            <div className="confirm-wrapper">
              <button
                className="border-0"
                id="confirm-yes"
                onClick={() => deleteGroup(group.id)}
              >
                Yes
              </button>
              <button
                className="border-0"
                id="confirm-no"
                onClick={() => setDeleteClicked(false)}
              >
                No
              </button>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default Group;

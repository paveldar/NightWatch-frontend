import React from 'react'

const Shift = ({ shift }) => {
  return (
    <section>
      <table>
        <tbody>
        {shift && shift.map((shift_member) => (
          <React.Fragment key={shift_member.from}>
            <tr>
              <td>{shift_member.name}</td>
              <td>{shift_member.from} - {shift_member.to}</td>
            </tr>
          </React.Fragment>
        ))}
        </tbody>
      </table>
    </section>
  );
};

export default Shift;

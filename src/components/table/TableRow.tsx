import React from "react";
import CellActions from "../CellActions";
import {
  getCurrentAge,
  getFormatDate,
  getMeasure,
} from "../../utils/peopleFilter";

const TableRow: React.FC<{ person: Person }> = ({ person }) => {
  const age = getCurrentAge(person.curp);
  const formattedDate = getFormatDate(person.curp);
  const idealWeight = getMeasure(person.gender, person.height).toFixed(2);

  return (
    <tr className="show-tr odd:bg-base-300 even:bg-base-200 duration-500 transition-all hover:bg-slate-800">
      <td>{person.firstName}</td>
      <td>{person.lastName}</td>
      <td>{age} años</td>
      <td>{formattedDate}</td>
      <td>{person.weight}</td>
      <td>{person.height}</td>
      <td>{idealWeight}</td>
      <CellActions person={person} />
    </tr>
  );
};

export default TableRow;

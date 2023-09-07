import React from "react";
import TableRow from "./TableRow";

interface Props {
  people: Person[];
}

const Table: React.FC<Props> = ({ people }) => {
  return (
    <div className="w-full py-4">
      <table className="table table-features">
        <thead>
          <tr className="bg-blue-900 text-white">
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
            <th>Fecha De nacimiento</th>
            <th>Peso (Kg)</th>
            <th>Altura (mts)</th>
            <th>Peso Ideal (Kg)</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <TableRow key={person.id} person={person} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

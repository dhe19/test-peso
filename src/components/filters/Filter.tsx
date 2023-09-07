import React from "react";
interface Props {
  values: string[];
  onChange(p: string | number): void;
  value: string | number;
}
const Filter: React.FC<Props> = ({ values, onChange, value }) => {
  return (
    <select
      className="select select-bordered "
      onChange={(e) => onChange(e.target.value)}
      value={value}
    >
      <option value={""}>Ninguno</option>
      {values.map((e, i) => (
        <option value={e} key={i}>
          {e.toLocaleLowerCase()}
        </option>
      ))}
    </select>
  );
};

export default Filter;

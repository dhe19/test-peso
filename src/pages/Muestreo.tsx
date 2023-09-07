import { useEffect, useState } from "react";
import Table from "../components/table/Table";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";

import Promedios from "../components/promedios/Promedios";
import Filter from "../components/filters/Filter";
import {
  FilterByCategory,
  FilterByZone,
  filterByGender,
  filterByWeight,
} from "../utils/peopleFilter";
import Modal from "../components/Modal";
import { Category, Gender, Weights, Zone } from "../constants/constants";
const Muestreo = () => {
  const people = useSelector((state: RootState) => state.form.people);
  const [filteredPeople, setFilteredPeople] = useState<Person[]>();
  const [weight, setWeight] = useState<number | string>("");
  const [zone, setZone] = useState<number | string>("");
  const [gender, setGender] = useState<number | string>("");
  const [category, setCategory] = useState<number | string>("");

  useEffect(() => {
    handleFilters();
  }, [category, gender, zone, weight, people]);

  //debe de ser llamado por useEffect
  const handleFilters = () => {
    let temp = [...people];
    if (weight !== "") temp = filterByWeight(temp, Weights[weight]);
    if (zone !== "") temp = FilterByZone(zone as string, temp);
    if (gender !== "") temp = filterByGender(temp, gender as string);
    if (category !== "") temp = FilterByCategory(Category[category], temp);

    setFilteredPeople(temp);
    return temp;
  };

  return (
    <div className="mx-auto container flex flex-col gap-y-6 py-6">
      <h1 className="text-2xl font-semibold text-center lg:text-start">
        Filtros
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 justify-center items-center px-3 gap-3">
        <div className="flex flex-col">
          <h3 className="mb-2">Peso</h3>
          <Filter
            values={Object.keys(Weights)}
            value={weight}
            onChange={setWeight}
          />
        </div>
        <div className="flex flex-col">
          <h3 className="mb-2">Zona</h3>
          <Filter
            values={Object.values(Zone)}
            value={zone}
            onChange={setZone}
          />
        </div>
        <div className="flex flex-col">
          <h3 className="mb-2">Genero</h3>
          <Filter
            values={Object.values(Gender)}
            value={gender}
            onChange={setGender}
          />
        </div>
        <div className="flex flex-col">
          <h3 className="mb-2">Categoria</h3>
          <Filter
            values={Object.keys(Category)}
            value={category}
            onChange={setCategory}
          />
        </div>
      </div>
      {filteredPeople && (
        <div className="w-full overflow-x-scroll lg:overflow-hidden">
          <Table people={filteredPeople} />
        </div>
      )}
      <h1 className="text-4xl text-center font-bold">Promedios Nacionales</h1>
      <Promedios />
      <Modal />
    </div>
  );
};

export default Muestreo;

import {
  getPeopleByWeight,
  getZoneByWeight,
  zoneWeightAvarages,
} from "../../utils/consultas";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Category, Weights, Zone } from "../../constants/constants";
import { FilterByCategory, filterByWeight } from "../../utils/peopleFilter";
import AvarageCard from "../card/AvarageCard";

const Promedios = () => {
  const people = useSelector((state: RootState) => state.form.people);

  const getAvarage = (zone: string) =>
    zoneWeightAvarages(people, zone).toFixed(2);
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 px-2 gap-y-6">
      <AvarageCard
        title="promedio de peso en cada zona"
        result={`Sur: ${getAvarage(Zone.SOUTH)} \n
            Centro: ${getAvarage(Zone.CENTER)} \n
            Norte: ${getAvarage(Zone.NORTH)}`}
      />

      <AvarageCard
        title="Zona con mayor sobre peso"
        result={getZoneByWeight(filterByWeight(people, Weights.OVERWEIGHT))}
      />

      <AvarageCard
        title="Zona con más personas de bajo peso"
        result={getZoneByWeight(filterByWeight(people, Weights.UNDERWEIGHT))}
      />
      <AvarageCard
        title="Zona con más personas de la tercera edad con sobrepeso"
        result={getZoneByWeight(
          filterByWeight(
            FilterByCategory(Category.OLD, people),
            Weights.OVERWEIGHT
          )
        )}
      />
      <AvarageCard
        title="Zona con más adultos con sobrepeso"
        result={getZoneByWeight(
          filterByWeight(
            FilterByCategory(Category.ADULT, people),
            Weights.OVERWEIGHT
          )
        )}
      />
      <AvarageCard
        title="Total de Personas con peso normal"
        result={getPeopleByWeight(people, Weights.NORMAL)}
      />
      <AvarageCard
        title="Total de Personas con peso sobrepeso"
        result={getPeopleByWeight(people, Weights.OVERWEIGHT)}
      />
      <AvarageCard
        title="Total de Personas con bajo peso"
        result={getPeopleByWeight(people, Weights.UNDERWEIGHT)}
      />
      <AvarageCard
        title="Total de Personas con Obesidad"
        result={getPeopleByWeight(people, Weights.OBESITY)}
      />
    </div>
  );
};

export default Promedios;

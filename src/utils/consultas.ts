import { Zone } from "../constants/constants";
import { FilterByZone, getIMC, getWeight } from "./peopleFilter";


/**
 * Devuelve el peso promedio acorde a la zona
 * @param people array de personas
 * @param zone la zona que se deas obtener el promedio
 * @returns devuelve el promedio de peso
 */
export const zoneWeightAvarages = (people: Person[], zone: string) => {

    const peopleZone = FilterByZone(zone, people);

    const result = peopleZone.reduce((prev, current) => prev + current.weight, 0);

    return result / peopleZone.length;
}
/**
 * Este método devuelve la zona con mayor numero de personas que cumplen un critero
 * @param people el array debe ser filtrado acorde a tus necesidades
 * @returns devuelve la zona con mas personas
 */
export const getZoneByWeight = (people: Person[]): string => {
    const sur = people.reduce((prev, curr) => (curr.zone === Zone.SOUTH ? 1 : 0) + prev, 0);
    const centro = people.reduce((prev, curr) => (curr.zone === Zone.CENTER ? 1 : 0) + prev, 0);
    const norte = people.reduce((prev, curr) => (curr.zone === Zone.NORTH ? 1 : 0) + prev, 0);

    const values = {
        centro,
        sur,
        norte,
    };
    return Object.keys(values).reduce((a, b) => (values[a] > values[b] ? a : b));

}


/**
 * Este método devuelve una cantidad de personas acorde al peso deseado
 * @param people el array puede ser filtrado acorde a las nececidades
 * @param target el peso deseado
 * @returns el numero de personas que cumpler los requerimientos
 */
export const getPeopleByWeight = (people: Person[], target: number): number => people.reduce((prev, curr) => prev + getIMCByTargetWeight(curr, target), 0);

const getIMCByTargetWeight = (person: Person, target: number) => {
    const result = getWeight(getIMC(person.weight, person.height));

    return result == target ? 1 : 0;
}



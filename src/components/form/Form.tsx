import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPerson, updatePerson } from "../../store/formState";
import { RootState } from "../../store/store";
import { Gender } from "../../constants/constants";

interface Props {
  update?: boolean;
}

const Form: React.FC<Props> = ({ update }) => {
  const [persona, setPersona] = useState<Person>({} as Person);
  const dispatch = useDispatch();
  const person = useSelector((state: RootState) => state.form.person);

  useEffect(() => {
    setPersona(update ? person ?? ({} as Person) : ({} as Person));
  }, [person]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!update) dispatch(addPerson(persona));
    else dispatch(updatePerson(persona));

    setPersona({} as Person);
  };

  return (
    <form className="p-6 flex flex-col gap-y-[18px]" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribre tu Nombre..."
        value={persona.firstName ?? ""}
        onChange={(e) => setPersona({ ...persona, firstName: e.target.value })}
        className="input transition-all duration-300 focus:outline-blue-500 w-full"
      />
      <input
        type="text"
        placeholder="Escribre tu Apellido..."
        value={persona.lastName ?? ""}
        onChange={(e) => setPersona({ ...persona, lastName: e.target.value })}
        className="input transition-all duration-300 focus:outline-blue-500 w-full"
      />
      <input
        type="text"
        placeholder="Escribre tu CURP..."
        value={persona.curp ?? ""}
        onChange={(e) => setPersona({ ...persona, curp: e.target.value })}
        className="input transition-all duration-300 focus:outline-blue-500 w-full"
      />
      <input
        type="number"
        placeholder="Escribre tu Peso..."
        value={persona.weight ?? ""}
        onChange={(e) =>
          setPersona({ ...persona, weight: Number(e.target.value) })
        }
        className="input transition-all duration-300 focus:outline-blue-500 w-full"
      />
      <input
        type="number"
        placeholder="Cual es tu altura? [e.j: 1.75]"
        value={persona.height ?? ""}
        onChange={(e) =>
          setPersona({ ...persona, height: Number(e.target.value) })
        }
        className="input transition-all duration-300 focus:outline-blue-500 w-full"
      />
      Cual Es Tu Genero?
      <div className="flex justify-around">
        <div className="flex gap-2 items-center">
          <span className="label-text">Femenino</span>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-red-500"
            checked={persona.gender === Gender.Female}
            value={Gender.Female}
            onChange={(e) => setPersona({ ...persona, gender: e.target.value })}
          />
        </div>
        <div className="flex gap-2 items-center">
          <span className="label-text">Masculino</span>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-blue-500"
            checked={persona.gender === Gender.Male}
            value={Gender.Male}
            onChange={(e) => setPersona({ ...persona, gender: e.target.value })}
          />
        </div>
      </div>
      <div className="form-control w-full">
        <select
          className="select select-bordered"
          defaultValue={persona.zone ?? ""}
          onChange={(e) => setPersona({ ...persona, zone: e.target.value })}
        >
          <option disabled value={""}>
            Seleciona tu zona
          </option>
          <option value={"centro"}>Centro</option>
          <option value={"sur"}>Sur</option>
          <option value={"norte"}>Norte</option>
        </select>
      </div>
      <button className="btn bg-blue-500 text-white">Enviar</button>
    </form>
  );
};

export default Form;

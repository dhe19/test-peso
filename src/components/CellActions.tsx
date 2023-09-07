import React from "react";
import { useDispatch } from "react-redux";
import { deletePerson, setPerson } from "../store/formState";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";

interface Props {
  person: Person;
}

const CellActions: React.FC<Props> = ({ person }) => {
  const dispatch = useDispatch();

  const handleEditClick = () => {
    dispatch(setPerson(person));
    document.getElementById("modalWindow").showModal();
  };

  const handleDeleteClick = () => {
    dispatch(deletePerson(person.id));
  };

  return (
    <td className="flex gap-2 relative">
      <button
        onClick={handleEditClick}
        className="btn border-none bg-primary text-white group btn-circle"
      >
        <PencilSquareIcon className="w-5 h-5 text-white group-hover:text-green-500" />
      </button>
      <button
        onClick={handleDeleteClick}
        className="btn border-none group bg-primary btn-circle"
      >
        <TrashIcon className="w-5 h-5 text-white group-hover:text-red-500" />
      </button>
    </td>
  );
};

export default CellActions;

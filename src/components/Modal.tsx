import Form from "./form/Form";

const Modal = () => {
  return (
    <div>
      <dialog id="modalWindow" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-base-200">
          <Form update />
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;

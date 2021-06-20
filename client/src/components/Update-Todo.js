import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
const UpdateTodo = ({ todo }) => {
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState(todo.description);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(
        `http://localhost:5000/todos/${todo.todo_id}`,
        {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      console.log(response);
      window.location = "/";
      setOpen(false);
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <>
      <div>
        <h1 onClick={onOpenModal}>Edit</h1>
        <Modal open={open} onClose={onCloseModal} center>
          <h2 className="text-center text-3xl px-16 py-8 uppercase">
            Continuity is Neccessity.
          </h2>
          <form>
            <div className="">
              <input
                type="text"
                id="desc"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                placeholder={description || "Your New todo goes here.."}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="flex">
              <div className="pt-5 text-center flex-1">
                <button
                  type="submit"
                  className="bg-blue-500 py-2   text-white px-5 shadow rounded "
                  onClick={(e) => updateDescription(e)}
                >
                  UPDATE
                </button>
              </div>
              <div className="pt-5 text-center flex-1 ">
                <button
                  className="bg-red-500 py-2   text-white px-5 shadow rounded "
                  onClick={() => setOpen(false)}
                >
                  CLOSE
                </button>
              </div>
            </div>
          </form>
        </Modal>
      </div>
    </>
  );
};
export default UpdateTodo;

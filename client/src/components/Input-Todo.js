import React, { Fragment, useState } from "react";

const InsertTodo = () => {
  const [description, setDescription] = useState("");
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body),
      });
      //refresh the window
      window.location = "/";
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Fragment>
      <h2 className="text-center text-2xl md:text-3xl">ADD TODO</h2>
      <div className="m-auto h-2 w-20  mb-3 bg-green-500 rounded "></div>
      <form onSubmit={onSubmitForm}>
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
        <div className="pt-5 text-center ">
          <button
            type="submit"
            className="bg-blue-500 py-2   text-white px-5 shadow rounded "
            onSubmit={null}
          >
            ADD
          </button>
        </div>
      </form>
    </Fragment>
  );
};
export default InsertTodo;

import InsertTodo from "./components/Input-Todo";
import ListTodo from "./components/List-Todo";
function App() {
  return (
    <>
      <div className=" p-5 bg-blue-400 text-white">
        <h2 className="text-center text-3xl">PERN-TODO</h2>
      </div>
      <div className=" rounded m-auto mt-10 p-20 shadow-lg bg-white w-4/5 md:w-2/3 lg:w-1/2">
        <InsertTodo />
        <ListTodo />
      </div>
    </>
  );
}

export default App;

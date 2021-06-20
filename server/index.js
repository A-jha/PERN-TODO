const express = require("express");

const app = express();

const cors = require("cors");

const pool = require("./db");
//middleware
app.use(cors());

//Any time we building a full stack app we need data from client site
app.use(express.json()); //req.body

//Routes

//create a todo
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;

    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );
    res.json(newTodo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});
//get all todo
app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo ");
    res.json(allTodos.rows);
  } catch (error) {
    console.error(error.message);
  }
});
//get a todo
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const aTodo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.json(aTodo.rows);
  } catch (error) {
    console.error(error.message);
  }
});

//update todos
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updatedTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, id]
    );
    res.json("updated todo");
  } catch (error) {
    console.error(error.message);
  }
});
// delete a todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROm todo WHERE todo_id = $1", [
      id,
    ]);
    res.json("deleted");
  } catch (error) {
    console.error(error.message);
  }
});
const port = 5000;
app.listen(port, () => {
  console.log(`server has started on port : ${port}`);
});

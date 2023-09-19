import Link from "next/link";
import { prisma } from "./db";
import { TodoItem } from "./components/TodoItem";

// Usually its best practice to create call data with a seperate function as seen below.
function getTodos() {
  // this function finds the todos in the prisma database then retrns them with the await getTodos(); function below...(in the return)
  return prisma.todo.findMany({
    where: {
      complete: false,
    },
  });
}

// Below is function for deleting completed todos
// async const completeTodo = await prisma.todo.delete({
//   where: {
//     id: {
//       in: todo.map((a) => a.id),
//     },
//   },
// });
// // Below is a function that deleted if the todo complete = true...
// function completeTodo() {
//   return prisma.todo.delete();
// }

// The toggleTodo function below makes sure that the slected or deselected todo is remembered.. this doesen't create todos...
async function toggleTodo(id: string, complete: boolean) {
  "use server";

  await prisma.todo.update({ where: { id }, data: { complete } });
}

export default async function Home() {
  const todos = await getTodos();
  // await prisma.$transaction([deleteTasks]);
  // const complete = await completeTodo();
  // const todos = await prisma.todo.findMany(); // Calling server code in the component
  // With React you would fetch the todos, with a Fetch or useQuery, to get the todos, but with NextJS we got ServerComponents and can use the App router, to call server code in out components

  // A fake todo being added below
  //await prisma.todo.create({ data: { title: "Fake todo", complete: false } });

  return (
    <>
      {/* Header section with to do list */}
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Todos</h1>
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href="/new"
        >
          New
        </Link>
        {/* Client routing like in a normal react application*/}
      </header>
      {/* Section where UL list of todos will be going */}
      <ul className="pl-4">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            toggleTodo={toggleTodo}
            // complete={complete}
          /> // The {...todo} passes in all the todo information into the TodoItem component
        ))}
      </ul>
    </>
  );
}

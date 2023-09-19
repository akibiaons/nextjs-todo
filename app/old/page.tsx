import React from "react";
import Link from "next/link";
import { prisma } from "../db";
import { redirect } from "next/navigation";
import { TodoItem } from "../components/TodoItem";

// The interface and const OldTodosPage was made based off the admin clone...
// interface completeTodosProps {
//   params: { todoId: string; title: string };
// }

// const OldTodosPage: React.FC<completeTodosProps> = async ({ params }) => {
//   const todo = await prisma.todo.delete({
//     where: {
//       id: params.todoId,
//       title: params.title,
//     },
//   });
//   return (
//     <>
//       <header className="flex justify-between items-center mb-4">
//         <h1 className="text-2xl">Completed Tasks</h1>
//       </header>
//       {/* Only want to import completed tasks */}
//       <ul>
//         <p>Completed todos:</p>
//         {/* {todo.title} */}
//       </ul>
//     </>
//   );
// };

// export default OldTodosPage;

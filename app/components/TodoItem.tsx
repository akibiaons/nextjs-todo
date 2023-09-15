"use client";

type TodoItemProps = {
  // Remember the typescript course, we have the type declared with todo item props that are assigned to a type. - @9:53am 9/15
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
};
export function TodoItem({ id, title, complete, toggleTodo }: TodoItemProps) {
  // todoitem props are called, {id}, {title}, completed has not yet been called - @9:53am 9/15
  return (
    <li className="flex gap-1 items-center">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
      >
        {title}
      </label>
    </li>
  );
}

import { useRef, useState } from "react";

import { AiFillDelete } from "react-icons/ai";
import "./Tailwind.css";

const List = () => {
  const [list, setList] = useState<string[]>([]);
  const listItem = useRef<HTMLInputElement>(null);

  const onAdd: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setList([...list, listItem.current?.value as string]);
    listItem.current!.value = "";
  };

  function onDelete(idx: number) {
    setList(list.filter((el) => el != list[idx]));
  }

  console.log(list);

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-5xl font-bold ">List</h1>
      <form action="" className="flex gap-2">
        <input
          type="text"
          ref={listItem}
          placeholder="Item name"
          className="py-1 px-2 text-center bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={onAdd}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.currentTarget.click();
            }
          }}
          className="py-1 px-2 ring-1 ring-indigo-400 active:scale-95 hover:bg-indigo-400 hover:text-white  transition-all"
        >
          Add
        </button>
      </form>
      <div className="flex flex-col gap-2">
        {list.map((item, idx) => (
          <div
            key={idx}
            className="p-2 flex gap-2 items-center text-center bg-gray-300 rounded-xl"
          >
            <p className="flex-1">{item}</p>
            <button
              onClick={() => onDelete(idx)}
              className="text-red-400 hover:text-red-600 hover:scale-125 transition-all border-0"
            >
              <AiFillDelete />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;

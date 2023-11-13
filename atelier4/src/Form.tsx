import { useRef } from "react";
// import "./App.css";
import "./Tailwind.css";

const Form = () => {
  const name = useRef<HTMLInputElement>(null);
  const age = useRef<HTMLInputElement>(null);

  return (
    <div>
      <h1 className="text-5xl font-bold mb-2">Form</h1>
      <form action="" className="flex flex-col gap-2">
        <input
          type="text"
          ref={name}
          placeholder="Name"
          className="py-1 px-2 text-center bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="number"
          ref={age}
          placeholder="Age"
          className="py-1 px-2 text-center bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log(name.current?.value, Number(age.current?.value));
            alert(
              `Hello, ${name.current?.value} vous avez ${age.current?.value} ans!`
            );
          }}
          className="py-1 px-2 ring-1 ring-indigo-400 active:scale-95 hover:bg-indigo-400 hover:text-white  transition-all"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;

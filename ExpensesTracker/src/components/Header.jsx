export default function Header() {
  return (
    <nav className="bg-slate-800 fixed top-0 w-full shadow z-50">
      <div className="px-5 py-4 flex justify-end items-center gap-10 text-white font-medium ">
        <ul className="flex gap-6">
          <li className="list-none ">
            <button className="border bg-white text-slate-700 px-3 py-1 rounded-md cursor-pointer">
              Home
            </button>
          </li>
          <li className="list-none ">
            <button className="border bg-white text-slate-700 px-3 py-1 rounded-md cursor-pointer">
              About
            </button>
          </li>
          <li className="list-none ">
            <button className="border bg-white text-slate-700 px-3 py-1 rounded-md cursor-pointer">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

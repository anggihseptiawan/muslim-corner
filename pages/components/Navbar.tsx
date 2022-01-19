import { FiMoon } from 'react-icons/fi';

export function Navbar() {
  return (
    <div className="container flex justify-between py-2 px-4 md:px-0 lg:px-28">
      <h5 className="text-lg font-bold" style={{ color: '#0199b3' }}>
        Muslim Corner
      </h5>
      <div className="flex">
        <h3>muslimcorner@gmail.com</h3>
        <div className="ml-2 p-1 cursor-pointer rounded-sm">
          <FiMoon />
        </div>
      </div>
    </div>
  );
}

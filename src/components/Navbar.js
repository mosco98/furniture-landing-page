const Navbar = () => {
  return (
    <div className="px-20 py-4 absolute top-0 w-full bg-transparent flex items-center justify-between">
      <h1 className="font-extralight italic text-2xl text-white opacity-95">
        Furnitures.com
      </h1>
      <ul className="flex items-center text-white opacity-95 font-medium space-x-9">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">About us</li>
        <li className="cursor-pointer">Collections</li>
        <li className="cursor-pointer">Contact us</li>
        <li className="cursor-pointer bg-gray-800 px-5 py-1 rounded-3xl">
          Login
        </li>
      </ul>
    </div>
  )
}

export default Navbar

const Header = () => {
  return (
    <div className="p-2 flex justify-between items-center shadow-md">
      <div>
        <img
          className="w-30 cursor-pointer"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&txt_keyword=All"
        />
      </div>
      <div className="nav-items">
        <ul className="flex text-lg font-medium">
          <li className="p-5 m-3 cursor-pointer ">Home</li>
          <li className="p-5 m-3 cursor-pointer ">About Us</li>
          <li className="p-5 m-3 cursor-pointer ">Contact Us</li>
          <li className="p-5 m-3 cursor-pointer ">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

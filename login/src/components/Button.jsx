const Button = (props) => {
    const {onClick, size, type, children} = props
  return (
    <button
      onClick={onClick}

      type={type}
      className={`${size} border cursor-pointer text-black rounded-lg border-gray-600 hover:bg-black hover:text-white duration-300
      `}
    >
      {children}
    </button>
  );
};

export default Button
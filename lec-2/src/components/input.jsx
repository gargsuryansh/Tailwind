export const Input = ({
    onClick,
    type,
    placeholder,
  }) => {
    return (
      <span
        onClick={disabled ? undefined : onClick} // Prevent clicks if disabled
        className={` rounded-2xl text-4xl px-32 py-8 text-white cursor-pointer 
          "bg-blue-200 " 
        `}>
      <input type={type} placeholder={placeholder}></input>
      </span>
    );
  };
  
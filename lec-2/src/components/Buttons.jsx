export const Button = ({
    disabled,
    children,
    onClick,
  }) => {
    return (
      <span
        onClick={disabled ? undefined : onClick} // Prevent clicks if disabled
        className={` rounded-2xl text-4xl px-20 py-8 text-white cursor-pointer ${
          disabled ? "bg-blue-200 cursor-not-allowed" : "bg-green-400"
        }`}
      >
        {children}
      </span>
    );
  };
  
const InputItem = ({ value, count, stock, setCount }) => {
  const invalidStock = () => stock - count === 0 && true;

  const handleClickPositive = () => setCount(count + 1);

  return (
    <input
      type="button"
      value={value}
      className={`text-3xl cursor-pointer rounded h-10 w-10 ${
        count >= stock
          ? "text-gray-400 cursor-default"
          : "hover:bg-slate-200 text-blue-500 hover:shadow"
      }`}
      onClick={handleClickPositive}
      disabled={invalidStock()}
    />
  );
};

export default InputItem;
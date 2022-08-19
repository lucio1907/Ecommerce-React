const inputItemRemove = ({ value, count, stock, setCount }) => {
  const invalidValue = () => count <= 0 && true;

  const handleClickNegative = () => setCount(count - 1);

  return (
    <input
      type="button"
      value={value}
      className={`text-3xl cursor-pointer rounded h-10 w-10 ${
        count <= 0
          ? "text-gray-400 cursor-default"
          : "hover:bg-slate-200 text-blue-500 hover:shadow"
      } ${stock === 0 && "text-gray-400"}`}
      onClick={handleClickNegative}
      disabled={invalidValue()}
    />
  );
};

export default inputItemRemove;
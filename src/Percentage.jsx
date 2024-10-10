// eslint-disable-next-line react/prop-types
function Percentage({ text, percentage, onSelect }) {
  return (
    <div className="flex text-xl font-semibold gap-4 items-center">
      <p>{text}</p>
      <select
        name=""
        id=""
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Disatisfied (0%)</option>
        <option value="5">It was Ok (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}

export default Percentage;

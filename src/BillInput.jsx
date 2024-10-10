// eslint-disable-next-line react/prop-types
function BillInput({ bill, onSetBill }) {
  return (
    <div className="flex text-xl font-semibold gap-4 items-center">
      <label>How much was the bill?</label>
      <input
        className="text-xl rounded-lg p-1"
        type="text"
        placeholder="Total Bill"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

export default BillInput;

// eslint-disable-next-line react/prop-types
function Total({ bill, tip }) {
  return (
    <h3 className="font-bold text-4xl p-8">
      You Pay ${bill + tip} (${bill === 0 ? "0" : bill} + ${tip} tip)
    </h3>
  );
}

export default Total;

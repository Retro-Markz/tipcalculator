// eslint-disable-next-line react/prop-types
function Reset({ children, Ui, functions }) {
  return (
    <button className={Ui} onClick={functions}>
      {children}
    </button>
  );
}

export default Reset;

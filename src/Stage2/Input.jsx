function Input({ id, value, className, colorRef }) {
  return (
    <>
      <input
        type='radio'
        name='color'
        id={id}
        value={value}
        ref={colorRef}
        defaultChecked={`${colorRef}.current.checked`}
      />
      <label htmlFor={id}>
        <span className={className}></span>
      </label>
    </>
  );
}

export default Input;

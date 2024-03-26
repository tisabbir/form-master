import useInputState from "../Hooks/useInputState";

const HookForm = () => {
  const nameState = useInputState("rajani");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form data", nameState.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          {...nameState}
          className="input input-primary"
          type="text"
          name="name"
        />
        <br />
        <br />
        <input className="input input-primary" type="email" name="email" />
        <br />
        <br />
        <input className="input input-primary" type="number" name="phone" />
        <br />
        <br />
        <input className="btn btn-primary" type="submit" value="submit" />
      </form>
    </div>
  );
};

export default HookForm;

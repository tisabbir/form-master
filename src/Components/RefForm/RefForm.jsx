import { useEffect, useRef } from "react";

const RefForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
  };

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const nameRef = useRef(null);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          ref={nameRef}
          className="input input-primary"
          type="text"
          name="name"
        />
        <br />
        <br />
        <input
          defaultValue={"Rajani@sajani.com"}
          className="input input-primary"
          type="email"
          name="email"
        />
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

export default RefForm;

const SimpleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.phone.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className="input input-primary" type="text" name="name" />
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

export default SimpleForm;

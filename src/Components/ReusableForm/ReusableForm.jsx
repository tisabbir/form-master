const ReusableForm = ({
  formTitle,
  btnName = "Submit",
  handleSubmit,
  children,
}) => {
  const handleLocalSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
    };
    handleSubmit(data);
  };
  return (
    <div className="text-center space-y-2">
      <h2 className="text-2xl font-bold">{formTitle}</h2>
      {children}
      <form onSubmit={handleLocalSubmit}>
        <input className="input input-primary" type="text" name="name" />
        <br />
        <br />
        <input className="input input-primary" type="email" name="email" />
        <br />
        <br />
        <input className="input input-primary" type="number" name="phone" />
        <br />
        <br />
        <input className="btn btn-primary" type="submit" value={btnName} />
      </form>
    </div>
  );
};

export default ReusableForm;

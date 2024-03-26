import "./App.css";
import ReusableForm from "./Components/ReusableForm/ReusableForm";

function App() {
  const handleSingUpSubmit = (data) => {
    console.log("sign up data", data);
  };
  const handleUpdateProfile = (data) => {
    console.log("Profile update data", data);
  };
  return (
    <>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm
        formTitle={"SignUp"}
        btnName={"Sign Up"}
        handleSubmit={handleSingUpSubmit}
      >
        <div>
          <h1>Please Provide all valid infos while sign up</h1>
        </div>
      </ReusableForm>
      <ReusableForm
        formTitle={"Profile Update"}
        handleSubmit={handleUpdateProfile}
      >
        <div>
          <h2>Always update your profile when needed</h2>
        </div>
      </ReusableForm>
    </>
  );
}

export default App;

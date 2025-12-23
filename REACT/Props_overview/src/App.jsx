import "./App.css";

import { Form } from "./Components/Form";
import { PropsOverview } from "./Components/PropsOverview";
import { PropsValidations } from "./Components/PropsValidation";

function App() {
  const field = [
    {
      name: "userName",
      id: "userName",
      label: "user name",
      type: "text",
      isRequired: true,
      placeholder: "enter your name",
    },
    {
      name: "userEmail",
      id: "userEmail",
      label: "user email",
      type: "email",
      isRequired: true,
      placeholder: "enter your email",
    },
    {
      name: "userPhone",
      id: "userPhone",
      label: "phone",
      type: "tel",
      isRequired: true,
      placeholder: "enter your phone",
    },
    {
      name: "userPass",
      id: "userPass",
      label: "password",
      type: "password",
      isRequired: true,
      placeholder: "enter your password",
    },
    {
      name: "userConfirmPass",
      id: "userconfirmpass",
      label: "Confirm Password",
      type: "password",
      isRequired: true,
      placeholder: "enter your confirm password",
    },

  ];

  const finallySubmit = (data) => {
    console.log('Form Data:', data);
  };

  return (
    <>
      {/* <PropsOverview
        components={1}
        name="NISHAD"
        email="nishadahamadm@gmail.com"
        phone={9199839397}
      />

      <PropsOverview
        components={2}
        name="Nishad Ahmad"
        email="nishadahmadm@gmail.com"
      />

      <PropsOverview />

      <PropsValidations label="Nishad" length={2} /> */}

      <Form formData={field} 
       btnValue="Submit"
        funcValue={finallySubmit}      
      />
    </>
  );
}

export { App };

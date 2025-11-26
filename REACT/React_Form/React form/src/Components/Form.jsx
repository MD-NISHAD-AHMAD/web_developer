

import { CustomForm } from "./customComponents.jsx";

export const Form = () => {

    const fields = [
        {
        name: 'username', type: 'text', placeholder: 'Enter your username',
        label: 'Username', requried: true
        },
        
        {
            name: 'email', type: 'email', placeholder: 'Enter your email',
            label: 'Email', required: true
        },

        {
            name: 'password', type: 'password', placeholder: 'Enter your password',
            label: 'password', required: true
            
        },

        {
            name: 'confirmPassword', type: 'password', placeholder: 'Enter your confirmpassword',
            label: 'password', required: true
        },

        {
            name: 'phone', type: 'tel', placeholder: 'Enter your number',
            label: 'phone', required: true
        },
    ];

    const handleFormSubmit = (data) => {
        console.log('Form Submitted:', data);
    };

    return (
        
        <>
        <div>
        <h1> React forms with props vaildation</h1>
        <CustomForm
           fields={fields}
           onSubmit={handleFormSubmit}
           button Text="Register" />
           </div>
        </>
        
    )

}
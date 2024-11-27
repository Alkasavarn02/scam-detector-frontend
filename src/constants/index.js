export const loginFormFields = [
    {
        id: 1,
        label: 'Email',
        type: 'text',
        name: 'email',
        placeholder: 'Email',
        classes: '',
    },
    {
        id: 2,
        label: 'Password',
        type: 'password',
        name: 'password',
        placeholder: 'Password',
        classes: '',
    }
];

export const ReportScamFormField = (screen) => [
    {
        id: 1,
        label: 'Value',
        type: 'text',
        name: 'value',
        placeholder: 'Value',
        classes: '',
    },
    {
        id: 2,
        label: 'Details',
        type: 'text',
        name: 'details',
        placeholder: 'Details',
        classes: '',
        hidden : screen === "scam-lookup"
    },
].filter((item)=>!item.hidden)


export interface IFormField {
    label: string;
    name: string;
    type: 'text' | 'select' | 'number';
    options?: string[];
    renderCondition?: {};
}

const formConfig: IFormField[] = [
    {
        label: 'Full Name',
        name: 'fullName',
        type: 'text',
    },
    {
        label: 'Gender',
        name: 'gender',
        type: 'select',
        options: ['Male', 'Female', 'Other'],
    },
    {
        label: 'Specify Gender',
        name: 'specifyGender',
        type: 'text',
        renderCondition: [
            {
                type: "and",
                conditions: [
                    {
                        field: "gender",
                        operator: "===",
                        value: "Other"
                    }
                ]
            }
        ]
    },
    {
        label: 'Age',
        name: 'age',
        type: 'number',
    },
    {
        label: 'Do you Drink',
        name: 'doYouDrink',
        type: 'select',
        options: ['Yes', 'No'],
        renderCondition: [
            {
                type: "and",
                conditions: [
                    {
                        field: "age",
                        operator: ">=",
                        value: 18
                    },
                    {
                        type: "or",
                        conditions: [
                            {
                                field: "gender",
                                operator: "===",
                                value: "Male"
                            },
                            {
                                field: "gender",
                                operator: "===",
                                value: "Female"
                            },
                        ]
                    },
                    
                ]
            }
        ]
    },
    {
        label: 'Occupation',
        name: 'occupation',
        type: 'text',
    },
    {
        label: 'Favorite Programming Language',
        name: 'programmingLanguage',
        type: 'select',
        options: ['JavaScript', 'Python', 'Java', 'C#', 'Other'],
    },
    {
        label: 'Years of Experience',
        name: 'experienceYears',
        type: 'number',
    },
    {
        label: 'Favorite Music Genre',
        name: 'musicGenre',
        type: 'select',
        options: ['Rock', 'Pop', 'Hip Hop', 'Classical', 'Other'],
    },
    {
        label: 'Number of Pets',
        name: 'numberOfPets',
        type: 'number',
    },
// Add new fields here
];

export default formConfig;
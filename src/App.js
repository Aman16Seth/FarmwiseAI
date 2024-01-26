// Import necessary Redux components
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Dynamic  from './components/Dynamic';

const initialState = {
    fields: [],
    selectedFieldType: 'Select Field Type',
    fieldGenerated: false,
    dataType: 'Select',
    newField: {
        displayName: '',
        dataType: 'text',
        maxLength: '',
        mandatory: 'yes',
        fieldData: '',
        minDate: '',
        maxDate: '',
    },
    selectedProfile: 'Select',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FIELD':
            return {
                ...state,
                fields: [...state.fields, action.payload],
            };
        case 'SET_FIELD_GENERATED':
            return {
                ...state,
                fieldGenerated: action.payload,
            };
        default:
            return state;
    }
};

const store = createStore(reducer);

export const App = () => (
    <Provider store={store}>
        <Dynamic />
    </Provider>
);
export default App;
export const ADD_FIELD = 'ADD_FIELD';
export const SET_FIELD_GENERATED = 'SET_FIELD_GENERATED';
export const SET_DATA_TYPE = 'SET_DATA_TYPE';
export const SET_NEW_FIELD = 'SET_NEW_FIELD';
export const SET_SELECTED_FIELD_TYPE = 'SET_SELECTED_FIELD_TYPE';
export const SET_SELECTED_PROFILE = 'SET_SELECTED_PROFILE';

export const addField = (field) => ({
    type: ADD_FIELD,
    payload: field,
});

export const setFieldGenerated = (value) => ({
    type: SET_FIELD_GENERATED,
    payload: value,
});

export const setDataType = (dataType) => ({
    type: SET_DATA_TYPE,
    payload: dataType,
});

export const setNewField = (field) => ({
    type: SET_NEW_FIELD,
    payload: field,
});

export const setSelectedFieldType = (fieldType) => ({
    type: SET_SELECTED_FIELD_TYPE,
    payload: fieldType,
});

export const setSelectedProfile = (profile) => ({
    type: SET_SELECTED_PROFILE,
    payload: profile,
});


export const ADD_TO_QUERYSTRING = "ADD_TO_QUERYSTRING";
export const addToQuerystring = newQuery => ({
    type: ADD_TO_QUERYSTRING,
    newQuery
})
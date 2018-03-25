

// export const ADD_TO_QUERYSTRING = "ADD_TO_QUERYSTRING";
// export const addToQuerystring = newQuery => ({
//     type: ADD_TO_QUERYSTRING,
//     newQuery
// })

export const PASS_API_ROOT_DATA = "PASS_API_ROOT_DATA";
export const passApiRootData = (data, host) => ({
    type: PASS_API_ROOT_DATA,
    data,
    host
})

export const PASS_API_PATH = "PASS_API_PATH";
export const passApiPath = (path) => ({
    type: PASS_API_PATH,
    path
})
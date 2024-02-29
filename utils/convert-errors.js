export const convertErrors = (errors) => {
    const errorObject = {};
    for (const error of errors) {
        const path = error.path.join(".");
        errorObject[path] = error.message;
    }
    return errorObject;
};
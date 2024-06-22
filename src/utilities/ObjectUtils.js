export const isObjectEmpty = (objectName) => {
  return (
    objectName &&
    Object.keys(objectName).length === 0 &&
    objectName.constructor === Object
  );
};

export const isJSONObject = (obj) => {
  return obj !== null
    &&
    typeof obj === 'object'
    &&
    obj.constructor === Object;
}

export const isJsonString = (str) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
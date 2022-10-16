export const displayErrorMessage = (error) => {
  return error?.response?.data?.message || error.message;
};

export const debounce = (callbackFn, wait = 500) => {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      callbackFn(...args);
    }, wait);
  };
};

export const getType = (val) => {
  return Object.prototype.toString
    .call(val)
    .match(/\s([a-zA-Z]+)/)[1]
    .toLowerCase();
};

export const sort = (data, pathToParam) => {
  if (getType(data) === "array") {
    const callbackSorting = (firstEl, secondEl) => {
      let firstVal = secondEl;
      let secondVal = firstEl;

      // eslint-disable-next-line no-unused-expressions
      pathToParam &&
        pathToParam.split(".").forEach((idx) => {
          firstVal = firstVal[idx];
          secondVal = secondVal[idx];
        });

      if (getType(firstVal) === "string" && getType(secondVal) === "string") {
        return firstVal.toUpperCase() > secondVal.toUpperCase() ? 1 : -1;
      }
      return firstVal - secondVal;
    };
    return data.sort(callbackSorting);
  }
  throw Error("Only sort data of array type");
};

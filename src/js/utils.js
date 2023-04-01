const setStorage = (source) => {
  const sendJSON = JSON.stringify(source);
  localStorage.setItem("movies", sendJSON);
};

export { setStorage };

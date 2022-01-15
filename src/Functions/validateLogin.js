const validate = (account, loginInfo) => {
  const keys1 = Object.keys(account);
  const keys2 = Object.keys(loginInfo);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (account[key] !== loginInfo[key]) {
      return false;
    }
  }

  return true;
};

export default validate;

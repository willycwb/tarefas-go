export const generateUniqueKey = () => {
  return Date.now().toString(36) + "_" + Math.random().toString(36).slice(2);
};

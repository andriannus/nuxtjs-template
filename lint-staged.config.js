module.exports = {
  "*.{js,jsx,ts,tsx,vue}": (filenames) => {
    const onOneLine = filenames.join(" ");
    return `npm run lint:script -- ${onOneLine}`;
  },

  "*.{css,scss,vue}": (filenames) => {
    const onOneLine = filenames.join(" ");
    return `npm run lint:style -- ${onOneLine}`;
  },
};

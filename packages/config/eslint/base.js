module.exports = {
  extends: ["next", "next/core-web-vitals", "prettier"],
  plugins: ["@next/eslint-plugin-next"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "@next/next/no-html-link-for-pages": "off"
  }
};

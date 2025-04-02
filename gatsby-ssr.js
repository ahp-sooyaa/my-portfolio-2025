import * as React from "react"

export const onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/InterVariable.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
  ]);

  setHtmlAttributes({
    className: getInitialDarkMode(), // Set `dark` mode before hydration
  });
}
  
const getInitialDarkMode = () => {
    const savedMode = JSON.parse(
        typeof window !== "undefined" ? localStorage.getItem("darkMode") : "null"
    );

    if (savedMode !== null) {
        return savedMode ? "dark" : "";
    }

    const systemPrefersDark =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

    return systemPrefersDark ? "dark" : "";
};
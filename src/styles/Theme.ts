export const darkModeFontColor = "rgb(240, 240, 240)";
export const darkModeContainerColor = " rgba(0, 0, 0, 0.483)";
export const darkModeBoxShadow = "rgba(121, 121, 121, 0.096) 0px 10px 10px 0px";
export const lightModeFontColor = "rgb(10, 10, 10)";
export const lightModeContainerColor = " rgba(255, 255, 255, 0.483)";
export const lightModeBoxShadow = "rgba(99, 99, 99, 0.085)  0px 10px 10px 0px";

export const colorSelector = (displayMode: string, type: string) => {
  if (displayMode === "dark") {
    if (type === "font") {
      return darkModeFontColor;
    } else if (type === "container") {
      return darkModeContainerColor;
    }
  } else if (displayMode === "light") {
    if (type === "font") {
      return lightModeFontColor;
    } else if (type === "container") {
      return lightModeContainerColor;
    }
  }
};

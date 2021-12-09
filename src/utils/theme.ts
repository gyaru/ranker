import * as CSS from 'csstype';

interface ThemeMedia {
  mobile?: string;
  web?: string;
  tablet?: string;
}

export interface Theme {
  fontFamily: string;
  colorPrimary: string;
  colorSecondary: string;
  colorRed: string;
  colorGreen: string;
  colorBlue: string;
  colorAmber: string;
  colorGrey: string;
  colorDark: string;
  textDark: string;
  textSecondary: string;
  textLight: string;
  colorRandom(): string;
  colorActive: string;
  media: ThemeMedia;
}

const colorGreen = "#4caf50";
const colorBlue = "#2196f3";
const colorAmber = "#ff9800";
const theme: Theme = {
  fontFamily: `"CircularStd",-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol`,
  colorPrimary: "#008489",
  colorSecondary: "#ff5960",
  colorRed: "#f44336",
  colorGreen,
  colorBlue,
  colorAmber,
  colorGrey: "#69696b",
  colorActive: "#04d2ac",
  colorDark: "#292c3e",
  textDark: "#505050",
  textSecondary: "#906e62",
  textLight: "#dadde1",
  media: {
    mobile: "@media all and (max-width: 414px)"
  },
  colorRandom: (): string => {
    const number = Math.floor(Math.random() * 3);

    if (number === 0) return colorGreen;

    if (number === 1) return colorBlue;

    return colorAmber;
  }
};

export default theme;

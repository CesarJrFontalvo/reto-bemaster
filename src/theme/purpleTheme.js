import { createTheme } from "@mui/material";
import { purple, red } from "@mui/material/colors";

export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#262254'
        },
        secondary: {
            main: '#543884'
        },
        error: {
            main: red.A400
        }
    }
})
export const darkTheme = createTheme({
    palette: {
        primary: {
            main: '#1a1d29',
            light: '#757ce8',
        },
        secondary: {
            main: '#F9F9F9'
        },
        error: {
            main: red.A400
        }
    }
})
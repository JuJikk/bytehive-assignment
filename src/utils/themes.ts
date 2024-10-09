import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#6366F1',
            light: '#B5BCC4',
            dark: '#111927',
        },
        secondary: {
            main: '#15B79E',
            light: '#6C737F',
        },
        background: {
            default: '#F3F4F6',
            paper: '#FFFFFF',
        },
        text: {
            primary: '#111927',
            secondary: '#6C737F',
        },
        divider: '#B5BCC4',
    },
});

export default theme;

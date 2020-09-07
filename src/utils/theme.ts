import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    typography: { fontFamily: '"Poppins", sans-serif' },
    palette: { primary: { main: '#5063f0' }, secondary: { main: '#5063f0' } },
    overrides: {
        MuiButton: {
            root: {
                borderRadius: '2rem'
            }
        },
        MuiSvgIcon: {
            root: {
                verticalAlign: 'sub'
            },
            fontSizeSmall: {
                fontSize: '0.875rem'
            }
        }
    }
})

export default theme

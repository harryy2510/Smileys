import { CssBaseline, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'

const useStyles = makeStyles(({ breakpoints: { up } }: Theme) => ({
    '@global': {
        html: {
            fontSize: 13,
            [up('sm')]: {
                fontSize: 14
            },
            [up('md')]: {
                fontSize: 15
            },
            [up('lg')]: {
                fontSize: 16
            }
        }
    }
}))

const ResetCSS: React.FC = () => {
    useStyles()
    return <CssBaseline />
}

export default ResetCSS

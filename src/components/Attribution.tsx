import React from 'react'
import { Link, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(({ breakpoints: { up, down }, spacing }: Theme) => ({
    root: {
        [down('md')]: {
            padding: spacing(4, 0)
        },
        [up('sm')]: {
            position: 'absolute',
            right: spacing(1),
            bottom: spacing(1)
        }
    }
}))

const Attribution: React.FC = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Link
                display="block"
                variant="caption"
                target="_blank"
                href="https://www.freepik.com/vectors/logo"
            >
                Logo vector created by maestro99 - www.freepik.com
            </Link>
            <Link
                display="block"
                variant="caption"
                target="_blank"
                href="https://www.freepik.com/vectors/background"
            >
                Background vector created by freepik - www.freepik.com
            </Link>
        </div>
    )
}

export default Attribution

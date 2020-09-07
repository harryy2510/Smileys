import { Theme, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import logoImg from '../assets/logo.svg'

const useStyles = makeStyles(
    ({ spacing, palette: { primary }, breakpoints: { up, down } }: Theme) => ({
        root: {
            display: 'flex',
            alignItems: 'center',
            color: primary.dark,
            [down('md')]: {
                padding: spacing(4, 0)
            },
            '& > img': {
                marginRight: spacing(2)
            },
            [up('sm')]: {
                position: 'absolute',
                left: spacing(4),
                top: spacing(4)
            }
        }
    })
)

const Branding: React.FC = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <img src={logoImg} alt="Smileys" width={48} />
            <Typography variant="h4" color="inherit">
                Smileys
            </Typography>
        </div>
    )
}

export default Branding

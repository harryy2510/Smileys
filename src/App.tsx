import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import bgImg from './assets/background.png'
import Attribution from './components/Attribution'
import Branding from './components/Branding'
import ResetCSS from './components/ResetCSS'
import SignUp from './components/SignUp'

const useStyles = makeStyles(({ spacing }: Theme) => ({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        overflow: 'auto',
        padding: spacing(0, 4),
        display: 'flex',
        margin: 'auto',
        flexDirection: 'column'
    },
    content: {
        margin: 'auto'
    }
}))

const App: React.FC = () => {
    const classes = useStyles()
    return (
        <>
            <ResetCSS />
            <div className={classes.container}>
                <div className={classes.content}>
                    <Branding />
                    <SignUp />
                    <Attribution />
                </div>
            </div>
        </>
    )
}

export default App

import { Button, ButtonProps, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'
import React from 'react'
import Loader from './Loader'

const useStyles = makeStyles(
    ({ palette: { primary }, shape: { borderRadius }, spacing, transitions }: Theme) => ({
        root: {
            // '&:before, &:after': {
            //     position: 'absolute',
            //     content: '""',
            //     width: '140%',
            //     height: '100%',
            //     left: '-20%',
            //     zIndex: -1000,
            //     transition: 'all ease-in-out 0.5s',
            //     backgroundRepeat: 'no-repeat',
            //     borderRadius: borderRadius
            // },
            //
            // '&:before': {
            //     // display: none;
            //     top: '-75%',
            //     backgroundImage: `radial-gradient(circle, ${primary.main} 20%, transparent 20%),
            //     radial-gradient(circle,  transparent 20%, ${primary.main} 20%, transparent 30%),
            //     radial-gradient(circle, ${primary.main} 20%, transparent 20%),
            //     radial-gradient(circle, ${primary.main} 20%, transparent 20%),
            //     radial-gradient(circle,  transparent 10%, ${primary.main} 15%, transparent 20%),
            //     radial-gradient(circle, ${primary.main} 20%, transparent 20%),
            //     radial-gradient(circle, ${primary.main} 20%, transparent 20%),
            //     radial-gradient(circle, ${primary.main} 20%, transparent 20%),
            //     radial-gradient(circle, ${primary.main} 20%, transparent 20%)`,
            //     backgroundSize:
            //         '10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 18% 18%',
            //     display: 'block',
            //     animation: '$topBubbles ease-in-out 0.75s forwards'
            // },
            //
            // '&:after': {
            //     // display: none;
            //     bottom: '-75%',
            //     backgroundImage: `radial-gradient(circle, ${primary.main} 20%, transparent 20%),
            //     radial-gradient(circle, ${primary.main} 20%, transparent 20%),
            //     radial-gradient(circle,  transparent 10%, ${primary.main} 15%, transparent 20%),
            //     radial-gradient(circle, ${primary.main} 20%, transparent 20%),
            //     radial-gradient(circle, ${primary.main} 20%, transparent 20%),
            //     radial-gradient(circle, ${primary.main} 20%, transparent 20%),
            //     radial-gradient(circle, ${primary.main} 20%, transparent 20%)`,
            //     backgroundSize: '15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%, 20% 20%',
            //     //background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%;
            //     display: 'block',
            //     animation: '$bottomBubbles ease-in-out 0.75s forwards'
            // }
            // '&:before': {
            //     display: 'block',
            //     animation: '$topBubbles ease-in-out 0.75s forwards'
            // },
            // '&:after': {
            //     display: 'block',
            //     animation: '$bottomBubbles ease-in-out 0.75s forwards'
            // }
        },
        // '@keyframes topBubbles': {
        //     '0%': {
        //         backgroundPosition:
        //             '5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%'
        //     },
        //     '50%': {
        //         backgroundPosition:
        //             '0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 90% 30%'
        //     },
        //     '100%': {
        //         backgroundPosition:
        //             '0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%, 50% 40%, 65% 10%, 90% 20%',
        //         backgroundSize: '0% 0%, 0% 0%,  0% 0%,  0% 0%,  0% 0%,  0% 0%'
        //     }
        // },
        // '@keyframes bottomBubbles': {
        //     '0%': {
        //         backgroundPosition: '10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%, 70% -10%, 70% 0%'
        //     },
        //     '50%': {
        //         backgroundPosition: '0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%, 105% 0%'
        //     },
        //     '100%': {
        //         backgroundPosition: '0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%, 110% 10%',
        //         backgroundSize: '0% 0%, 0% 0%,  0% 0%,  0% 0%,  0% 0%,  0% 0%'
        //     }
        // },
        loader: {
            width: 0,
            overflow: 'hidden',
            transition: transitions.create('width'),
            '&$loaderVisible': {
                width: 32
            }
        },
        loaderVisible: {},
        readOnly: {
            pointerEvents: 'none'
        }
    })
)

export interface LoadingButtonProps extends ButtonProps {
    loading?: boolean
}

const LoadingButton: React.FC<LoadingButtonProps> = ({ loading, children, ...props }) => {
    const classes = useStyles()
    return (
        <Button
            {...props}
            className={clsx(classes.root, props.className, loading && classes.readOnly)}
        >
            {children}
            <Loader className={clsx(classes.loader, loading && classes.loaderVisible)} />
        </Button>
    )
}

export default LoadingButton

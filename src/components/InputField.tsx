import clsx from 'clsx'
import { useFormikContext } from 'formik'
import React from 'react'
import { Fade, TextField, TextFieldProps, Theme, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { ErrorOutlined } from '@material-ui/icons'

const useStyles = makeStyles(({ palette: { action }, shape: { borderRadius } }: Theme) => ({
    root: {
        '& .MuiFilledInput-root': {
            backgroundColor: action.hover,
            borderRadius,
            overflow: 'hidden',
            '&:before': {
                content: 'none'
            }
        }
    }
}))

export type InputFieldProps = TextFieldProps & {
    name: string
}

const InputField: React.FC<InputFieldProps> = (props) => {
    const { values, handleChange, handleBlur, errors, touched } = useFormikContext<
        Record<string, string>
    >()
    const classes = useStyles()
    const showError = Boolean(touched[props.name] && errors[props.name])
    return (
        <>
            <TextField
                {...props}
                value={values[props.name]}
                onChange={handleChange(props.name)}
                onBlur={handleBlur(props.name)}
                className={clsx(classes.root, props.className)}
                error={showError}
            />
            <Fade in={showError}>
                <Typography display="block" variant="caption" color="error">
                    {errors[props.name] ? (
                        <>
                            <ErrorOutlined fontSize="small" /> {errors[props.name]}
                        </>
                    ) : (
                        '‎'
                    )}
                </Typography>
            </Fade>
        </>
    )
}

InputField.defaultProps = {
    size: 'small',
    margin: 'dense',
    variant: 'filled',
    fullWidth: true
}

export default InputField

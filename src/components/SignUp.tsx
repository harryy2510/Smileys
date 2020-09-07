import { IconButton, InputAdornment, Snackbar, Theme, Typography } from '@material-ui/core'
import { VisibilityOffOutlined, VisibilityOutlined } from '@material-ui/icons'
import { Alert, AlertProps } from '@material-ui/lab'
import { makeStyles } from '@material-ui/styles'
import { Form, Formik } from 'formik'
import React from 'react'
import initialValues from '../utils/initialValues'
import request from '../utils/request'
import validations from '../utils/validations'
import InputField from './InputField'
import LoadingButton from './LoadingButton'

const useStyles = makeStyles(({ typography: { fontWeightBold }, spacing }: Theme) => ({
    spacer: {
        margin: spacing(4, 0)
    },
    bold: {
        fontWeight: fontWeightBold
    },
    form: {
        marginTop: spacing(4),
        width: 440,
        maxWidth: `calc(100vw - ${spacing(8)}px)`
    },
    submitButton: {
        marginTop: spacing(4)
    }
}))

type FormValues = typeof initialValues

const SignUp: React.FC = () => {
    const [passwordFieldType, setPasswordFieldType] = React.useState('password')
    const [alertOpen, setAlertOpen] = React.useState(false)
    const classes = useStyles()
    const alertProps = React.useRef<{ message: string | null; severity: AlertProps['severity'] }>({
        message: null,
        severity: 'success'
    })

    const handleAlertClose = () => setAlertOpen(false)
    const handleSubmit = async (values: FormValues) => {
        try {
            const response = await request('/signup', {
                data: values
            })
            if (response.errors?.length) {
                alertProps.current = {
                    message: response.errors?.[0]?.message,
                    severity: 'error'
                }
            } else if (response.data) {
                alertProps.current = {
                    message: response.message,
                    severity: 'success'
                }
            }
        } catch (e) {
            alertProps.current = {
                message: e.message,
                severity: 'error'
            }
        }
        setAlertOpen(true)
    }
    const togglePasswordField = () =>
        setPasswordFieldType((type) => (type === 'password' ? 'text' : 'password'))

    return (
        <>
            <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleAlertClose}>
                <Alert
                    variant="filled"
                    onClose={handleAlertClose}
                    severity={alertProps.current.severity}
                >
                    {alertProps.current.message}
                </Alert>
            </Snackbar>
            <Typography gutterBottom className={classes.bold} variant="h4" color="primary">
                Create your account
            </Typography>
            <Typography variant="body2">You Make a Difference. We Make It Easier.</Typography>
            <Formik<FormValues>
                initialValues={initialValues}
                validationSchema={validations}
                onSubmit={handleSubmit}
            >
                {({ isValid, isSubmitting, touched }) => (
                    <Form className={classes.form}>
                        <InputField label="First Name" name="firstName" />
                        <InputField label="Last Name" name="lastName" />
                        <InputField label="Email" name="email" type="email" />
                        <InputField
                            label="Password"
                            name="password"
                            type={passwordFieldType}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={togglePasswordField} size="small">
                                            {passwordFieldType === 'password' ? (
                                                <VisibilityOffOutlined />
                                            ) : (
                                                <VisibilityOutlined />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                        <LoadingButton
                            className={classes.submitButton}
                            loading={isSubmitting}
                            color="primary"
                            fullWidth
                            variant="contained"
                            size="large"
                            type="submit"
                            disableElevation
                            disabled={!isValid || !Object.keys(touched).length}
                        >
                            Create Account
                        </LoadingButton>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default SignUp

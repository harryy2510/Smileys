import pDebounce from 'p-debounce'
import * as yup from 'yup'
import messages from './messages'
import request from './request'

const checkEmail = pDebounce(
    async (email: string) => await request('/check-user', { data: { email }, cache: true }),
    300
)

const validations = yup.object().shape({
    firstName: yup.string().min(2, messages.min).max(50, messages.max),
    lastName: yup.string().min(2, messages.min).max(50, messages.max),
    email: yup
        .string()
        .required(messages.required)
        .email(messages.email)
        .max(320, messages.max)
        .test('does not exist', messages.exists, async (value) => {
            if (value && /\S+@\S+\.\S+/.test(value.toLowerCase())) {
                try {
                    const response = await checkEmail(value!)
                    return response.data.status === 'OK'
                } catch (e) {
                    return true
                }
            }
            return true
        }),
    password: yup.string().required(messages.required).min(6, messages.min)
})

export default validations

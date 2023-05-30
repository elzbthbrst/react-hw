import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { save } from '../store/actions/contactActions'
import { DEFAULT_CONTACT } from '../store/reducers/contactsReducer'
import * as Yup from 'yup'
import style from '../styles/ContactForm.module.css'


const PHONE_TEMPLATE = /^\d{3}-\d{3}-\d{4}$/


const validationSchema = Yup.object({
    firstName: Yup.string()
        .min(4, 'firstName must be > 3 symbols')
        .required('Required'),
    lastName: Yup.string()
        .min(5, 'lastName must be > 4 symbols')
        .required('Required'),
    phone: Yup.string()
        .matches(PHONE_TEMPLATE, 'Must be 000-000-0000')
        .required('Required')
})



export default function ContactForm() {

    const editContact = useSelector((state) => state.contact.contactEdit)
    const dispatch = useDispatch()


    function onSubmit(value, actions) {

        const contact = {
            ...editContact,
            ...value
        }
        actions.resetForm({
            value: DEFAULT_CONTACT
        })
        dispatch(save(contact))
    }

    return (
        <Formik
            enableReinitialize
            initialValues={editContact}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form>
                <div className={style.label}>
                    <label>firstName</label> <label>lastName</label>
                    <label>phone</label>
                </div>
                <div className={style.input_container} >
                    <div >
                        <Field className={style.input} type="text" name="firstName" />
                        <ErrorMessage className={style.error_item} name="firstName" component='div' /></div>

                    <div>
                        <Field className={style.input} type="text" name="lastName" />
                        <ErrorMessage className={style.error_item} name="lastName" component='div' /></div>

                    <div>
                        <Field className={style.input} type="text" name="phone" />
                        <ErrorMessage className={style.error_item} name="phone" component='div' /></div>
                    <SaveBtn/>
                </div>

            </Form>
        </Formik>
    )
}

function SaveBtn() {
    const {isValid} = useFormikContext()
    return (
        <button disabled = {!isValid} className={style.button} type="submit">save</button>
    )
}
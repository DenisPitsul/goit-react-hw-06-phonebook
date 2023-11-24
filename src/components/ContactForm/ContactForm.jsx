import classes from './ContactForm.module.css'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { addContact } from 'redux/contactsSlice'
import { getContacts } from 'redux/selectors'
import {object, string} from 'yup'

const schema = object().shape({
    name: string().min(3, 'Too Short').required('Required'),
    number: string()
        .matches(/^\d{3}-\d{2}-\d{2}$/, 'Invalid phone number (Valid format: 000-00-00)')
        .required("Required")
})

const ContactForm = () => {
    const contacts = useSelector(getContacts)
    const dispatch = useDispatch()

    const onAdd = (newContact) => {
        const isContactExist = contacts
          .some(contact => contact.name.toLowerCase() === newContact.name.toLowerCase());
        
        if (isContactExist) {
          alert(newContact.name + ' is already in contacts.')
          return;
        }
      
        dispatch(addContact(newContact.name, newContact.number))
    }

    return (
        <Formik
            initialValues={{
                name: '',
                number: ''
            }}
            validationSchema={schema}
            onSubmit={(values, actions) => {
                onAdd(values);
                actions.resetForm();
            }}
        >
            <Form className={classes.form}>
                <div className={classes.formFiled}>
                    <label className={classes.formLabel} htmlFor='name'>Name</label>
                    <Field 
                        className={classes.formInput} 
                        name='name' 
                        id='name' 
                        placeholder='name'/>
                    <ErrorMessage name='name' component='span'/>
                </div>
                <div className={classes.formFiled}>
                    <label className={classes.formLabel} htmlFor='number'>Number</label>
                    <Field 
                        className={classes.formInput} 
                        type="tel" 
                        name='number' 
                        id='number' 
                        placeholder='number'/>
                    <ErrorMessage name='number' component='span'/>
                </div>
                <button className={classes.formBtn} type='submit'>Add</button>
           </Form>
        </Formik>
    )
}

export default ContactForm;
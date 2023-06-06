import {Route, Routes} from 'react-router-dom'
import ContactTable from './ContactTable'
import ContactForm from './ContactForm'
import NotFound from '../NotFound'

export default function TodoRouter () {
    return (
        <Routes>
        <Route path = '/' element= {<ContactTable/>}/>
        <Route path = '/create' element= {<ContactForm/>}/>
        <Route path = '/:id/edit' element= {<ContactForm/>}/>
        <Route path = '/*' element= {<NotFound/>}/>
      </Routes>
    )
    
}
import { useState } from "react";
import ContactsList from "./ContactsList";
import { v4 } from 'uuid';
import styles from './AddContact.module.css'
const AddContact = () => {
    const [form,setForm]= useState({
        name:'',lastname:'',phone:'',email:''
    });
    const [contacts,setContacts] = useState([]);
    const [alert,setAlert] = useState(false);
    const changeHandler = (e)=>{
       setForm({...form , [e.target.name]:e.target.value });
    }
    const addHandler = (e)=>{
        e.preventDefault();
        if(form.name === '' || form.lastname === '' || form.email === '' || form.phone === '')
        {
           return setAlert(true);
        }
        else{
            setAlert(false);
        }
        const newContact = {...form , id:v4()}
        setContacts([...contacts,newContact]);
        setForm({ name:'',lastname:'',phone:'',email:''    });
    } 
    const deleteHandler = (id)=>{
        const newContacts = contacts.filter((contact)=> contact.id !== id  );
        setContacts(newContacts);
    }
    return (
        <>
            <div className={styles.container}>
                <form>
                    <input type="text" placeholder='Name' value={form.name}    name="name" onChange={changeHandler} />
                    <input type="text" placeholder='Lastname' value={form.lastname}    name="lastname"  onChange={changeHandler}/>
                    <input type="number" placeholder='Phone'   value={form.phone}   name="phone"  onChange={changeHandler}/>
                    <input type="email" placeholder='Email'  value={form.email}   name="email"  onChange={changeHandler} />
                    <button onClick={addHandler}>Add Contact</button>
                </form>
                {alert && <p className={styles.alert}>The data is not valid</p>}
            </div>
            <ContactsList contacts={contacts} onDelete={deleteHandler}/>
        </> 
     );
}
 
export default AddContact;
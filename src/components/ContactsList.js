import Contact from "./Contact";
import styles from './ContactsList.module.css';
const ContactsList = ({contacts,onDelete}) => {
    return ( 
        <div className={styles.container}>
            <h2>Contacts List</h2>
            {!contacts.length ? <p className={styles.message}>No contacts available</p> : (
                <ul className={styles.contacts}>
                    {contacts.map((contact) => (
                        <Contact 
                            key={contact.id} 
                            id={contact.id}
                            onDelete={onDelete}
                            name={contact.name} 
                            lastname={contact.lastname} 
                            phone={contact.phone} 
                            email={contact.email} 
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}
 
export default ContactsList;
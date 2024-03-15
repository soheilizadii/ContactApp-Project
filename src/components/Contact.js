import styles from './Contact.module.css';
import { BsFillTrashFill } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
const Contact = ({name,email,lastname,phone,id,onDelete}) => {
    return ( 
        <li className={styles.item}>
            <p><span className={styles.icon}><FaRegUser/></span>{name} {lastname}</p>
            <p><span className={styles.icon}><IoCallOutline/></span>{phone}</p>
            <p><span className={styles.icon}><CiMail/></span>{email}</p>
            <button className={styles.trash} onClick={()=>onDelete(id)}><BsFillTrashFill /></button>
        </li>
     );
}
 
export default Contact;
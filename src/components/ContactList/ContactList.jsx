import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/selectors";
import { selectError, selectLoading } from "../../redux/selectors";
import { ThreeDots } from "react-loader-spinner";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <>
      {isLoading && !error && (
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#BFBABA"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      )}

      {filteredContacts.length !== 0 ? (
        <ul className={css.listContacts}>
          {filteredContacts.map((contact) => (
            <li className={css.itemContact} key={contact.id}>
              <Contact data={contact} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.infoText}>Your phonebook is empty 😢</p>
      )}

      {/* {!filteredContacts.length && (
        <p className={css.infoText}>No contacts found 😢</p>
      )} */}
    </>
  );
};

export default ContactList;

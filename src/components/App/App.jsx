import "../../../node_modules/modern-normalize/modern-normalize.css";
import css from "./App.module.css";

import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
// import { ThreeDots } from "react-loader-spinner";

function App() {
  const dispatch = useDispatch();
  // const loading = useSelector();
  // const error = useSelector();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <h1 className={css.mainTitle}>Phonebook 📱</h1>
      <ContactForm />
      <SearchBox />
      {/* {loading && !error && (
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#F6F6F6"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      )} */}
      <ContactList />
    </div>
  );
}

export default App;

import React from "react";

import ContactForm from "./ContactForm/ContactForm";
import s from './ContainerStyle.module.scss';
import ContactList from "./ContatctList/ContatctList";
import Filter from "./Filter";

const App = () => {
  return (
    <div className={s.container}>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  )
};
export default App;

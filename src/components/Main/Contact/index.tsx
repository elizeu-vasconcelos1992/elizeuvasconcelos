import ContactForm from './ContactForm';
import ContactIcons from './ContactIcons';
import { StyledContact } from './styles';
import ModalError from '../../Modais/ModalError';
import ModalSucess from '../../Modais/ModalSucess';
import ModalLoad from '../../Modais/ModalLoad';
import { motion } from 'framer-motion';
import { UserContext } from '../../context';
import { useContext } from 'react';

function Contact() {
  const { modal } = useContext(UserContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <StyledContact>
        <ContactIcons />
        <div className="bar"></div>
        <ContactForm />
      </StyledContact>
      {modal === 'error' && <ModalError />}
      {modal === 'success' && <ModalSucess />}
      {modal === 'load' && <ModalLoad />}
    </motion.div>
  );
}

export default Contact;

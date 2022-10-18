import ContactForm from './ContactForm';
import ContactIcons from './ContactIcons';
import { StyledContact } from './styles';
import { motion } from 'framer-motion';

function Contact() {
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
    </motion.div>
  );
}

export default Contact;

import ContactForm from './ContactForm';
import ContactIcons from './ContactIcons';
import { StyledContact } from './styles';

function Contact() {
  return (
    <StyledContact>
      <ContactIcons />
      <div className="bar"></div>
      <ContactForm />
    </StyledContact>
  );
}

export default Contact;

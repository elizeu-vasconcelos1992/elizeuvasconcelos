import { StyledContactIcons } from './styles';
import { SiWhatsapp, SiLinkedin, SiGithub, SiTwitter } from 'react-icons/si';

function ContactIcons() {
  return (
    <StyledContactIcons>
      <a href="https://wa.me/5596991118797" target="blank">
        <SiWhatsapp className="whatsapp" />
      </a>
      <a
        href="https://www.linkedin.com/in/elizeu-vasconcelos-89998a115/"
        target="blank"
      >
        <SiLinkedin className="linkedin" />
      </a>
      <a href="https://github.com/elizeu-vasconcelos1992" target="blank">
        <SiGithub className="github" />
      </a>
      <a href="https://twitter.com/Elizeu_CV" target="blank">
        <SiTwitter className="twitter" />
      </a>
    </StyledContactIcons>
  );
}

export default ContactIcons;

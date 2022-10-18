import foto from '../../../assets/perfil.jpg';
import { StyledAbout } from './styles';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <StyledAbout>
        <div className="about-img">
          <img src={foto} alt="foto de descrição" />
        </div>
        <div className="about-spacer"></div>
        <div className="about-text">
          <h1>SOBRE MIM</h1>
          <p>
            Olá. Me chamo Elizeu Vasconcelos, tenho 29 anos e sou de Macapá,
            Amapá. Sou músico por natureza, engenheiro/pesquisador por
            curiosidade e desenvolvedor por paixão.
          </p>
          <p>
            Sou formado em engenharia ambiental, com especialidade e mestrado na
            área. Atuei durante seis anos nesse mercado e tive ótimas
            experiências, trabalhei com pessoas de diversas culturas, superei
            muitos desafios técnicos e liderei equipes.
          </p>
          <p>
            Mas como me tornei desenvolvedor front-end? Bem, sempre gostei de
            programação e buscava aplicar no meu trabalho, criei protótipos
            analógicos e digitas com Assembly e realizava análise e
            desenvolvimento de funções para análise hidrológica, hidráulica e
            climática com R.
          </p>
          <p>
            Veio a pandemia e meu ramo foi fortemente impactado, foi então que
            pude realizar o desejo, até então tímido nas entrelinhas da
            engenharia, de aprender e atuar profissionalmente no desenvolvimento
            web, com foco no full-stack.
          </p>
          <p>
            Possuo experiência e facilidade com o trabalho em equipe,
            metodologias ágeis, como SMART, SCRUM e KANBAN, engenharia e
            desenvolvimento front-end com React.JS. Busco me aperfeiçoar
            diariamente e a curiosidade e persistência são meus principais
            combustíveis.
          </p>
        </div>
      </StyledAbout>
    </motion.div>
  );
}

export default About;

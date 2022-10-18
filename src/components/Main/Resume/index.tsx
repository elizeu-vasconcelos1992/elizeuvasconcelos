import { StyledResume } from './styles';
import curriculo from '../../../docs/curriculo.pdf';
import { motion } from 'framer-motion';

function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <StyledResume>
        <a href={curriculo} download="curriculo.pdf">
          Baixar Currículo
        </a>
        <div className="resume">
          <div className="person-infos">
            <h2>Elizeu Vasconcelos</h2>
            <p>Cidade: Macapá, Amapá</p>
            <p>Idade: 29 anos</p>
            <p>Estado civil: Casado</p>
          </div>
          <div className="objective">
            <h3>Área de Atuação</h3>
            <h3>DESENVOLVEDOR FRONT-END</h3>
          </div>
          <div className="skills">
            <h3>Habilidades</h3>
            <div className="container">
              <div className="hard-skills">
                <h4>-Hardskills-</h4>
                <p>HTML5</p>
                <p>CSS3</p>
                <p>JavaScript</p>
                <p>React.JS</p>
                <p>TypeScript</p>
                <p>GIT</p>
                <p>Axios</p>
                <p>API REST</p>
                <p>JSON-Server</p>
                <p>Express</p>
                <p>SQL</p>
                <p>Postgres</p>
                <p>Type-ORM</p>
              </div>
              <div className="soft-skills">
                <h4>-Softskills-</h4>
                <p>SCRUM</p>
                <p>SMARTH</p>
                <p>KANBAN</p>
                <p>GitFlow</p>
              </div>
              <div className="softwares">
                <h4>-Softwares-</h4>
                <p>VSCode</p>
                <p>Figma</p>
                <p>GitHub</p>
                <p>Dbeaver</p>
                <p>Insomnia</p>
                <p>Office</p>
              </div>
            </div>
          </div>
          <div className="formation">
            <h3>Formação</h3>
            <p>
              <strong>Sistemas para Internet</strong> | Centro Universitário
              Leonardo Da Vinci | 08/22 a 08/24
            </p>
            <p>
              <strong>Desenvolvedor Full Stack</strong> | Kenzie Academy Brasil
              | 03/22 a 03/23
            </p>
            <p>
              {' '}
              <strong>Desenvolvedor Front-End</strong> | Kenzie Academy Brasil |
              09/22
            </p>
            <p>
              <strong>Mestrado em Desenvolvimento Regional</strong> |
              Universidade Federal do Amapá | 2020
            </p>
            <p>
              {' '}
              <strong>Engenharia Ambiental</strong> | Universidade do Estado do
              Amapá | 2016
            </p>
          </div>
          <div className="experiences">
            <h3>Experiências</h3>
            <div>
              <p>
                {' '}
                <strong>
                  Consultor e Engenheiro Ambiental - Profissional Liberal
                </strong>
              </p>
              <p>
                Descrição: Realização de estudos ambientais para fins de
                licenciamento e gestão ambiental, elaboração de laudos técnicos,
                responsabilidade técnica por sistemas e estruturas privadas e
                comunitárias.
              </p>
              Período: 2016 à 2021
            </div>
            <div>
              <p>
                {' '}
                <strong>Consultor Ambiental - Empresa LogicAmbiental</strong>
              </p>
              <p>
                Descrição: Realização de estudos ambientais e de engenharia,
                elaboração de materiais didáticos e administrador do sistema
                web.
              </p>
              Período: 2016 à 2018
            </div>
          </div>
        </div>
      </StyledResume>
    </motion.div>
  );
}

export default Resume;

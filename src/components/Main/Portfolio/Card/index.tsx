import { StyledCardPortfolio } from './styles';
import { SiGithub } from 'react-icons/si';
import { BsCursor } from 'react-icons/bs';
import nuKenzie from '../../../../assets/nu-kenzie.gif';
import hamburgueria from '../../../../assets/hamburgueria.gif';
import kenziehub from '../../../../assets/kenziehub.gif';
import rickAndMorty from '../../../../assets/rickandmorty.gif';
import blogChat from '../../../../assets/blog-chat.jpg';

function Card() {
  return (
    <>
      <StyledCardPortfolio>
        <div className="front-card">
          <h3>NuKenzie</h3>
          <img src={nuKenzie} alt="gif aplicativo nukenzie" />
          <span>
            <BsCursor size={20} />
          </span>
        </div>
        <div className="back-card">
          <h3>Descrição</h3>
          <p>
            A Nu-Kenzie é uma aplicação em React para controle de finanças. O
            usuário pode inserir valores de entrada e saída, consultar o saldo,
            verificar o histórico e excluí-lo. A aplicação realiza filtros de
            acordo com o tipo de entrada e mostra se o saldo atual é positivo ou
            negativo. Aplicação responsiva.
          </p>
          <span className="back-card-links">
            <a
              href="https://react-entrega-s1-nu-kenzie-elizeu-vasconcelos1992.vercel.app/"
              target="blank"
              className="link-app"
            >
              Acessar app
            </a>
            <a
              href="https://github.com/elizeu-vasconcelos1992/project-react-nu-kenzie"
              target="blank"
              className="link-github"
            >
              {' '}
              <SiGithub size={22} />{' '}
            </a>
          </span>
        </div>
      </StyledCardPortfolio>
      <StyledCardPortfolio>
        <div className="front-card">
          <h3>KenzieHub</h3>
          <img src={kenziehub} alt="gif aplicativo kenziehub" />
          <span>
            <BsCursor size={20} />
          </span>
        </div>
        <div className="back-card">
          <h3>Descrição</h3>
          <p>
            A Kenziehub é uma aplicação feita em React e TypeScript com auxílio
            de outras tecnologias, como, react-hook-form, yup, styled
            components, toastify, contextAPI, entre outras. O usuário pode
            cadastrar seu perfil, logar, registrar e editar tecnologias.
            Aplicação responsiva.
          </p>
          <span className="back-card-links">
            <a
              href="https://react-entrega-s2-formulario-de-cadastro-elizeu-vasconcelos1992.vercel.app"
              target="blank"
              className="link-app"
            >
              Acessar app
            </a>
            <a
              href="https://github.com/elizeu-vasconcelos1992/project-react-kenziehub"
              target="blank"
              className="link-github"
            >
              {' '}
              <SiGithub size={22} />{' '}
            </a>
          </span>
        </div>
      </StyledCardPortfolio>
      <StyledCardPortfolio>
        <div className="front-card">
          <h3>Blog-chat</h3>
          <img src={blogChat} alt="imagem do aplicativo blog-chat" />
          <span>
            <BsCursor size={20} />
          </span>
        </div>
        <div className="back-card">
          <h3>Descrição</h3>
          <p>
            O blog-chat é uma aplicação que utiliza HTML5, CSS3 e JavaScript no
            paradigma POO. Trata-se da simulação de um microblog onde o usuário
            pode postar, editar e excluir uma mensagem, além de poder ver as
            mensagens dos demais usuários. A aplicação também conta com
            paginação e as opções de login e logout.
          </p>
          <span className="back-card-links">
            <a
              href="https://project-js-blog-chat.vercel.app/"
              target="blank"
              className="link-app"
            >
              Acessar app
            </a>
            <a
              href="https://github.com/elizeu-vasconcelos1992/project-js-blog-chat"
              target="blank"
              className="link-github"
            >
              {' '}
              <SiGithub size={22} />{' '}
            </a>
          </span>
        </div>
      </StyledCardPortfolio>
      <StyledCardPortfolio>
        <div className="front-card">
          <h3>Hamburgueria</h3>
          <img src={hamburgueria} alt="gif aplicativo hamburgueria" />
          <span>
            <BsCursor size={20} />
          </span>
        </div>
        <div className="back-card">
          <h3>Descrição</h3>
          <p>
            A Hambugueira é uma simulação de um e-ecommerce em React com consumo
            de API. O usuário pode inserir produtos no carrinho, verificar o
            valor e excluir itens. É possível pesquisar produtos de forma
            dinâmica, através da barra de pesquisa. Aplicação responsiva.
          </p>
          <span className="back-card-links">
            <a
              href="https://react-entrega-s1-hamburgueria-da-kenzie-elizeu-vasconcelos1992.vercel.app/"
              target="blank"
              className="link-app"
            >
              Acessar app
            </a>
            <a
              href="https://github.com/elizeu-vasconcelos1992/project-react-hamburger"
              target="blank"
              className="link-github"
            >
              {' '}
              <SiGithub size={22} />{' '}
            </a>
          </span>
        </div>
      </StyledCardPortfolio>
      <StyledCardPortfolio>
        <div className="front-card">
          <h3>Rick and Morty</h3>
          <img src={rickAndMorty} alt="gif aplicativo rick and morty" />
          <span>
            <BsCursor size={20} />
          </span>
        </div>
        <div className="back-card">
          <h3>Descrição</h3>
          <p>
            Rick and Morty é uma aplicação em React que consome e realiza a
            paginação dos personagens a partir do consumo da api do Alex
            Fuhrmann. Os personagens são categorizados em duas cores, de acordo
            com sua condição na série, vivo ou morto. Aplicação responsiva.
          </p>
          <span className="back-card-links">
            <a
              href="https://react-atividade-s1-buscando-mais-persona-elizeu-vasconcelos1992.vercel.app/"
              target="blank"
              className="link-app"
            >
              Acessar app
            </a>
            <a
              href="https://github.com/elizeu-vasconcelos1992/project-react-rick-and-morty"
              target="blank"
              className="link-github"
            >
              {' '}
              <SiGithub size={22} />{' '}
            </a>
          </span>
        </div>
      </StyledCardPortfolio>
    </>
  );
}

export default Card;

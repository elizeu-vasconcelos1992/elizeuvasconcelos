import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { StyledContactForm } from './styles';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../../validators';
import { UserContext } from '../../../context';

function ContactForm() {
  const { sendEmailJs } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Record<string, unknown>>({
    resolver: yupResolver(schema),
  });

  function contactFormSubmit(data: Record<string, unknown>) {
    sendEmailJs(data);
    reset();
  }

  return (
    <StyledContactForm>
      <form onSubmit={handleSubmit(contactFormSubmit)}>
        <h2>Contate-me</h2>
        <label>
          Nome <input placeholder="Digite seu nome" {...register('name')} />
          <span>{errors.name?.message}</span>
        </label>
        <label>
          E-mail{' '}
          <input placeholder="Digite seu e-mail" {...register('email')} />
          <span>{errors.email?.message}</span>
        </label>
        <label>
          Mensagem{' '}
          <textarea
            placeholder="Digite sua mensagem"
            {...register('message')}
          ></textarea>{' '}
          <span>{errors.message?.message}</span>
        </label>

        <button type="submit">Enviar mensagem</button>
      </form>
    </StyledContactForm>
  );
}

export default ContactForm;

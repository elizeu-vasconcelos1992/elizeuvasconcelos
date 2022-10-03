import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup
    .string()
    .max(20, 'O nome pode ter no máximo 20 caracteres')
    .trim()
    .required('Campo obrigatório'),
  email: yup
    .string()
    .email('Insira um tipo de e-mail válido: exemplo@exemplo.com')
    .trim()
    .required('Campo obrigatório'),
  message: yup
    .string()
    .max(200, 'A messagem pode ter no máximo 200 caracteres')
    .trim()
    .required('Campo obrigatório'),
});

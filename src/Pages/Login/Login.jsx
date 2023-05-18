import { Titulo, Form } from "./Styles";

function Login() {

  return (
  
    <div>
      <Titulo>
        Faça aqui o seu login!
      </Titulo>
      <Form>
        Email
        <input></input>
        Senha
        <input></input>
        <button>Fazer login</button>
        <button>Quero me cadastrar</button>
      </Form>
    </div>
  
  )
  
}
  
export default Login;
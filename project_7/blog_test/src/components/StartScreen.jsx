import './StartScreen.css'

const StartScreen = () => {
  return (
    <div className='container'>
            <div className="imagem">Imagem</div>
            <div className="login">
                <h1>Nome qualquer</h1>
                <input type="email" name="" id="" placeholder='Email, telefone ou nome de usuário' />
                <input type="password" name="" id="" placeholder='Password'/>
                <button>Login</button>
                <hr />
                <p>Esqueceu a senha</p>
                <p>Cadastre-se</p>
            </div>        
    </div>
  )
}

export default StartScreen
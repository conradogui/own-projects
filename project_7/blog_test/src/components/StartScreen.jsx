import './StartScreen.css'
import img from '../assets/fruta.png'

const StartScreen = () => {
  return (
    <div className='container'>
            <img className='imagem moni1' src={img}/>
            <div className="login moni1">
                <h1>Clipgram</h1>
                <input type="email" name="" id="" placeholder='Email, telefone ou nome de usuário' />
                <input type="password" name="" id="" placeholder='Password'/>
                <button>Login</button>
                <hr />
                <a href="#">Esquceu a senha?</a>
                <a href="#">Não tem conta?</a>
            </div>        
    </div>
  )
}

export default StartScreen
import logoIcon from '../../assets/Logo.svg';
import './style.scss';

export function Header() {

    return (
        <header className='header'>
            <div>
            <img className='logoIcon' src={ logoIcon } alt="Todo List" />
            </div>
            <div>
            <span> Make with ♥ by: <a target="noblank" title='Meu portfólio' href="http://gilbertoaleite-desenvolvedor.tech/">Gilberto A Leite</a></span>
            </div>
        </header>

    )
}



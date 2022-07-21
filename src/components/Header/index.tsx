import logoIcon from '../../assets/Logo.svg';
import'./style.css';

export function Header() {

    return (
    <header className='header'>
    <img className='logoIcon' src={logoIcon} alt="Todo List" />
    </header>
    )
}



import logoIcon from '../../assets/Logo.svg';
import './style.scss';

export function Header() {

    return (
        <header className='header'>
            <div>
            <img className='logoIcon' src={ logoIcon } alt="Todo List" />
            </div>
        </header>
    )
}



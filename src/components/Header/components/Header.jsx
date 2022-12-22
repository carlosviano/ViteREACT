import './Header.css';
import { leftMenu } from '../../../const/leftMenu';
import Button from '../../Button/Button'
import { Link } from 'react-router-dom';
import { rightMenu } from '../../../const/rightMenu';


export default function Header(){
    return (
        <div className="Menu"> 
        <div className="Menu-izquierda">
            {leftMenu.map((leftMenuItem,index) => (
          <Link to={leftMenuItem.path} className={leftMenuItem.className} key={index}>{leftMenuItem.label}</Link>

           ))}
            
        </div>
        <div className="Menu-derecha">
        {rightMenu.map((rightMenuItem,index) => 
            <Link to={rightMenuItem.path} className={rightMenuItem.className} key={index}>{rightMenuItem.label}<span>{rightMenuItem.number}</span></Link>)}   
</div>
        </div>
    )
}
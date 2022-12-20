import './Header.css';
import { homeMenu } from '../../../const/homeMenu.js';

export default function Header(){
    return (
        <div className="Menu"> 
        <div className="Menu-izquierda">
            {/* <Link className="logo-name" to={homeMenu.path} >Uniform Display</Link> */}
            <a className="button" href="#">All</a>
            <a href="#" target="_blank" className="button">About</a>
        </div>
        <div className="Menu-derecha">
                <a className="button" href="Main Search.html" target="_blank">Search</a>
                <a className="button" href="#">Account</a>
                <a className="button" href="#">Cart:<span>0</span></a>
</div>
        </div>
    )
}
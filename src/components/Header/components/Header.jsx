import './Header.css';

export default function Header(){
    return (
        <div className="Menu"> 
        <div className="Menu-izquierda">
            <a className="logo-name" href="Index.html">Uniform Display</a>
            <a className="button Search" href="#">All</a>
            <a href="#" target="_blank" className="button">About</a>
        </div>
        <div className="Menu-derecha">
                <a className="button Search" href="Main Search.html" target="_blank">Search</a>
                <a className="button Account" href="#">Account</a>
                <a className="button Account" href="#">Cart:<span>0</span></a>
</div>
        </div>
    )
}
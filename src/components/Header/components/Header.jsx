import './Header.css';

export default function Header({shopName,one,two,three,four,five,six}){
    return (
        <div className="Menu"> 
        <div className="Menu-izquierda">
            <a className="logo-name" href="Index.html">{shopName}</a>
            <a className="button Search" href="#">{one}</a>
            <a href="#" target="_blank" className="button">{two}</a>
        </div>
        <div className="Menu-derecha">
                <a className="button Search" href="Main Search.html" target="_blank">{three}</a>
                <a className="button Account" href="#">{four}</a>
                <a className="button Account" href="#">{five}<span>{six}</span></a>
</div>
        </div>
    )
}
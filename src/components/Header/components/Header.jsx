import "./Header.css";
import { leftMenu } from "../../../const/leftMenu";
import { Link } from "react-router-dom";
import { rightMenu } from "../../../const/rightMenu";
import { useLoginContext } from "../../../contexts/LoginModeContext";
import { rightMenuLoggedIn } from "../../../const/rightMenuLoggedIn";

export default function Header() {
  const { authorization } = useLoginContext();
  console.log(authorization)
  return (
    <div className="Menu">
      <div className="Menu-izquierda">
        {leftMenu.map((leftMenuItem, index) => (
          <Link
            to={leftMenuItem.path}
            className={leftMenuItem.className}
            key={index}
          >
            {leftMenuItem.label}
          </Link>
        ))}
      </div>
      <div className="Menu-derecha">
        {authorization === null
          ? rightMenu.map((rightMenuItem, index) => (
              <Link
                to={rightMenuItem.path}
                className={rightMenuItem.className}
                key={index}
              >
                {rightMenuItem.label}
                <span>{rightMenuItem.number}</span>
              </Link>
            ))
          : rightMenuLoggedIn.map((rightMenuLoggedInItem, index) => 
          <Link
          to={rightMenuLoggedInItem.path}
          className={rightMenuLoggedInItem.className}
          key={index}
        >
          {rightMenuLoggedInItem.label}
          <span>{rightMenuLoggedInItem.number}</span>
        </Link>)}
      </div>
    </div>
  );
}

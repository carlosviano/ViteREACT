import "./Header.css";
import { leftMenu } from "../../../const/leftMenu";
import { Link } from "react-router-dom";
import { rightMenu } from "../../../const/rightMenu";
import { useLoginContext } from "../../../contexts/LoginModeContext";
import { rightMenuLoggedIn } from "../../../const/rightMenuLoggedIn";
import { leftMenuLoggedIn } from "../../../const/leftMenuLoggedIn";

export default function Header() {
  const { authorization, logOutAcc } = useLoginContext();

  return (
    <div className="Menu">
      <div className="Menu-izquierda">
        {authorization.role !== null
          ? leftMenuLoggedIn.map((leftMenuItem, index) => (
              <Link
                to={leftMenuItem.path}
                className={leftMenuItem.className}
                key={index}
              >
                {leftMenuItem.label}
              </Link>
            ))
          : leftMenu.map((leftMenuItem, index) => (
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
        {authorization.role === null
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
              rightMenuLoggedInItem.name === "LogOut" ? (
                <Link
                  to={rightMenuLoggedInItem.path}
                  className={rightMenuLoggedInItem.className}
                  key={index}
                  onClick={logOutAcc}
                >
                  {rightMenuLoggedInItem.label}
                  <span>{rightMenuLoggedInItem.number}</span>
                </Link>
              ) : (
                <Link
                  to={rightMenuLoggedInItem.path}
                  className={rightMenuLoggedInItem.className}
                  key={index}
                >
                  {rightMenuLoggedInItem.label}
                  <span>{rightMenuLoggedInItem.number}</span>
                </Link>
              )
            )}
      </div>
    </div>
  );
}

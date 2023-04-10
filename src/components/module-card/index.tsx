import { useState } from "react";
import "./styles.css";

interface Props {
  name: string;
  route: string;
  icon?: JSX.Element;
  open: (route: string) => void;
}

export function ModuleCard({ name, route, icon, open }: Props) {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div
      className="component"
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <a onClick={() => open(route)}>
        <div className={`linkTitle ${hover ? "cardHover" : ""}`}>
          {icon ? icon : null}

          <span>{name}</span>
        </div>
      </a>
    </div>
  );
}

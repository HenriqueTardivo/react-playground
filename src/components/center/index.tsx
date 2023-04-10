import { ReactNode } from "react";
import "./styles.css";

interface Props {
  children: ReactNode;
}

export function Center({ children }: Props) {
  return <div className="center">{children}</div>;
}

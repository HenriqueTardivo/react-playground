import { useNavigate } from "react-router-dom";
import { CaretLeft } from "phosphor-react";
import "./styles.css";

export function GoBack() {
  const navigate = useNavigate();

  return (
    <a onClick={() => navigate(-1)}>
      <div className="goBack">
        <CaretLeft size={32} />

        <span>Voltar</span>
      </div>
    </a>
  );
}

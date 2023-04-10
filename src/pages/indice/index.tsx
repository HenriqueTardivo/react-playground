import { useNavigate } from "react-router-dom";
import { modules } from "../../data/modules";
import { ModuleCard } from "../../components/module-card";
import "./styles.css";
import { Center } from "../../components";
export function IndicePage() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Selecione um modulo</h1>

      <Center>
        <div className="cards">
          {modules.map(({ module, route, icon }, index) => (
            <ModuleCard
              key={index}
              name={module}
              route={route}
              icon={icon}
              open={(route) => navigate(route)}
            />
          ))}
        </div>
      </Center>
    </div>
  );
}

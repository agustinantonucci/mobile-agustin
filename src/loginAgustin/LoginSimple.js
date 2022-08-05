import { Button, Checkbox, Image, Input } from "antd-mobile";
import { useHistory } from "react-router-dom";
import "./loginSimple.css";

export const LoginSimple = () => {

  let history = useHistory();

  return (
    <div className="contenedor-principal1">
      <Image src="assets/duo.png" fit="contain" width={200} height={100} />
      <div className="usuario">
        <p className="titulo-login">USUARIO</p>
        <Input type="text" />
      </div>
      <div className="password">
        <p className="titulo-login">CONTRASEÑA</p>
        <Input type="password" />
      </div>
      <Checkbox defaultChecked={false}>Mantener sesión iniciada</Checkbox>
      <Button
        style={{
          marginTop: "5vh",
          backgroundColor: "#00B33C",
          borderColor: "#00B33C",
          width: "90vw"
        }}
        color="primary"
        block
        onClick={() => history.push("/tareas")}
      >
        INICIAR
      </Button>
      <a href="http://localhost:3000/tareas" className="olvidaste">¿Olvidaste tu contraseña?</a>
    </div>
  );
};

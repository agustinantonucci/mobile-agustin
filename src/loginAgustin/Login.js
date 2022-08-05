import { Button, Checkbox, Image, Input } from "antd-mobile";
import { RightOutline } from "antd-mobile-icons";
import "./login.css";
// import "../assets/duo.png"

export const Login = () => {
  return (
    <div className="contenedor-principal">
      <Image src="assets/duo.png" fit="contain" width={200} height={100} />
      <div className="usuario">
        <p className="titulo">USUARIO</p>
        <Input type="text" />
      </div>
      <div className="password">
        <p className="titulo">CONTRASEÑA</p>
        <Input type="password" />
      </div>
      <div className="mantener-sesion">
        <Checkbox defaultChecked={false}>Mantener sesión iniciada</Checkbox>
      </div>

      <Button
        style={{
          height: "5.5vh",
          width: "12rem",
          borderRadious: "0.25rem",
          marginTop: "5vh",
          border: 'none',
          backgroundColor: '#f8f8f8',
          justifySelf: "center",
          alignSelf: "center",
          // padding: "0px"
        }}
      >
        <div className="contenedor-boton">
          <div className="linea"></div>
          <p className="iniciar">INICIAR</p>

          <RightOutline
            color="#00B33C"
            style={{
              fontWeight: "700",
              fontSize: "1.7rem",
            }}
          />
        </div>
      </Button>
      <a className="olvidaste">¿Olvidaste tu contraseña?</a>
    </div>
  );
};

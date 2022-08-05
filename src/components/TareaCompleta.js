import { Form, Input } from "antd-mobile";
import "./tareaCompleta.css";

export const TareaCompleta = ({ tarea, modo }) => {
  if (modo === "ver") {
    return (
      <div className="contenedor-tarea-completa">
        <p className="fecha-hora">{tarea.fecha + " - " + tarea.hora}</p>
        <p className="asunto">{tarea.asunto}</p>
        <p className="clienteT">{tarea.cliente}</p>
      </div>
    );
  } else if (modo === "editar") {
    return (
      <div className="contenedor-tarea-completa">
        <Form>
          <Form.Item label="Fecha y hora" >
            <Input defaultValue={tarea.fecha + " - " + tarea.hora} />
          </Form.Item>
          <Form.Item label="Asunto">
            <Input defaultValue={tarea.asunto} />
          </Form.Item>
          <Form.Item label="Cliente">
            <Input defaultValue={tarea.cliente} />
          </Form.Item>
        </Form>
      </div>
    );
  }
};

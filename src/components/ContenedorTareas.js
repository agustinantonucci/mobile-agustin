import { Ellipsis, List } from "antd-mobile";
import "./contenedorTareas.css";

export const Tareas = (pTareas = []) => {
  const tareas = [pTareas];
  let ultimaFecha = "";
  let ultimaHora = "";

  return (
    <div className="contenedor-tareas">
      {tareas.map((tarea) => {
        if (tarea.fecha !== ultimaFecha) {
          ultimaFecha = tarea.fecha;
          ultimaHora = "";
          if (tarea.hora !== ultimaHora) {
            ultimaHora = tarea.hora;
            return (
              <>
                <p className="fecha">{tarea.fecha}</p>
                <List key={tarea.id} header={tarea.hora}>
                  <List.Item key={tarea.id}>
                    <Ellipsis className="tarea" content={tarea.asunto} />
                    <Ellipsis className="cliente" content={tarea.cliente} />
                  </List.Item>
                </List>
              </>
            );
          } else {
            return (
              <>
                <p className="fecha">{tarea.fecha}</p>
                <List.Item key={tarea.id}>
                  <Ellipsis className="tarea" content={tarea.asunto} />
                  <Ellipsis className="cliente" content={tarea.cliente} />
                </List.Item>
              </>
            );
          }
        } else {
          if (tarea.hora !== ultimaHora) {
            ultimaHora = tarea.hora;
            return (
              <>
                <List key={tarea.id} header={tarea.hora}>
                  <List.Item key={tarea.id}>
                    <Ellipsis className="tarea" content={tarea.asunto} />
                    <Ellipsis className="cliente" content={tarea.cliente} />
                  </List.Item>
                </List>
              </>
            );
          } else {
            return (
              <>
                <List.Item key={tarea.id}>
                  <Ellipsis className="tarea" content={tarea.asunto} />
                  <Ellipsis className="cliente" content={tarea.cliente} />
                </List.Item>
              </>
            );
          }
        }
      })}
    </div>
  );
};

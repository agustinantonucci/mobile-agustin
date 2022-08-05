import {
  CapsuleTabs,
  Ellipsis,
  List,
  Modal,
  SwipeAction,
  TabBar,
} from "antd-mobile";
import {
  AddCircleOutline,
  AppstoreOutline,
  CalendarOutline,
  LeftOutline,
  UnorderedListOutline,
  UserOutline,
  EditSOutline,
  EyeOutline,
  CheckCircleOutline,
} from "antd-mobile-icons";
import "./listaTareas.css";
import { Calendario } from "../components/Calendario";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";
import { TareaCompleta } from "../components/TareaCompleta";

export const ListaTareas = () => {
  let today = moment().format("DD/MM/YYYY");

  const [fecha, setFecha] = useState(today);
  const [fechaConfirmada, setFechaConfirmada] = useState(today);
  const [track, setTrack] = useState('comienzo')

  const fechaHandler = async() => {
    setTrack('comienzo')
    setTimeout(() => {
      setTrack('terminado');
    }, 1000)
  }
  
  useEffect(() => {
    if(track === 'terminado'){
      setFechaConfirmada(fecha);
    }
  }, [track])
  

  let history = useHistory();

  const tabs = [
    {
      key: "todo",
      icon: <UnorderedListOutline />,
      badge: "5",
    },
    {
      key: "personalCenter",
      icon: <UserOutline />,
    },
    {
      key: "message",
      icon: <CalendarOutline />,
      badge: "",
    },
    {
      key: "home",
      icon: <AppstoreOutline />,
      badge: "",
    },
  ];

  const tarea = {
    id: 1,
    fecha: "29/07/2022",
    hora: "08:30",
    asunto: "Venta de trigo",
    cliente: "A.P.I.N.T.A.",
  };

  const tareas = [
    {
      id: 1,
      fecha: "29/07/2022",
      hora: "08:30",
      asunto: "Venta de trigo",
      cliente: "A.P.I.N.T.A.",
    },
    {
      id: 2,
      fecha: "29/07/2022",
      hora: "08:30",
      asunto:
        "Venta de trigo2 222222222222222222222222222222sd asdgasdga asgd kajdgakjasdgasdgadsg asdgasdga adgasgasdg asdgasdgasdg  asdgasdgasdg",
      cliente: "Tres Arroyos",
    },
    {
      id: 3,
      fecha: "29/07/2022",
      hora: "09:30",
      asunto:
        "Venta de trigo asdgasdgasdg asgdasdgasd asdgasdga asgd kajdgakjasdgasdgadsg asdgasdga adgasgasdg asdgasdgasdg  asdgasdgasdg",
      cliente: "A.P.I.N.T.A.",
    },
    {
      id: 4,
      fecha: "29/07/2022",
      hora: "09:30",
      asunto:
        "Venta de trigo2 222222222222222222222222222222sd asdgasdga asgd kajdgakjasdgasdgadsg asdgasdga adgasgasdg asdgasdgasdg  asdgasdgasdg",
      cliente: "Tres Arroyos",
    },
    {
      id: 5,
      fecha: "29/07/2022",
      hora: "10:30",
      asunto:
        "Venta de trigo asdgasdgasdg asgdasdgasd asdgasdga asgd kajdgakjasdgasdgadsg asdgasdga adgasgasdg asdgasdgasdg  asdgasdgasdg",
      cliente: "A.P.I.N.T.A.",
    },
    {
      id: 6,
      fecha: "29/07/2022",
      hora: "10:30",
      asunto:
        "Venta de trigo2 222222222222222222222222222222sd asdgasdga asgd kajdgakjasdgasdgadsg asdgasdga adgasgasdg asdgasdgasdg  asdgasdgasdg",
      cliente: "Tres Arroyos",
    },
    {
      id: 7,
      fecha: "29/07/2022",
      hora: "10:30",
      asunto:
        "Venta de trigo2 222222222222222222222222222222sd asdgasdga asgd kajdgakjasdgasdgadsg asdgasdga adgasgasdg asdgasdgasdg  asdgasdgasdg",
      cliente: "Tres Arroyos",
    },
    {
      id: 8,
      fecha: "29/07/2022",
      hora: "10:30",
      asunto:
        "Venta de trigo2 222222222222222222222222222222sd asdgasdga asgd kajdgakjasdgasdgadsg asdgasdga adgasgasdg asdgasdgasdg  asdgasdgasdg",
      cliente: "Tres Arroyos",
    },
    {
      id: 9,
      fecha: "29/07/2022",
      hora: "10:30",
      asunto:
        "Venta de trigo2 222222222222222222222222222222sd asdgasdga asgd kajdgakjasdgasdgadsg asdgasdga adgasgasdg asdgasdgasdg  asdgasdgasdg",
      cliente: "Tres Arroyos",
    },
    {
      id: 10,
      fecha: "29/07/2022",
      hora: "10:30",
      asunto:
        "Venta de trigo2 222222222222222222222222222222sd asdgasdga asgd kajdgakjasdgasdgadsg asdgasdga adgasgasdg asdgasdgasdg  asdgasdgasdg",
      cliente: "Tres Arroyos",
    },
    {
      id: 11,
      fecha: "29/07/2022",
      hora: "10:30",
      asunto:
        "Venta de trigo2 222222222222222222222222222222sd asdgasdga asgd kajdgakjasdgasdgadsg asdgasdga adgasgasdg asdgasdgasdg  asdgasdgasdg",
      cliente: "Tres Arroyos",
    },
    {
      id: 12,
      fecha: "29/07/2022",
      hora: "10:30",
      asunto:
        "Venta de trigo2 222222222222222222222222222222sd asdgasdga asgd kajdgakjasdgasdgadsg asdgasdga adgasgasdg asdgasdgasdg  asdgasdgasdg",
      cliente: "Tres Arroyos",
    },
    {
      id: 13,
      fecha: "29/07/2022",
      hora: "11:30",
      asunto:
        "Venta de trigo2 222222222222222222222222222222sd asdgasdga asgd kajdgakjasdgasdgadsg asdgasdga adgasgasdg asdgasdgasdg  asdgasdgasdg",
      cliente: "Tres Arroyos",
    },
    {
      id: 14,
      fecha: "29/07/2022",
      hora: "11:30",
      asunto:
        "Venta de trigo2 222222222222222222222222222222sd asdgasdga asgd kajdgakjasdgasdgadsg asdgasdga adgasgasdg asdgasdgasdg  asdgasdgasdg",
      cliente: "Tres Arroyos",
    },
    {
      id: 15,
      fecha: "29/07/2022",
      hora: "12:30",
      asunto:
        "Venta de trigo2 222222222222222222222222222222sd asdgasdga asgd kajdgakjasdgasdgadsg asdgasdga adgasgasdg asdgasdgasdg  asdgasdgasdg",
      cliente: "Tres Arroyos",
    },
    {
      id: 16,
      fecha: "29/07/2022",
      hora: "12:30",
      asunto:
        "Venta de trigo2 222222222222222222222222222222sd asdgasdga asgd kajdgakjasdgasdgadsg asdgasdga adgasgasdg asdgasdgasdg  asdgasdgasdg",
      cliente: "Tres Arroyos",
    },
    {
      id: 17,
      fecha: "29/07/2022",
      hora: "13:30",
      asunto:
        "Venta de trigo2 222222222222222222222222222222sd asdgasdga asgd kajdgakjasdgasdgadsg asdgasdga adgasgasdg asdgasdgasdg  asdgasdgasdg",
      cliente: "Tres Arroyos",
    },
    {
      id: 18,
      fecha: "29/07/2022",
      hora: "13:30",
      asunto:
        "Venta de trigo2 222222222222222222222222222222sd asdgasdga asgd kajdgakjasdgasdgadsg asdgasdga adgasgasdg asdgasdgasdg  asdgasdgasdg",
      cliente: "Tres Arroyos",
    },
  ];

  const tareas2 = [
    {
      id: 19,
      fecha: "25/07/2022",
      hora: "08:30",
      asunto: "Venta de trigo",
      cliente: "A.P.I.N.T.A.",
    },
    {
      id: 20,
      fecha: "26/07/2022",
      hora: "08:30",
      asunto: "Venta de trigo",
      cliente: "A.P.I.N.T.A.",
    },
    {
      id: 21,
      fecha: "27/07/2022",
      hora: "08:30",
      asunto: "Venta de trigo",
      cliente: "A.P.I.N.T.A.",
    },
    {
      id: 22,
      fecha: "28/07/2022",
      hora: "08:30",
      asunto: "Venta de trigo",
      cliente: "A.P.I.N.T.A.",
    },
    {
      id: 23,
      fecha: "29/07/2022",
      hora: "08:30",
      asunto: "Venta de trigo",
      cliente: "A.P.I.N.T.A.",
    },
    {
      id: 24,
      fecha: "29/07/2022",
      hora: "09:30",
      asunto: "Venta de trigo",
      cliente: "A.P.I.N.T.A.",
    },
    {
      id: 25,
      fecha: "29/07/2022",
      hora: "10:30",
      asunto: "Venta de trigo",
      cliente: "A.P.I.N.T.A.",
    },
    {
      id: 26,
      fecha: "29/07/2022",
      hora: "10:30",
      asunto: "Venta de trigo",
      cliente: "A.P.I.N.T.A.",
    },
  ];

  const rightActions = [
    {
      key: "ver",
      text: <EyeOutline />,
      color: "success",
      onClick: () => {
        Modal.alert({
          content: <TareaCompleta tarea={tarea} modo="ver" />,
          confirmText: "Confirmar",
          cancelText: "Cancelar",
          closeOnMaskClick: true,
        });
      },
    },
    {
      key: "editar",
      text: <EditSOutline />,
      color: "primary",
      onClick: () => {
        Modal.alert({
          content: <TareaCompleta tarea={tarea} modo="editar" />,
          confirmText: "Confirmar",
          cancelText: "Cancelar",
          closeOnMaskClick: true,
        });
      },
    },
    {
      key: "cerrar",
      text: <CheckCircleOutline />,
      color: "danger",
      onClick: () => {
        Modal.show({
          content: (
            <div className="contenedor-modal">
              <p className="confirmacion">Tarea Cerrada</p>
            </div>
          ),
          closeOnMaskClick: true,
        });
      },
    },
  ];

  let ultimaHora = "";
  let ultimaFecha = "";

  return (
    <div className="contenedor-principal">
      <div className="header">
        <LeftOutline className="volver" onClick={() => history.goBack()} />
        <p className="titulo">Tareas</p>
        <div className="botones">
          <CalendarOutline
            style={{ color: "#00B33C" }}
            onClick={() => {
              Modal.confirm({
                content: <Calendario fechaCalendario={setFecha} />,
                confirmText: "Confirmar",
                cancelText: "Cancelar",
                closeOnMaskClick: true,
                onConfirm: fechaHandler,
              });
            }}
          />
          <AddCircleOutline style={{ color: "#00B33C" }} />
        </div>
      </div>
      <CapsuleTabs>
        <CapsuleTabs.Tab title="Hoy" key="1">
          <div className="contenedor-tareas">
            {(ultimaHora = "")}
            {tareas.map((tarea) => {
              if (tarea.hora !== ultimaHora) {
                ultimaHora = tarea.hora;
                return (
                  <>
                    <List
                      key={1 + tarea.fecha + tarea.hora}
                      header={tarea.hora}
                    >
                      <SwipeAction key={tarea} rightActions={rightActions}>
                        <List.Item key={tarea.id}>
                          <Ellipsis className="tarea" content={tarea.asunto} />
                          <Ellipsis
                            className="cliente"
                            content={tarea.cliente}
                          />
                        </List.Item>
                      </SwipeAction>
                    </List>
                  </>
                );
              } else {
                return (
                  <>
                    <SwipeAction key={tarea} rightActions={rightActions}>
                      <List.Item key={tarea.id}>
                        <Ellipsis className="tarea" content={tarea.asunto} />
                        <Ellipsis className="cliente" content={tarea.cliente} />
                      </List.Item>
                    </SwipeAction>
                  </>
                );
              }
            })}
          </div>
        </CapsuleTabs.Tab>
        <CapsuleTabs.Tab title="Esta semana" key="2">
          <div className="contenedor-tareas">
            <p>{"fecha" + " - " + fecha}</p>
            <p>{"fechaConfirmada" + " - " + fechaConfirmada}</p>
            {(ultimaFecha = "")}
            {tareas.map((tarea) => {
              if (tarea.fecha !== ultimaFecha) {
                ultimaFecha = tarea.fecha;
                ultimaHora = "";
                if (tarea.hora !== ultimaHora) {
                  ultimaHora = tarea.hora;
                  return (
                    <>
                      <p className="fecha">{tarea.fecha}</p>
                      <List
                        key={2 + tarea.fecha + tarea.hora}
                        header={tarea.hora}
                      >
                        <SwipeAction key={tarea} rightActions={rightActions}>
                          <List.Item key={tarea.id}>
                            <Ellipsis
                              className="tarea"
                              content={tarea.asunto}
                            />
                            <Ellipsis
                              className="cliente"
                              content={tarea.cliente}
                            />
                          </List.Item>
                        </SwipeAction>
                      </List>
                    </>
                  );
                } else {
                  return (
                    <>
                      <p className="fecha">{tarea.fecha}</p>
                      <SwipeAction key={tarea} rightActions={rightActions}>
                        <List.Item key={tarea.id}>
                          <Ellipsis className="tarea" content={tarea.asunto} />
                          <Ellipsis
                            className="cliente"
                            content={tarea.cliente}
                          />
                        </List.Item>
                      </SwipeAction>
                    </>
                  );
                }
              } else {
                if (tarea.hora !== ultimaHora) {
                  ultimaHora = tarea.hora;
                  return (
                    <>
                      <List
                        key={2 + tarea.fecha + tarea.hora}
                        header={tarea.hora}
                      >
                        <SwipeAction key={tarea} rightActions={rightActions}>
                          <List.Item key={tarea.id}>
                            <Ellipsis
                              className="tarea"
                              content={tarea.asunto}
                            />
                            <Ellipsis
                              className="cliente"
                              content={tarea.cliente}
                            />
                          </List.Item>
                        </SwipeAction>
                      </List>
                    </>
                  );
                } else {
                  return (
                    <>
                      <SwipeAction key={tarea} rightActions={rightActions}>
                        <List.Item key={tarea.id}>
                          <Ellipsis className="tarea" content={tarea.asunto} />
                          <Ellipsis
                            className="cliente"
                            content={tarea.cliente}
                          />
                        </List.Item>
                      </SwipeAction>
                    </>
                  );
                }
              }
            })}
          </div>
        </CapsuleTabs.Tab>
        <CapsuleTabs.Tab title="Semana próxima" key="3">
          <div className="contenedor-tareas">
            {tareas2.map((tarea) => {
              if (tarea.fecha !== ultimaFecha) {
                ultimaFecha = tarea.fecha;
                ultimaHora = "";
                if (tarea.hora !== ultimaHora) {
                  ultimaHora = tarea.hora;
                  return (
                    <>
                      <p className="fecha">{tarea.fecha}</p>
                      <List
                        key={3 + tarea.fecha + tarea.hora}
                        header={tarea.hora}
                      >
                        <SwipeAction key={tarea} rightActions={rightActions}>
                          <List.Item key={tarea.id}>
                            <Ellipsis
                              className="tarea"
                              content={tarea.asunto}
                            />
                            <Ellipsis
                              className="cliente"
                              content={tarea.cliente}
                            />
                          </List.Item>
                        </SwipeAction>
                      </List>
                    </>
                  );
                } else {
                  return (
                    <>
                      <p className="fecha">{tarea.fecha}</p>
                      <SwipeAction key={tarea} rightActions={rightActions}>
                        <List.Item key={tarea.id}>
                          <Ellipsis className="tarea" content={tarea.asunto} />
                          <Ellipsis
                            className="cliente"
                            content={tarea.cliente}
                          />
                        </List.Item>
                      </SwipeAction>
                    </>
                  );
                }
              } else {
                if (tarea.hora !== ultimaHora) {
                  ultimaHora = tarea.hora;
                  return (
                    <>
                      <List
                        key={3 + tarea.fecha + tarea.hora}
                        header={tarea.hora}
                      >
                        <SwipeAction key={tarea} rightActions={rightActions}>
                          <List.Item key={tarea.id}>
                            <Ellipsis
                              className="tarea"
                              content={tarea.asunto}
                            />
                            <Ellipsis
                              className="cliente"
                              content={tarea.cliente}
                            />
                          </List.Item>
                        </SwipeAction>
                      </List>
                    </>
                  );
                } else {
                  return (
                    <>
                      <SwipeAction key={tarea} rightActions={rightActions}>
                        <List.Item key={tarea.id}>
                          <Ellipsis className="tarea" content={tarea.asunto} />
                          <Ellipsis
                            className="cliente"
                            content={tarea.cliente}
                          />
                        </List.Item>
                      </SwipeAction>
                    </>
                  );
                }
              }
            })}
          </div>
        </CapsuleTabs.Tab>
        <CapsuleTabs.Tab title="Vencidas" key="4">
          4
        </CapsuleTabs.Tab>
      </CapsuleTabs>
      <div className="menu-principal">
        <TabBar>
          {tabs.map((item) => (
            <TabBar.Item
              key={item.key}
              icon={item.icon}
              title={item.title}
              badge={item.badge}
            />
          ))}
        </TabBar>
      </div>
    </div>
  );
};

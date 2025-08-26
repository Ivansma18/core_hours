import React from "react";
import "../css/Dashboard.css";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Area } from "./Area";
import { Pie } from "./Pie";
import { Tree } from "./Tree";
import { Bar } from "./Bar";
import { Line } from "./Line";
import { Footer } from "./Footer";

export const Dashboard = () => {
  return (
          <div className="contenedor-graficas">
            <div className="grafica">
              <Tree />
            </div>
            <div className="grafica">
              <Line />
            </div>
            <div className="grafica">
              <Bar />
            </div>
            <div className="grafica">
              <Area />
            </div>
            <div className="grafica">
              <Pie />
            </div>
          </div>
  );
};

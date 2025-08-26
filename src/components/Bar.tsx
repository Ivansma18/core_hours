import React from "react";
import * as echarts from "echarts";
import { useEffect, useRef } from "react";
import '../css/Dashboard.css'

export const Bar = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartDom = chartRef.current;
    if (!chartDom) return;

    const myChart = echarts.init(chartDom);

    const option = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "bar",
        },
      ],
    };
    window.addEventListener("resize", () => myChart.resize());
    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, []);

  return <div className="grafica" ref={chartRef} ></div>;
};

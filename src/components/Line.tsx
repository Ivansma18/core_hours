import React from "react";
import * as echarts from "echarts";
import { useEffect, useRef } from "react";
import '../css/Dashboard.css'

export const Line = () => {
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
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line",
          smooth: true,
        },
      ],
    };
    window.addEventListener("resize", () => myChart.resize());
    option && myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, []);

  return <div className="grafica" ref={chartRef}></div>;
};

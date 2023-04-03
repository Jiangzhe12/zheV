import { Chart } from '@antv/g2';
import { useMount } from 'ahooks';

/* eslint-disable max-len */
function BarChart() {
  useMount(() => {
    const chart = new Chart({
      container: 'container', // 容器id
      theme: 'classicDark', // 主题
      // autoFit:false,  // 图表是否自适应容器高度
      width: 1000, // 图表宽度
      height: 500, // 图表高度
    });

    chart
      .interval()
      .data({
        type: 'fetch',
        value:
          'https://gw.alipayobjects.com/os/bmw-prod/fb9db6b7-23a5-4c23-bbef-c54a55fee580.csv',
      })
      .encode('x', 'letter')
      .encode('y', 'frequency')
      // 设置y方向的坐标轴 , 标签格式 保留整数
      .axis('y', { labelFormatter: '.0%' });

    chart.render();
  });

  return (
    <>
      <div id="container"></div>
    </>
  );
}

export default BarChart;

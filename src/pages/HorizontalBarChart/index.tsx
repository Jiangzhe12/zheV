import { Chart } from '@antv/g2';
import { useMount } from 'ahooks';
/* eslint-disable max-len */
function HorizontalBarChart() {
  useMount(() => {
    const chart = new Chart({
      container: 'container',
      theme: 'classicDark',
      height: 800,
      width: 1000,
    });
    // 坐标系  transpose:转置
    chart.coordinate({ transform: [{ type: 'transpose' }] });

    chart
      .interval()
      .data({
        type: 'fetch',
        value:
          'https://gw.alipayobjects.com/os/bmw-prod/fb9db6b7-23a5-4c23-bbef-c54a55fee580.csv',
        format: 'csv', // 数据的存储形式
      })
      // 转换  sortX:按x排序  reverse:翻转   按x倒序排序
      .transform({ type: 'sortX', reverse: true })
      .encode('x', 'letter')
      .encode('y', 'frequency')
      .axis('y', { labelFormatter: '.0%' })
      .label({
        // 条形图上标签
        text: 'frequency',
        formatter: '.1%', // 保留一位小数
        style: {
          // 标签文本位置
          textAnchor: (d: any) => (+d.frequency > 0.008 ? 'right' : 'start'),
          // 标签填充颜色
          fill: (d: any) => (+d.frequency > 0.008 ? '#fff' : '#050'),
          // 横向坐标调整
          dx: (d: any) => (+d.frequency > 0.008 ? -5 : 5),
        },
      });
    chart.render();
  });

  return (
    <>
      <div id="container"></div>
    </>
  );
}
export default HorizontalBarChart;

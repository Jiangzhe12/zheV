import { Chart } from '@antv/g2';

function DivergentBarChart() {
  const chart = new Chart({
    container: 'container',
    theme: 'classic',
  });
  // 坐标系  transpose:转置
  chart.coordinate({ transform: [{ type: 'transpose' }] });

  chart
    .interval()
    .data({
      type: 'fetch',
      value:
        'https://gw.alipayobjects.com/os/bmw-prod/87b2ff47-2a33-4509-869c-dae4cdd81163.csv',
      transform: [
        {
          type: 'filter',
          callback: (d: any) => d.year === 2000,
        },
      ],
    })
    .encode('x', 'age')
    .encode('y', (d: any) => (d.sex === 1 ? -d.people : d.people))
    .encode('color', 'sex')
    // ordinal:序数词
    .scale('color', { type: 'ordinal', range: ['#ca8861', '#675193'] })
    // x轴 从大到小
    .scale('x', { range: [1, 0] })
    // y轴 科学技术法
    .axis('y', { labelFormatter: '~s' })
    .legend('color', { labelFormatter: (d: any) => (d === 1 ? 'Male' : 'Female') })
    .tooltip((d) => ({ value: d.people, name: d.sex === 1 ? 'Male' : 'Female' }));

  chart.render();
  return (
    <>
      <div id="container"></div>
    </>
  );
}

export default DivergentBarChart;

import React from 'react';
import { PieChart, Pie } from 'recharts';
const Pchart = (amap) => {
    const data = amap.amap
    return (
        <PieChart width={700} height={700}>
            <Pie
                data={data} dataKey="ttime" nameKey="key" label outerRadius={120} fill="green" />
        </PieChart>
    );
}
export default Pchart;
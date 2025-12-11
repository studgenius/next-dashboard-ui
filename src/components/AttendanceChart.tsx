"use client"

import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Image from 'next/image';

// #region Sample data
const data = [
    {
        name: 'Mon',
        Present: 60,
        Absent: 40,
    },
    {
        name: 'Tue',
        Present: 70,
        Absent: 60,
    },
    {
        name: 'Wed',
        Present: 45,
        Absent: 55,
    },
    {
        name: 'Thu',
        Present: 95,
        Absent: 23,
    },
    {
        name: 'Fri',
        Present: 45,
        Absent: 86,
    },
];


const AttendanceChart = () => {
    return (
        <div className="bg-white rounded-lg p-4 h-full">
            {/* TITLE */}
            <div className='flex justify-between items-end'>
                <h1 className='text-lg font-semibold'>Attendance</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <BarChart
                    responsive
                    width={500}
                    height={300}
                    data={data}
                    barSize={20}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd' />
                    <XAxis dataKey="name" axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
                    <YAxis width="auto" axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
                    <Tooltip contentStyle={{ borderRadius: "20px", borderColor: "lightseagreen" }} />
                    <Legend align='left' verticalAlign='top' wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }} />
                    <Bar dataKey="Present" fill="#C3EBFA" activeBar={<Rectangle fill="#C3EBFA" stroke="blue" />} legendType='circle' radius={[10, 10, 0, 0]} />
                    <Bar dataKey="Absent" fill="#FAE27C" activeBar={<Rectangle fill="#FAE27C" stroke="purple" />} legendType='circle' radius={[10, 10, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AttendanceChart
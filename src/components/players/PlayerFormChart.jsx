import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function PlayerFormChart({
  data,
  label = "Performance",
  color = "#22c55e",
}) {
  if (!data || data.length === 0) {
    return (
      <div className="h-[320px] flex items-center justify-center text-sm opacity-60">
        No performance data available
      </div>
    );
  }

  const currentYear = new Date().getFullYear();
  const startYear = currentYear - data.length;

  const chartData = data.map((value, index) => ({
    year: startYear + index + 1,
    value,
  }));

  const gradientId = `lineGlow-${label.replace(/\s+/g, "")}`;

  return (
    <div className="h-[340px] w-full rounded-2xl bg-neutral-800/60 p-6">
      <h3 className="mb-5 text-sm font-medium tracking-wide opacity-70">
        {label} · Last {data.length} Years
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={chartData}
          margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(255,255,255,0.05)"
          />

          <XAxis
            dataKey="year"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "rgba(255,255,255,0.45)", fontSize: 12 }}
          />

          <YAxis
            tickLine={false}
            axisLine={false}
            tick={{ fill: "rgba(255,255,255,0.45)", fontSize: 12 }}
            width={36}
          />

          <Tooltip
            cursor={{ stroke: "rgba(255,255,255,0.08)" }}
            contentStyle={{
              backgroundColor: "#0f0f0f",
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.08)",
              fontSize: "12px",
              padding: "8px 10px",
            }}
            labelStyle={{
              color: "#aaa",
              marginBottom: "4px",
            }}
            itemStyle={{
              color,
              fontWeight: 500,
            }}
          />

          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={0.9} />
              <stop offset="100%" stopColor={color} stopOpacity={0.15} />
            </linearGradient>
          </defs>

          <Line
            type="monotone"
            dataKey="value"
            stroke={`url(#${gradientId})`}
            strokeWidth={3}
            dot={{ r: 4, fill: color }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

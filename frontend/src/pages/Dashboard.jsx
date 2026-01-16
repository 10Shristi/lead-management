import { useEffect, useState } from "react";

const API = import.meta.env.VITE_API_BASE_URL;

export default function Dashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch(`${API}/api/leads/analytics`)
      .then(res => res.json())
      .then(data => setStats(data));
  }, []);

  if (!stats) return <p>Loading...</p>;

 return (
  <div>
    <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="bg-white p-5 rounded-lg shadow">
        <p className="text-gray-500">Total Leads</p>
        <p className="text-3xl font-bold mt-2">{stats.total}</p>
      </div>

      <div className="bg-white p-5 rounded-lg shadow">
        <p className="text-gray-500">Converted Leads</p>
        <p className="text-3xl font-bold mt-2 text-green-600">
          {stats.converted}
        </p>
      </div>

      <div className="bg-white p-5 rounded-lg shadow">
        <p className="text-gray-500 mb-2">Leads by Stage</p>
        <div className="space-y-1">
          {stats.byStage.map(s => (
            <div key={s._id} className="flex justify-between">
              <span>{s._id}</span>
              <span className="font-semibold">{s.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

}


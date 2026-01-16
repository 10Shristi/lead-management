import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API = import.meta.env.VITE_API_BASE_URL;

export default function Leads() {
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");
  const [stage, setStage] = useState("");
  const [page, setPage] = useState(1);
  // when search changes
const handleSearch = (e) => {
  setSearch(e.target.value);
  setPage(1);
};

// when stage filter changes
const handleStageChange = (e) => {
  setStage(e.target.value);
  setPage(1);
};

  useEffect(() => {
    fetch(`${API}/api/leads?search=${search}&stage=${stage}&page=${page}`)
      .then(res => res.json())
      .then(data => setLeads(data.leads));
  }, [search, stage, page]);

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Leads</h2>

//       <input
//         placeholder="Search"
//         value={search}
//         onChange={handleSearch}
//       />

//       <select onChange={handleStageChange}>
//         <option value="">All Stages</option>
//         <option value="New">New</option>
//         <option value="Contacted">Contacted</option>
//         <option value="Qualified">Qualified</option>
//         <option value="Converted">Converted</option>
//       </select>

//       <ul>
//         {leads.map((lead) => (
//           <li key={lead._id}>
//             <Link to={`/leads/${lead._id}`}>
//               {lead.name} — {lead.stage}
//             </Link>
//           </li>
//         ))}
//       </ul>

//       <button disabled={page === 1} onClick={() => setPage(page - 1)}>
//         Prev
//       </button>
//       <button onClick={() => setPage(page + 1)}>
//         Next
//       </button>
//     </div>
//   );
return (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Leads</h2>

    {/* Search + Filter */}
    <div className="flex flex-col sm:flex-row gap-3 mb-4">
      <input
        className="border rounded-md p-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search leads..."
        value={search}
        onChange={handleSearch}
      />

      <select
        className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={handleStageChange}
      >
        <option value="">All Stages</option>
        <option value="New">New</option>
        <option value="Contacted">Contacted</option>
        <option value="Qualified">Qualified</option>
        <option value="Converted">Converted</option>
      </select>
    </div>

    {/* Leads List */}
    <div >
        {leads.length === 0 && (
  <p className="text-center text-gray-500 py-6">
    No leads found...
  </p>
)}

      {leads.map((lead) => (
        <Link
          key={lead._id}
          to={`/leads/${lead._id}`}
          className="flex justify-between items-center p-4 hover:bg-gray-50"
        >
          <div>
            <p className="font-semibold">{lead.name}</p>
            <p className="text-sm text-gray-500">{lead.company}</p>
          </div>

          <span className="text-sm px-3 py-1 rounded-full bg-blue-100 text-blue-700">
            {lead.stage}
          </span>
        </Link>
      ))}
    </div>

    {/* Pagination */}
    <div className="flex justify-between mt-4">
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
      >
        Prev
      </button>

      <button
        onClick={() => setPage(page + 1)}
        className="px-4 py-2 bg-gray-200 rounded"
      >
        Next
      </button>
    </div>
  </div>
);

}

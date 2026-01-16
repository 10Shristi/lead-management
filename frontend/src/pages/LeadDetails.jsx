import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API = import.meta.env.VITE_API_BASE_URL;

export default function LeadDetails() {
  const { id } = useParams();
  const [lead, setLead] = useState(null);

  useEffect(() => {
    fetch(`${API}/api/leads/${id}`)
      .then(res => res.json())
      .then(data => setLead(data));
  }, [id]);

  if (!lead) return <p>Loading...</p>;

 return (
  <div className="max-w-lg">
    <h2 className="text-2xl font-bold mb-4">Lead Details</h2>

    <div className="bg-white p-6 rounded-lg shadow space-y-2">
      <p><b>Name:</b> {lead.name}</p>
      <p><b>Email:</b> {lead.email}</p>
      <p><b>Phone:</b> {lead.phone}</p>
      <p><b>Company:</b> {lead.company}</p>
      <p><b>Stage:</b> {lead.stage}</p>
      <p><b>Source:</b> {lead.source}</p>
    </div>
  </div>
);

}

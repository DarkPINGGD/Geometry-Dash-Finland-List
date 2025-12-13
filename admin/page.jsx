'use client';
import { useState } from "react";


export default function AdminPanel() {
const [pass, setPass] = useState("");
const [ok, setOk] = useState(false);


const check = () => {
if (pass === "derinlover") setOk(true);
else alert("Wrong password");
};


if (!ok)
return (
<div>
<h2 className="text-xl mb-4">Admin Login</h2>
<input
type="password"
className="p-2 bg-gray-900 border border-gray-700 rounded"
placeholder="Password"
onChange={(e) => setPass(e.target.value)}
/>
<button onClick={check} className="ml-2 px-3 py-2 bg-blue-700 rounded">
Login
</button>
</div>
);


return (
<div>
<h2 className="text-2xl font-bold mb-3">Admin Panel</h2>
<p>Add / delete levels (coming soon)</p>
</div>
);
}

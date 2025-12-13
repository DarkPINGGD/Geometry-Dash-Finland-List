async function getLevels() {
const res = await fetch("/api/levels");
return res.json();
}


export default async function LevelsPage() {
const levels = await getLevels();


return (
<div>
<h2 className="text-2xl font-bold mb-4">Finland Demon List</h2>


<ul className="space-y-3">
{levels.map((lvl, i) => (
<li key={i} className="p-3 bg-gray-800 rounded-lg border border-gray-700">
<b>{i + 1}. {lvl.name}</b> – {lvl.creator}
</li>
))}
</ul>
</div>
);
}

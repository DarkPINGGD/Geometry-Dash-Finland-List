export default function Home() {
return (
<div>
<h2 className="text-2xl font-bold mb-4">Welcome to Finland Demon List</h2>
<p className="opacity-80">Select a page from above.</p>


<div className="mt-6 flex gap-4">
<a href="/levels" className="px-4 py-2 bg-blue-700 rounded-lg">View Levels</a>
<a href="/admin" className="px-4 py-2 bg-red-700 rounded-lg">Admin Panel</a>
</div>
</div>
);
}

export async function POST(req) {
const body = await req.json();


if (body.password !== "derinlover")
return Response.json({ ok: false, error: "Wrong password" });


return Response.json({ ok: true });
}

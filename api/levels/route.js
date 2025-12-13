export async function GET() {
const levels = [
{ name: "Acheron", creator: "Ryamu" },
{ name: "Slaughterhouse", creator: "IceCave" },
{ name: "Kowareta", creator: "Cursed" },
];


return Response.json(levels);
}

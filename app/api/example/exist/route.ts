import { type NextRequest } from "next/server";

export async function GET(request: Request) {
  const data = await ["test"];

  return Response.json({ data });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  let existed = false;
  if (body.name) {
    // Validate if the nickname is existing
    if (body.name === "the_antonyv32") {
      existed = true;
    }
  }
  const response = { result: existed };

  return Response.json(response);
}

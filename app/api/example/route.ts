import { type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  // Simply return the request body
  const response = { result: body };

  return Response.json(response);
}

import { NextRequest, NextResponse } from "next/server";

// Step 1 of the GitHub OAuth flow Decap CMS's "github" backend needs.
// Requires OAUTH_CLIENT_ID + OAUTH_CLIENT_SECRET env vars from a GitHub
// OAuth App — see README "Setting up the /admin dashboard".
export async function GET(req: NextRequest) {
  const clientId = process.env.OAUTH_CLIENT_ID;
  if (!clientId) {
    return new NextResponse("Missing OAUTH_CLIENT_ID environment variable.", { status: 500 });
  }

  const redirectUri = `${req.nextUrl.origin}/api/callback`;
  const authorizeUrl = new URL("https://github.com/login/oauth/authorize");
  authorizeUrl.searchParams.set("client_id", clientId);
  authorizeUrl.searchParams.set("redirect_uri", redirectUri);
  authorizeUrl.searchParams.set("scope", "repo,user");

  return NextResponse.redirect(authorizeUrl.toString());
}

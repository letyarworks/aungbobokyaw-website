import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");
  const clientId = process.env.OAUTH_CLIENT_ID;
  const clientSecret = process.env.OAUTH_CLIENT_SECRET;

  if (!code || !clientId || !clientSecret) {
    return new NextResponse("Missing code or OAuth environment variables.", { status: 400 });
  }

  const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
  });
  const tokenData = await tokenRes.json();

  if (tokenData.error || !tokenData.access_token) {
    return new NextResponse(`OAuth error: ${tokenData.error_description ?? "unknown error"}`, { status: 400 });
  }

  const payload = JSON.stringify({ token: tokenData.access_token, provider: "github" }).replace(/'/g, "\\'");

  // Standard Decap/Netlify CMS popup handshake: reply to the opener window
  // once it signals "authorizing:github", then hand back the token.
  const html = `<!doctype html>
<html><body>
<script>
  (function() {
    function receiveMessage(e) {
      window.opener.postMessage(
        'authorization:github:success:${payload}',
        e.origin
      );
      window.removeEventListener('message', receiveMessage, false);
    }
    window.addEventListener('message', receiveMessage, false);
    window.opener.postMessage('authorizing:github', '*');
  })();
</script>
</body></html>`;

  return new NextResponse(html, { headers: { "Content-Type": "text/html" } });
}

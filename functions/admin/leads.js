export async function onRequestGet(context) {
  const { request, env } = context;

  // Basic Auth
  const auth = request.headers.get('Authorization') || '';
  if (!auth.startsWith('Basic ')) {
    return new Response('Unauthorized', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic realm="Vega Admin"' },
    });
  }

  const decoded = atob(auth.slice(6));
  const [user, pass] = decoded.split(':');

  if (user !== env.ADMIN_USER || pass !== env.ADMIN_PASS) {
    return new Response('Unauthorized', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic realm="Vega Admin"' },
    });
  }

  // Fetch submissions
  const { results } = await env.DB.prepare(
    'SELECT * FROM submissions ORDER BY created_at DESC LIMIT 200'
  ).all();

  const rows = results.map(r => `
    <tr>
      <td>${r.id}</td>
      <td>${esc(r.created_at)}</td>
      <td>${esc(r.name)}</td>
      <td>${esc(r.email)}</td>
      <td>${esc(r.phone || '')}</td>
      <td>${esc(r.department || '')}</td>
      <td>${esc(r.message || '')}</td>
      <td>${esc(r.country || '')}</td>
    </tr>
  `).join('');

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Vega Companies - Form Submissions</title>
<style>
  body{font-family:-apple-system,system-ui,sans-serif;margin:0;padding:24px;background:#f9f9f7;color:#1a1a1a}
  h1{font-size:20px;font-weight:600;margin-bottom:4px}
  .sub{font-size:13px;color:#888;margin-bottom:24px}
  table{width:100%;border-collapse:collapse;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,.08)}
  th,td{text-align:left;padding:10px 14px;font-size:13px;border-bottom:1px solid #eee}
  th{background:#f4f1eb;font-weight:600;font-size:11px;text-transform:uppercase;letter-spacing:.05em;color:#636058}
  tr:last-child td{border-bottom:none}
  tr:hover td{background:#fafaf8}
  .empty{text-align:center;padding:48px;color:#999}
</style>
</head>
<body>
  <h1>Vega Companies</h1>
  <p class="sub">${results.length} submission${results.length !== 1 ? 's' : ''}</p>
  ${results.length === 0
    ? '<div class="empty">No submissions yet.</div>'
    : `<table>
        <thead><tr><th>#</th><th>Date</th><th>Name</th><th>Email</th><th>Phone</th><th>Department</th><th>Message</th><th>Country</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>`
  }
</body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: { 'Content-Type': 'text/html;charset=UTF-8' },
  });
}

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

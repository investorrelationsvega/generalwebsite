export async function onRequestPost(context) {
  const { request, env } = context;

  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '',
  };

  try {
    const body = await request.json();
    const { fname, lname, email, phone, dept, message, company } = body;

    // Honeypot check
    if (company) {
      return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
    }

    // Validate required fields
    if (!fname || !lname || !email || !dept) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Missing required fields.' }),
        { status: 400, headers }
      );
    }

    const name = `${fname.trim()} ${lname.trim()}`;

    await env.DB.prepare(
      `INSERT INTO submissions (name, email, phone, department, message, user_agent, ip_address, country)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
    ).bind(
      name,
      email.trim(),
      phone?.trim() || null,
      dept.trim(),
      message?.trim() || null,
      request.headers.get('user-agent') || null,
      request.headers.get('cf-connecting-ip') || null,
      request.headers.get('cf-ipcountry') || null
    ).run();

    return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
  } catch (err) {
    return new Response(
      JSON.stringify({ ok: false, error: 'Server error.' }),
      { status: 500, headers }
    );
  }
}

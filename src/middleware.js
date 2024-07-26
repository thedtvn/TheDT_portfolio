// src/headersMiddleware.js

export async function onRequest({ request, next }) {
  const response = await next();
  let fake_header = ["Express", "PHP", "ASP.NET", "Next.js", "JSF", "web2py", "Virgool", "Alpine", "Vanilla", "WP Engine", "PageFly", "ZendServer", "Elementor Cloud"];

  // Add custom headers
  response.headers.set('X-Powered-By', fake_header);
  
  return response;
}

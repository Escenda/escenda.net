// Respond to OPTIONS method
export const onRequestOptions = async () => {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': 'http://api.escenda.net',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Max-Age': '86400',
      },
    });
  };
  
  // Set CORS to all /api responses
  export const onRequest = async ({ next }) => {
    const response = await next();
    response.headers.set('Access-Control-Allow-Origin', 'http://api.escenda.net');
    response.headers.set('Access-Control-Max-Age', '86400');
    return response;
  };
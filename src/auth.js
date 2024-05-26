// src/auth.js
const DEFAULT_AUTH = 'https://your-authentication-url.com'; // Replace with your actual authentication URL

export interface Token {
    token: string;
    expires_at: number;
}

export async function authentication_token(api_key, url = DEFAULT_AUTH) {
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ api_key })
    });
    return response.json();
}

export async function parseAuthorization(authorization, url) {
    // StreamingFast
    if (authorization.includes("server_")) {
        const { token } = await authentication_token(authorization, url);
        return token;
    // Pinax
    } else if (authorization.length === 32) {
        const { token } = await authentication_token(authorization, url);
        return token;
    }
    return authorization;
}

const API_BASE = import.meta.env.VITE_API_BASE || ''
const LOGIN_PATH = import.meta.env.VITE_AUTH_LOGIN_PATH || '/auth/login'

export async function apiFetch(path, { method='GET', headers={}, body, auth=true } = {}) {
  const url = API_BASE + path
  const token = localStorage.getItem('auth:token')
  const reqHeaders = { 'Content-Type': 'application/json', ...headers }
  if (auth && token) reqHeaders['Authorization'] = 'Bearer ' + token
  try {
    const res = await fetch(url, { method, headers: reqHeaders, body: body ? JSON.stringify(body) : undefined })
    if (res.status === 401) {
      localStorage.removeItem('auth:token')
      if (!location.pathname.startsWith('/login')) location.href = '/login'
      throw new Error('Unauthorized')
    }
    const text = await res.text()
    let data
    try { data = JSON.parse(text) } catch { data = text }
    if (!res.ok) { throw new Error((data && (data.message || data.error)) || res.statusText) }
    return data
  } catch (err) {
    console.error('apiFetch error', err)
    throw err
  }
}

export async function loginRequest(email, password) {
  const data = await apiFetch(LOGIN_PATH, { method: 'POST', auth: false, body: { email, password } })
  return data // expect { token, role }
}

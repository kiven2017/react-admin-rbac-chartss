// Very simple mock API client using local files or in-memory data
export async function list(path) {
  const res = await fetch(`/mock/list.json`)
  if (!res.ok) return []
  return res.json()
}

export async function create(path, data) {
  console.log('MOCK create', path, data)
  return { ok: true }
}

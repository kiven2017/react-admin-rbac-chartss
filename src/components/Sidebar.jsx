import React from 'react'

export default function Sidebar({ items }) {
  return (
    <aside className="h-screen sticky top-0 p-4 border-r border-border bg-bg">
      <div className="text-lg font-semibold mb-3">导航</div>
      <nav className="space-y-1 overflow-y-auto max-h-[calc(100vh-80px)] pr-2">
        {items.map((it, i) => (
          <a key={i} href={it.route} className="block text-sm px-3 py-2 rounded-lg hover:bg-white/5">
            {it.text}
          </a>
        ))}
      </nav>
    </aside>
  )
}

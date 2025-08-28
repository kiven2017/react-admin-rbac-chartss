import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { hasError: false } }
  static getDerivedStateFromError() { return { hasError: true } }
  componentDidCatch(err, info) { console.error('ErrorBoundary', err, info) }
  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2">页面出错了</h2>
          <button className="btn" onClick={()=>location.reload()}>刷新重试</button>
        </div>
      )
    }
    return this.props.children
  }
}

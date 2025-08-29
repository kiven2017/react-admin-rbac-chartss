import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import { AuthProvider } from './auth/AuthContext'
import RequireAuth from './auth/RequireAuth'
import Login from './pages/_auth/Login'
import { I18nProvider } from './i18n'
import ErrorBoundary from './components/ErrorBoundary'
import P0 from './pages/p0.jsx'
import P1 from './pages/p1.jsx'
import P2 from './pages/p2.jsx'
import P3 from './pages/p3.jsx'
import P4 from './pages/p4.jsx'
import P5 from './pages/p5.jsx'
import P6 from './pages/p6.jsx'
import P7 from './pages/p7.jsx'
import P8 from './pages/p8.jsx'
import P9 from './pages/p9.jsx'
import P10 from './pages/p10.jsx'
import P11 from './pages/p11.jsx'
import P12 from './pages/p12.jsx'
import P13 from './pages/p13.jsx'
import P14 from './pages/p14.jsx'
import P15 from './pages/p15.jsx'
import P16 from './pages/p16.jsx'
import P17 from './pages/p17.jsx'
import P18 from './pages/p18.jsx'
import P19 from './pages/p19.jsx'
import P20 from './pages/p20.jsx'
import P21 from './pages/p21.jsx'
import P22 from './pages/p22.jsx'
import P23 from './pages/p23.jsx'
import P24 from './pages/p24.jsx'
import P25 from './pages/p25.jsx'
import P26 from './pages/p26.jsx'
import P27 from './pages/p27.jsx'
import P28 from './pages/p28.jsx'
import P29 from './pages/p29.jsx'
import P30 from './pages/p30.jsx'
import P31 from './pages/p31.jsx'
import P32 from './pages/p32.jsx'
import P33 from './pages/p33.jsx'
import P34 from './pages/p34.jsx'

export default function App() {
  return (
    <I18nProvider>
    <AuthProvider>
      <div className='min-h-screen bg-bg text-white'>
        <Header />
        <div className='max-w-[1400px] mx-auto grid grid-cols-[260px_1fr] gap-0'>
          <Sidebar items={items} />
          <main className='p-6 space-y-6'><ErrorBoundary>
            <Routes>
              <Route path='/login' element={<Login />} />
              <Route path="/1/系统健康总览" element={<RequireAuth><P0 /></RequireAuth>} />
              <Route path="/1/链上状态监控" element={<RequireAuth><P1 /></RequireAuth>} />
              <Route path="/1/设备状态统计" element={<RequireAuth><P2 /></RequireAuth>} />
              <Route path="/1/性能指标可视化" element={<RequireAuth><P3 /></RequireAuth>} />
              <Route path="/1/用户活动概览" element={<RequireAuth><P4 /></RequireAuth>} />
              <Route path="/2/设备注册与生命周期管理" element={<RequireAuth><P5 /></RequireAuth>} />
              <Route path="/2/身份注册表查询" element={<RequireAuth><P6 /></RequireAuth>} />
              <Route path="/2/操作审计日志" element={<RequireAuth><P7 /></RequireAuth>} />
              <Route path="/3/固件版本库" element={<RequireAuth><P8 /></RequireAuth>} />
              <Route path="/3/多签审批工作流" element={<RequireAuth><P9 /></RequireAuth>} />
              <Route path="/3/更新部署与监控" element={<RequireAuth><P10 /></RequireAuth>} />
              <Route path="/3/固件更新历史记录" element={<RequireAuth><P11 /></RequireAuth>} />
              <Route path="/4/设备健康监控" element={<RequireAuth><P12 /></RequireAuth>} />
              <Route path="/4/节点数据管理" element={<RequireAuth><P13 /></RequireAuth>} />
              <Route path="/4/系统可观测性" element={<RequireAuth><P14 /></RequireAuth>} />
              <Route path="/4/警报与通知系统" element={<RequireAuth><P15 /></RequireAuth>} />
              <Route path="/4/AI预测维护" element={<RequireAuth><P16 /></RequireAuth>} />
              <Route path="/5/数据消费者管理" element={<RequireAuth><P17 /></RequireAuth>} />
              <Route path="/5/收入与分成报告" element={<RequireAuth><P18 /></RequireAuth>} />
              <Route path="/5/计费规则配置" element={<RequireAuth><P19 /></RequireAuth>} />
              <Route path="/5/支付集成" element={<RequireAuth><P20 /></RequireAuth>} />
              <Route path="/5/使用统计分析" element={<RequireAuth><P21 /></RequireAuth>} />
              <Route path="/6/数据合规性配置" element={<RequireAuth><P22 /></RequireAuth>} />
              <Route path="/6/安全与加密配置" element={<RequireAuth><P23 /></RequireAuth>} />
              <Route path="/6/角色与权限管理" element={<RequireAuth><P24 /></RequireAuth>} />
              <Route path="/6/备份与恢复" element={<RequireAuth><P25 /></RequireAuth>} />
              <Route path="/6/合规审计工具" element={<RequireAuth><P26 /></RequireAuth>} />
              <Route path="/安全与隐私基于趋势提升系统安全性/访问控制" element={<RequireAuth><P27 /></RequireAuth>} />
              <Route path="/安全与隐私基于趋势提升系统安全性/威胁检测" element={<RequireAuth><P28 /></RequireAuth>} />
              <Route path="/安全与隐私基于趋势提升系统安全性/隐私保护" element={<RequireAuth><P29 /></RequireAuth>} />
              <Route path="/性能优化与集成确保可扩展性/API集成管理" element={<RequireAuth><P30 /></RequireAuth>} />
              <Route path="/性能优化与集成确保可扩展性/性能监控" element={<RequireAuth><P31 /></RequireAuth>} />
              <Route path="/性能优化与集成确保可扩展性/跨链支持" element={<RequireAuth><P32 /></RequireAuth>} />
              <Route path="/性能优化与集成确保可扩展性/AI增强" element={<RequireAuth><P33 /></RequireAuth>} />
              <Route path="/性能优化与集成确保可扩展性/边缘AI接口" element={<RequireAuth><P34 /></RequireAuth>} />
              <Route path='*' element={<Navigate to={items[0]?.route || '/login'} replace />} />
            </Routes>
          </ErrorBoundary></main>
        </div>
      </div>
    </AuthProvider>
    </I18nProvider>
  )
}

const items = [
  { text: "1. · 系统健康总览", route: "/1/系统健康总览" },
  { text: "1. · 链上状态监控", route: "/1/链上状态监控" },
  { text: "1. · 设备状态统计", route: "/1/设备状态统计" },
  { text: "1. · 性能指标可视化", route: "/1/性能指标可视化" },
  { text: "1. · 用户活动概览", route: "/1/用户活动概览" },
  { text: "2. · 设备注册与生命周期管理", route: "/2/设备注册与生命周期管理" },
  { text: "2. · 身份注册表查询", route: "/2/身份注册表查询" },
  { text: "2. · 操作审计日志", route: "/2/操作审计日志" },
  { text: "3. · 固件版本库", route: "/3/固件版本库" },
  { text: "3. · 多签审批工作流", route: "/3/多签审批工作流" },
  { text: "3. · 更新部署与监控", route: "/3/更新部署与监控" },
  { text: "3. · 固件更新历史记录", route: "/3/固件更新历史记录" },
  { text: "4. · 设备健康监控", route: "/4/设备健康监控" },
  { text: "4. · 节点数据管理", route: "/4/节点数据管理" },
  { text: "4. · 系统可观测性", route: "/4/系统可观测性" },
  { text: "4. · 警报与通知系统", route: "/4/警报与通知系统" },
  { text: "4. · AI预测维护", route: "/4/AI预测维护" },
  { text: "5. · 数据消费者管理", route: "/5/数据消费者管理" },
  { text: "5. · 收入与分成报告", route: "/5/收入与分成报告" },
  { text: "5. · 计费规则配置", route: "/5/计费规则配置" },
  { text: "5. · 支付集成", route: "/5/支付集成" },
  { text: "5. · 使用统计分析", route: "/5/使用统计分析" },
  { text: "6. · 数据合规性配置", route: "/6/数据合规性配置" },
  { text: "6. · 安全与加密配置", route: "/6/安全与加密配置" },
  { text: "6. · 角色与权限管理", route: "/6/角色与权限管理" },
  { text: "6. · 备份与恢复", route: "/6/备份与恢复" },
  { text: "6. · 合规审计工具", route: "/6/合规审计工具" },
  { text: "安全与隐私（基于趋势，提升系统安全性） · 访问控制", route: "/安全与隐私基于趋势提升系统安全性/访问控制" },
  { text: "安全与隐私（基于趋势，提升系统安全性） · 威胁检测", route: "/安全与隐私基于趋势提升系统安全性/威胁检测" },
  { text: "安全与隐私（基于趋势，提升系统安全性） · 隐私保护", route: "/安全与隐私基于趋势提升系统安全性/隐私保护" },
  { text: "性能优化与集成（确保可扩展性） · API集成管理", route: "/性能优化与集成确保可扩展性/API集成管理" },
  { text: "性能优化与集成（确保可扩展性） · 性能监控", route: "/性能优化与集成确保可扩展性/性能监控" },
  { text: "性能优化与集成（确保可扩展性） · 跨链支持", route: "/性能优化与集成确保可扩展性/跨链支持" },
  { text: "性能优化与集成（确保可扩展性） · AI增强", route: "/性能优化与集成确保可扩展性/AI增强" },
  { text: "性能优化与集成（确保可扩展性） · 边缘AI接口", route: "/性能优化与集成确保可扩展性/边缘AI接口" },
]

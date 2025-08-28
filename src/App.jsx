import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import { AuthProvider } from './auth/AuthContext'
import { I18nProvider } from './i18n'
import ErrorBoundary from './components/ErrorBoundary'
import RequireAuth from './auth/RequireAuth'
import Login from './pages/_auth/Login'
import PermissionGate from './auth/PermissionGate'

// === 把以数字开头的导入名，统一换成 P{分组}_英文别名（或任意合法变量名）===
import P1_SystemOverview from './pages/1-仪表盘-dashboard/系统健康总览.jsx'
import P1_ChainStatus from './pages/1-仪表盘-dashboard/链上状态监控.jsx'
import P1_DeviceStats from './pages/1-仪表盘-dashboard/设备状态统计.jsx'
import P1_PerfViz from './pages/1-仪表盘-dashboard/性能指标可视化.jsx'
import P1_UserOverview from './pages/1-仪表盘-dashboard/用户活动概览.jsx'

import P2_DeviceLifecycle from './pages/2-链上身份管理-on-chain-identity-management/设备注册与生命周期管理.jsx'
import P2_IdentityRegistry from './pages/2-链上身份管理-on-chain-identity-management/身份注册表查询.jsx'
import P2_AuditLog from './pages/2-链上身份管理-on-chain-identity-management/操作审计日志.jsx'

import P3_FirmwareRepo from './pages/3-ota-固件管理-ota-firmware-management/固件版本库.jsx'
import P3_MultisigWorkflow from './pages/3-ota-固件管理-ota-firmware-management/多签审批工作流.jsx'
import P3_DeployMonitor from './pages/3-ota-固件管理-ota-firmware-management/更新部署与监控.jsx'
import P3_UpdateHistory from './pages/3-ota-固件管理-ota-firmware-management/固件更新历史记录.jsx'

import P4_DeviceHealth from './pages/4-节点运营与监控-node-operation-monitoring/设备健康监控.jsx'
import P4_NodeData from './pages/4-节点运营与监控-node-operation-monitoring/节点数据管理.jsx'
import P4_Observability from './pages/4-节点运营与监控-node-operation-monitoring/系统可观测性.jsx'
import P4_Alerts from './pages/4-节点运营与监控-node-operation-monitoring/警报与通知系统.jsx'
import P4_AIPredictive from './pages/4-节点运营与监控-node-operation-monitoring/ai预测维护.jsx'

import P5_DataConsumers from './pages/5-计费与收入管理-billing-revenue-management/数据消费者管理.jsx'
import P5_RevenueShare from './pages/5-计费与收入管理-billing-revenue-management/收入与分成报告.jsx'
import P5_BillingRules from './pages/5-计费与收入管理-billing-revenue-management/计费规则配置.jsx'
import P5_PaymentIntegration from './pages/5-计费与收入管理-billing-revenue-management/支付集成.jsx'
import P5_UsageAnalytics from './pages/5-计费与收入管理-billing-revenue-management/使用统计分析.jsx'

import P6_DataCompliance from './pages/6-系统设置与合规-system-settings-compliance/数据合规性配置.jsx'
import P6_SecurityCrypto from './pages/6-系统设置与合规-system-settings-compliance/安全与加密配置.jsx'
import P6_RolesPerms from './pages/6-系统设置与合规-system-settings-compliance/角色与权限管理.jsx'
import P6_BackupRestore from './pages/6-系统设置与合规-system-settings-compliance/备份与恢复.jsx'
import P6_ComplianceAudit from './pages/6-系统设置与合规-system-settings-compliance/合规审计工具.jsx'

import SecPriv_AccessControl from './pages/安全与隐私基于趋势提升系统安全性-安全与隐私基于趋势提升系统安全性/访问控制.jsx'
import SecPriv_ThreatDetection from './pages/安全与隐私基于趋势提升系统安全性-安全与隐私基于趋势提升系统安全性/威胁检测.jsx'
import SecPriv_Privacy from './pages/安全与隐私基于趋势提升系统安全性-安全与隐私基于趋势提升系统安全性/隐私保护.jsx'

import Scale_APIIntegrations from './pages/性能优化与集成确保可扩展性-性能优化与集成确保可扩展性/api集成管理.jsx'
import Scale_PerfMonitoring from './pages/性能优化与集成确保可扩展性-性能优化与集成确保可扩展性/性能监控.jsx'
import Scale_CrossChain from './pages/性能优化与集成确保可扩展性-性能优化与集成确保可扩展性/跨链支持.jsx'
import Scale_AIEnhance from './pages/性能优化与集成确保可扩展性-性能优化与集成确保可扩展性/ai增强.jsx'
import Scale_EdgeAI from './pages/性能优化与集成确保可扩展性-性能优化与集成确保可扩展性/边缘ai接口.jsx'

export default function App() {
  return (
    <I18nProvider>
      <AuthProvider>
        <div className="min-h-screen bg-bg text-white">
          <Header />
          <div className="max-w-[1400px] mx-auto grid grid-cols-[260px_1fr] gap-0">
            <Sidebar items={items} />
            <main className="p-6 space-y-6">
              <ErrorBoundary>
                <Routes>
                  <Route path="/login" element={<Login />} />

                  <Route path="/1/系统健康总览" element={<RequireAuth><P1_SystemOverview /></RequireAuth>} />
                  <Route path="/1/链上状态监控" element={<RequireAuth><P1_ChainStatus /></RequireAuth>} />
                  <Route path="/1/设备状态统计" element={<RequireAuth><P1_DeviceStats /></RequireAuth>} />
                  <Route path="/1/性能指标可视化" element={<RequireAuth><P1_PerfViz /></RequireAuth>} />
                  <Route path="/1/用户活动概览" element={<RequireAuth><P1_UserOverview /></RequireAuth>} />

                  <Route path="/2/设备注册与生命周期管理" element={<RequireAuth><P2_DeviceLifecycle /></RequireAuth>} />
                  <Route path="/2/身份注册表查询" element={<RequireAuth><P2_IdentityRegistry /></RequireAuth>} />
                  <Route path="/2/操作审计日志" element={<RequireAuth><P2_AuditLog /></RequireAuth>} />

                  <Route path="/3/固件版本库" element={<RequireAuth><P3_FirmwareRepo /></RequireAuth>} />
                  <Route path="/3/多签审批工作流" element={<RequireAuth><P3_MultisigWorkflow /></RequireAuth>} />
                  <Route path="/3/更新部署与监控" element={<RequireAuth><P3_DeployMonitor /></RequireAuth>} />
                  <Route path="/3/固件更新历史记录" element={<RequireAuth><P3_UpdateHistory /></RequireAuth>} />

                  <Route path="/4/设备健康监控" element={<RequireAuth><P4_DeviceHealth /></RequireAuth>} />
                  <Route path="/4/节点数据管理" element={<RequireAuth><P4_NodeData /></RequireAuth>} />
                  <Route path="/4/系统可观测性" element={<RequireAuth><P4_Observability /></RequireAuth>} />
                  <Route path="/4/警报与通知系统" element={<RequireAuth><P4_Alerts /></RequireAuth>} />
                  <Route path="/4/ai预测维护" element={<RequireAuth><P4_AIPredictive /></RequireAuth>} />

                  <Route path="/5/数据消费者管理" element={<RequireAuth><P5_DataConsumers /></RequireAuth>} />
                  <Route path="/5/收入与分成报告" element={<RequireAuth><P5_RevenueShare /></RequireAuth>} />
                  <Route path="/5/计费规则配置" element={<RequireAuth><P5_BillingRules /></RequireAuth>} />
                  <Route path="/5/支付集成" element={<RequireAuth><P5_PaymentIntegration /></RequireAuth>} />
                  <Route path="/5/使用统计分析" element={<RequireAuth><P5_UsageAnalytics /></RequireAuth>} />

                  <Route path="/6/数据合规性配置" element={<RequireAuth><P6_DataCompliance /></RequireAuth>} />
                  <Route path="/6/安全与加密配置" element={<RequireAuth><P6_SecurityCrypto /></RequireAuth>} />
                  <Route path="/6/角色与权限管理" element={<RequireAuth><P6_RolesPerms /></RequireAuth>} />
                  <Route path="/6/备份与恢复" element={<RequireAuth><P6_BackupRestore /></RequireAuth>} />
                  <Route path="/6/合规审计工具" element={<RequireAuth><P6_ComplianceAudit /></RequireAuth>} />

                  <Route path="/安全与隐私基于趋势提升系统安全性/访问控制" element={<RequireAuth><SecPriv_AccessControl /></RequireAuth>} />
                  <Route path="/安全与隐私基于趋势提升系统安全性/威胁检测" element={<RequireAuth><SecPriv_ThreatDetection /></RequireAuth>} />
                  <Route path="/安全与隐私基于趋势提升系统安全性/隐私保护" element={<RequireAuth><SecPriv_Privacy /></RequireAuth>} />

                  <Route path="/性能优化与集成确保可扩展性/api集成管理" element={<RequireAuth><Scale_APIIntegrations /></RequireAuth>} />
                  <Route path="/性能优化与集成确保可扩展性/性能监控" element={<RequireAuth><Scale_PerfMonitoring /></RequireAuth>} />
                  <Route path="/性能优化与集成确保可扩展性/跨链支持" element={<RequireAuth><Scale_CrossChain /></RequireAuth>} />
                  <Route path="/性能优化与集成确保可扩展性/ai增强" element={<RequireAuth><Scale_AIEnhance /></RequireAuth>} />
                  <Route path="/性能优化与集成确保可扩展性/边缘ai接口" element={<RequireAuth><Scale_EdgeAI /></RequireAuth>} />

                  <Route path="*" element={<Navigate to={items[0]?.route || '/login'} replace />} />
                </Routes>
              </ErrorBoundary>
            </main>
          </div>
        </div>
      </AuthProvider>
    </I18nProvider>
  )
}

// routes 菜单维持不变
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
  { text: "4. · AI预测维护", route: "/4/ai预测维护" },
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
  { text: "性能优化与集成（确保可扩展性） · API集成管理", route: "/性能优化与集成确保可扩展性/api集成管理" },
  { text: "性能优化与集成（确保可扩展性） · 性能监控", route: "/性能优化与集成确保可扩展性/性能监控" },
  { text: "性能优化与集成（确保可扩展性） · 跨链支持", route: "/性能优化与集成确保可扩展性/跨链支持" },
  { text: "性能优化与集成（确保可扩展性） · AI增强", route: "/性能优化与集成确保可扩展性/ai增强" },
  { text: "性能优化与集成（确保可扩展性） · 边缘AI接口", route: "/性能优化与集成确保可扩展性/边缘ai接口" },
]

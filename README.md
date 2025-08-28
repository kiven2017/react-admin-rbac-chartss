# AI Oracle Admin (Black-Gold + RBAC)

已接入：黑金主题、登录页、角色权限（admin/operator/auditor/viewer）、权限门控、表单校验、Mock API。

## 启动
```bash
npm install
npm run dev
```
浏览器访问 Vite 提示的地址，首先进入 /login：选择角色体验权限差异。

## 目录
- `src/auth/*` 登录/权限/路由守卫
- `src/components/*` Header/Sidebar/Table/Form
- `src/pages/_auth/Login.jsx` 登录页
- `src/pages/<module>/<feature>.jsx` 由规格表生成的页面
- `src/lib/api.js` Mock API 客户端
- `src/rbac.json` 角色与权限映射（由规格 Permissions 推导）

## 说明
- 按钮与列表/表单均通过 PermissionGate 做权限门控。
- 可在 `src/rbac.json` 调整角色权限；新增角色后在登录页下拉中补充即可。
- 如需联调后端接口，把 `src/lib/api.js` 的 `list/create` 改为真实 fetch/axios 调用。

## 本次新增
- Recharts 图表 + 实时刷新（10/30/60s，可关闭）
- 统一请求拦截器（Token 自动注入 / 401 自动跳转登录）
- 错误边界（全局 + 页面级）
- 中英切换（Header 下拉）
- API 按规范表自动注册（src/lib/api.registry.json）并通过 `listByFeature/createByFeature` 调用
- `.env.sample`：配置 `VITE_API_BASE` 和登录路径

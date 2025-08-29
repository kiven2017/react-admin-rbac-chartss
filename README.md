# AI Oracle Admin — Fixed Pack (no f-strings)
- ASCII 安全页面命名：`src/pages/p{index}.jsx`；`App.jsx` 用 `P{index}` 导入
- 集成：RBAC、i18n（中英）、统一请求拦截（Token/401跳转）、错误边界、Recharts 实时刷新（可关）
- API 自动写入 `src/lib/api.registry.json`

## 使用
```bash
cp .env.sample .env
# 配置 VITE_API_BASE / VITE_AUTH_LOGIN_PATH
npm i
npm run dev
npm run build
```

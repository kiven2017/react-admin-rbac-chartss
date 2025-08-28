import React, { createContext, useContext, useMemo, useState } from 'react'
import zh from './locales/zh.json'
import en from './locales/en.json'

const I18nCtx = createContext(null)

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(localStorage.getItem('i18n:lang') || 'zh')
  const dict = lang === 'zh' ? zh : en

  function t(key, fallback) { return dict[key] ?? fallback ?? key }
  function switchTo(next) { setLang(next); localStorage.setItem('i18n:lang', next) }
  const value = useMemo(() => ({ lang, t, switchTo }), [lang])
  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nCtx)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}

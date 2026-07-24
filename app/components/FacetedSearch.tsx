'use client'

import { useState, useMemo, useCallback, useRef, useEffect } from 'react'

// ============================================================
// Types
// ============================================================
export interface ServiceItem {
  id: string
  title: string
  category: string      // AI, Cloud, Cyber, DevOps, etc.
  industry: string      // Healthcare, Finance, Retail, etc.
  useCase: string       // Automation, Analytics, Security, etc.
  description: string
}

export interface FacetFilters {
  categories: string[]
  industries: string[]
  useCases: string[]
}

// ============================================================
// FacetedSearch Component
// - Filters by category / industry / use case
// - Virtualized list to handle 850+ items smoothly
// - Dark / light mode toggle via document.html class
// ============================================================
interface Props {
  data: ServiceItem[]
  viewportHeight?: number
  itemHeight?: number
  overscan?: number
  initialDarkMode?: boolean
}

const DEFAULT_ITEM_HEIGHT = 152
const DEFAULT_OVERSCAN = 5

export default function FacetedSearch({
  data,
  viewportHeight = 640,
  itemHeight = DEFAULT_ITEM_HEIGHT,
  overscan = DEFAULT_OVERSCAN,
  initialDarkMode = false,
}: Props) {
  // --- State ---
  const [filters, setFilters] = useState<FacetFilters>({
    categories: [],
    industries: [],
    useCases: [],
  })
  const [query, setQuery] = useState('')
  const [darkMode, setDarkMode] = useState(initialDarkMode)
  const [mobileOpen, setMobileOpen] = useState(false)

  // Virtualization
  const [scrollTop, setScrollTop] = useState(0)
  const [viewport, setViewport] = useState(viewportHeight)
  const scrollRef = useRef<HTMLDivElement>(null)

  // Keep Tailwind dark: strategy in sync with root class
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  // Track container height
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    setViewport(el.clientHeight)
    const ro = new ResizeObserver(entries => {
      const h = entries[0]?.contentRect?.height
      if (typeof h === 'number') setViewport(h)
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // --- Filtering ---
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return data.filter(item => {
      if (filters.categories.length && !filters.categories.includes(item.category)) return false
      if (filters.industries.length && !filters.industries.includes(item.industry)) return false
      if (filters.useCases.length && !filters.useCases.includes(item.useCase)) return false
      if (q && !item.title.toLowerCase().includes(q)) return false
      return true
    })
  }, [data, filters, query])

  // Facet options are computed dynamically from available items
  const facets = useMemo(() => {
    const cats = new Set<string>()
    const inds = new Set<string>()
    const ucs = new Set<string>()
    data.forEach(item => {
      if (!filters.categories.length || filters.categories.includes(item.category)) cats.add(item.category)
      if (!filters.industries.length || filters.industries.includes(item.industry)) inds.add(item.industry)
      if (!filters.useCases.length || filters.useCases.includes(item.useCase)) ucs.add(item.useCase)
    })
    return {
      categories: Array.from(cats).sort(),
      industries: Array.from(inds).sort(),
      useCases: Array.from(ucs).sort(),
    }
  }, [data, filters])

  // --- Virtualization math ---
  const { visibleItems, totalHeight } = useMemo(() => {
    const count = filtered.length
    const total = count * itemHeight
    let start = Math.floor(scrollTop / itemHeight)
    let end = Math.ceil((scrollTop + viewport) / itemHeight)
    start = Math.max(0, start - overscan)
    end = Math.min(count, end + overscan)

    const visible = filtered.slice(start, end).map((item, idx) => ({
      item,
      index: start + idx,
      offset: (start + idx) * itemHeight,
    }))

    return { visibleItems: visible, totalHeight: total }
  }, [filtered, scrollTop, viewport, itemHeight, overscan])

  // --- Handlers ---
  const toggleFilter = useCallback((group: keyof FacetFilters, value: string) => {
    setFilters(prev => {
      const current = prev[group]
      const next = current.includes(value) ? current.filter(v => v !== value) : [...current, value]
      return { ...prev, [group]: next }
    })
    setScrollTop(0)
    if (scrollRef.current) scrollRef.current.scrollTop = 0
  }, [])

  const clearAll = useCallback(() => {
    setFilters({ categories: [], industries: [], useCases: [] })
    setQuery('')
    setScrollTop(0)
    if (scrollRef.current) scrollRef.current.scrollTop = 0
  }, [])

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop)
  }, [])

  const toggleDarkMode = useCallback(() => {
    setDarkMode(d => !d)
  }, [])

  // --- UI ---
  const FilterSection = ({ title, values, group }: { title: string; values: string[]; group: keyof FacetFilters }) => (
    <div className="mb-4">
      <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider opacity-60">{title}</h3>
      <div className="space-y-1.5">
        {values.map(value => {
          const checked = filters[group].includes(value)
          return (
            <label
              key={value}
              className={`flex cursor-pointer items-center gap-2 text-sm ${checked ? 'font-medium' : ''}`}
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => toggleFilter(group, value)}
                className="h-4 w-4 rounded border-slate-300 text-purple-600 focus:ring-purple-500"
              />
              {value}
            </label>
          )
        })}
      </div>
    </div>
  )

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Mobile backdrop */}
      {mobileOpen && (
        <div className="fixed inset-0 z-20 bg-black/30 lg:hidden" onClick={() => setMobileOpen(false)} />
      )}

      {/* Mobile & sidebar filters */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-80 overflow-y-auto bg-white/95 p-5 backdrop-blur transition-transform dark:bg-slate-900/95 lg:static lg:translate-x-0 lg:w-72 xl:w-80 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between lg:hidden">
          <h2 className="text-lg font-bold">Filters</h2>
          <button onClick={() => setMobileOpen(false)} className="rounded p-1">✕</button>
        </div>

        <div className="mt-4 lg:mt-0">
          <input
            type="text"
            placeholder="Quick search..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="mb-4 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-800"
          />
          <FilterSection title="Industry" values={facets.industries} group="industries" />
          <FilterSection title="Category" values={facets.categories} group="categories" />
          <FilterSection title="Use Case" values={facets.useCases} group="useCases" />
        </div>

        <button
          onClick={clearAll}
          className="mt-6 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
        >
          Clear All Filters
        </button>
      </aside>

      {/* Main viewport */}
      <main className="flex flex-1 flex-col overflow-hidden">
        {/* Top header */}
        <header className="flex items-center justify-between border-b bg-white/60 px-4 py-3 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 lg:px-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileOpen(true)}
              className="rounded-lg p-2 lg:hidden hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Open filters"
            >
              ☰
            </button>
            <div>
              <h1 className="text-xl font-bold">AI & IT Services</h1>
              <p className="text-xs opacity-70">{filtered.length} result{filtered.length !== 1 ? 's' : ''}</p>
            </div>
          </div>

          <button
            onClick={toggleDarkMode}
            className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm dark:border-slate-700"
          >
            {darkMode ? 'Light' : 'Dark'}
          </button>
        </header>

        {/* Results list */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex-1 overflow-auto px-4 py-4 lg:px-6"
        >
          {filtered.length === 0 ? (
            <div className="flex h-96 items-center justify-center text-center opacity-70">
              <div>
                <p className="text-xl font-semibold">No services match your filters</p>
                <p className="mt-2 text-sm">Remove a filter or try a different search.</p>
              </div>
            </div>
          ) : (
            <div className="relative mx-auto max-w-6xl" style={{ height: totalHeight, contain: 'strict' }}>
              {visibleItems.map(({ item, offset }) => (
                <div
                  key={item.id}
                  className="absolute left-0 right-0 px-1"
                  style={{ transform: `translateY(${offset}px)`, height: itemHeight - 16 }}
                >
                  <div
                    className={`h-full rounded-xl border p-5 shadow-sm transition-colors ${
                      darkMode ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'
                    }`}
                  >
                    <div className="flex h-full flex-col gap-2">
                      <h3 className="text-base font-semibold md:text-lg">{item.title}</h3>
                      <p className="line-clamp-2 text-sm opacity-80">{item.description}</p>
                      <div className="mt-auto flex flex-wrap gap-2">
                        <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                          {item.category}
                        </span>
                        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                          {item.industry}
                        </span>
                        <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                          {item.useCase}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

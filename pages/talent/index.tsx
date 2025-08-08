import { useEffect, useMemo, useState } from 'react'
import { TALENT_PROFILES, TalentProfile } from '../../data/talent'
import Skeleton from '../../components/ui/Skeleton'
import { useToast } from '../../components/ui/ToastProvider'

const PAGE_SIZE = 6

export default function BrowseTalentPage() {
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [favorites, setFavorites] = useState<string[]>([])
  const { addToast } = useToast()

  useEffect(() => {
    const favs = localStorage.getItem('zion.favorites')
    setFavorites(favs ? JSON.parse(favs) : [])
  }, [])

  useEffect(() => {
    setLoading(true)
    const t = setTimeout(() => setLoading(false), 800)
    return () => clearTimeout(t)
  }, [page])

  useEffect(() => {
    localStorage.setItem('zion.favorites', JSON.stringify(favorites))
  }, [favorites])

  const items: TalentProfile[] = useMemo(() => TALENT_PROFILES, [])
  const totalPages = Math.max(1, Math.ceil(items.length / PAGE_SIZE))
  const pageItems = items.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const toggleFavorite = (slug: string) => {
    setFavorites(prev => {
      const isFav = prev.includes(slug)
      const next = isFav ? prev.filter(s => s !== slug) : [...prev, slug]
      addToast({
        title: isFav ? 'Removed from favorites' : 'Saved to favorites',
        description: isFav ? 'We will no longer highlight this profile.' : 'We will highlight this profile for quick access.',
        variant: 'success',
        actionLabel: 'Undo',
        onAction: () => setFavorites(isFav ? [...prev, slug] : prev.filter(s => s !== slug)),
      })
      return next
    })
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Browse Talent</h2>
        <div className="text-sm opacity-70">Page {page} of {totalPages}</div>
      </div>
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: PAGE_SIZE }).map((_, i) => (
            <div key={i} className="border rounded-lg p-4">
              <Skeleton className="h-5 w-1/2" />
              <Skeleton className="h-4 w-2/3 mt-3" />
              <Skeleton className="h-4 w-full mt-2" />
              <Skeleton className="h-8 w-32 mt-4" />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pageItems.map(p => (
            <div key={p.slug} className="border rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{p.name}</div>
                  <div className="text-sm opacity-80">{p.title}</div>
                </div>
                <button onClick={() => toggleFavorite(p.slug)} className={`text-xs px-2 py-1 rounded-md border ${favorites.includes(p.slug) ? 'bg-emerald-500/10 border-emerald-400/40' : ''}`}>{favorites.includes(p.slug) ? 'Favorited' : 'Favorite'}</button>
              </div>
              <div className="text-sm mt-2 opacity-80">{p.bio}</div>
              <div className="flex flex-wrap gap-2 mt-3">
                {p.skills.map(s => <span key={s} className="text-xs rounded-full border px-2 py-0.5">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="flex items-center justify-center gap-3 mt-6">
        <button disabled={page === 1} onClick={() => setPage(p => Math.max(1, p - 1))} className="px-3 py-2 rounded-md border disabled:opacity-40">Previous</button>
        <button disabled={page === totalPages} onClick={() => setPage(p => Math.min(totalPages, p + 1))} className="px-3 py-2 rounded-md border disabled:opacity-40">Next</button>
      </div>
    </div>
  )
}
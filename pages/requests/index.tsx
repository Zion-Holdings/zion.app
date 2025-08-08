import EmptyState from '../../components/ui/EmptyState'

export default function RequestsPage() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Requests</h2>
      <EmptyState title="Nothing here yet..." message="Submit a quote or respond to invitations to see them here." ctaLabel="Submit a quote" ctaHref="/dashboard" />
    </div>
  )
}
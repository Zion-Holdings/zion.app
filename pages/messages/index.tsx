import { useToast } from '../../components/ui/ToastProvider'
import EmptyState from '../../components/ui/EmptyState'

export default function MessagesPage() {
  const { addToast } = useToast()
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Messages</h2>
      <EmptyState title="Nothing here yet..." message="Start a conversation with talent or clients." ctaLabel="Browse Talent" ctaHref="/talent" />
      <div className="mt-6">
        <button onClick={() => addToast({ title: 'Message sent', description: 'We delivered your message.', variant: 'success', actionLabel: 'View', onAction: () => (window.location.href = '/messages') })} className="px-3 py-2 rounded-md border">Send test message</button>
      </div>
    </div>
  )
}
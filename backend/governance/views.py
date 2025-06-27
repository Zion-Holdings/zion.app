from rest_framework import viewsets, status, permissions, filters
from rest_framework.decorators import action
from rest_framework.response import Response
from django.utils import timezone
from django.db.models import Count, Sum, Q
from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page
from django_filters.rest_framework import DjangoFilterBackend
from .models import Proposal, Vote
from .serializers import (
    ProposalSerializer,
    ProposalListSerializer,
    ProposalDetailSerializer,
    VoteSerializer,
    VoteResultSerializer,
)
import os
import requests

def get_wallet_balance(user_id: str) -> float:
    """Fetch the user's ZION$ balance from Supabase."""
    url = os.getenv("SUPABASE_URL")
    key = os.getenv("SUPABASE_SERVICE_ROLE_KEY")
    if not url or not key:
        return 0.0

    headers = {
        "apikey": key,
        "Authorization": f"Bearer {key}",
    }

    try:
        response = requests.get(
            f"{url}/rest/v1/wallets",
            params={"user_id": f"eq.{user_id}", "select": "balance"},
            headers=headers,
            timeout=5,
        )
        response.raise_for_status()
        data = response.json()
        if data:
            return float(data[0].get("balance", 0))
    except Exception:
        pass
    return 0.0

class ProposalViewSet(viewsets.ModelViewSet):
    queryset = Proposal.objects.all().prefetch_related('votes')  # Optimize by prefetching votes
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    filterset_fields = ['status', 'proposal_type']
    ordering_fields = ['created_at', 'voting_ends_at']
    search_fields = ['title', 'summary']
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly] # Adjust as needed

    def get_serializer_class(self):
        if self.action == 'list':
            return ProposalListSerializer
        if self.action == 'retrieve':
            return ProposalDetailSerializer
        return ProposalSerializer # For create, update, partial_update

    def perform_create(self, serializer):
        # Associate the proposal with the logged-in user if proposer_id is not set
        if self.request.user.is_authenticated and not serializer.validated_data.get('proposer'):
            serializer.save(proposer=self.request.user, status='PENDING_REVIEW')
        else:
            # If proposer_id is provided or user is anonymous, save as is or handle error
            # For now, defaulting status. This might need more complex logic for anonymous proposals.
            serializer.save(status='PENDING_REVIEW')

    @action(detail=True, methods=['post'], permission_classes=[permissions.IsAuthenticated]) # Ensure user is logged in to vote
    def submit_vote(self, request, pk=None):
        proposal = self.get_object()
        user = request.user

        if proposal.status != 'ACTIVE':
            return Response({'error': 'Voting is not active for this proposal.'}, status=status.HTTP_400_BAD_REQUEST)

        if proposal.voting_starts_at and proposal.voting_starts_at > timezone.now():
            return Response({'error': 'Voting has not started yet.'}, status=status.HTTP_400_BAD_REQUEST)

        if proposal.voting_ends_at and proposal.voting_ends_at < timezone.now():
            return Response({'error': 'Voting period has ended.'}, status=status.HTTP_400_BAD_REQUEST)

        # Check if user already voted
        if Vote.objects.filter(proposal=proposal, voter=user).exists():
             return Response({'error': 'You have already voted on this proposal.'}, status=status.HTTP_400_BAD_REQUEST)

        serializer = VoteSerializer(
            data=request.data,
            context={"proposal": proposal, "request": request}
        )
        if serializer.is_valid():
            voting_power = serializer.validated_data.get('voting_power_at_snapshot')
            if voting_power is None:
                voting_power = get_wallet_balance(str(user.id))

            serializer.save(
                proposal=proposal,
                voter=user,
                voter_wallet_address=request.data.get('voter_wallet_address'), # Or get from connected wallet
                voting_power_at_snapshot=voting_power
            )
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @method_decorator(cache_page(300))
    @action(detail=True, methods=['get'])
    def results(self, request, pk=None):
        proposal = self.get_object()
        aggregates = Vote.objects.filter(proposal=proposal).aggregate(
            approve_count=Count('id', filter=Q(choice='APPROVE')),
            reject_count=Count('id', filter=Q(choice='REJECT')),
            abstain_count=Count('id', filter=Q(choice='ABSTAIN')),
            approve_power=Sum('voting_power_at_snapshot', filter=Q(choice='APPROVE')),
            reject_power=Sum('voting_power_at_snapshot', filter=Q(choice='REJECT')),
            abstain_power=Sum('voting_power_at_snapshot', filter=Q(choice='ABSTAIN')),
        )

        results_data = {k: aggregates.get(k) or 0 for k in aggregates}
        results_data['total_votes_cast'] = (
            results_data['approve_count']
            + results_data['reject_count']
            + results_data['abstain_count']
        )
        results_data['total_voting_power_cast'] = (
            results_data['approve_power']
            + results_data['reject_power']
            + results_data['abstain_power']
        )

        serializer = VoteResultSerializer(data=results_data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.data)

class MyVotesViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = VoteSerializer # Or a custom serializer for this view
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Vote.objects.filter(voter=user).select_related('proposal')

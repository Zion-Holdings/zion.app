from rest_framework import viewsets, status, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from django.utils import timezone
from django.db.models import Count, Sum
from .models import Proposal, Vote
from .serializers import (
    ProposalSerializer, ProposalListSerializer, ProposalDetailSerializer,
                            VoteSerializer, VoteResultSerializer
)

class ProposalViewSet(viewsets.ModelViewSet):
    queryset = Proposal.objects.all().prefetch_related('votes') # Optimize by prefetching votes
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

        serializer = VoteSerializer(data=request.data)
        if serializer.is_valid():
            # TODO: Determine voting_power_at_snapshot based on ZION$ holdings
            # This is a placeholder value.
            # This logic will need to query user's token balance at the relevant snapshot time/block.
            # For now, let's assume it's passed in or a default is used.
            voting_power = serializer.validated_data.get('voting_power_at_snapshot', 1.0) # Default to 1 if not provided

            serializer.save(
                proposal=proposal,
                voter=user,
                voter_wallet_address=request.data.get('voter_wallet_address'), # Or get from connected wallet
                voting_power_at_snapshot=voting_power
            )
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=['get'])
    def results(self, request, pk=None):
        proposal = self.get_object()
        votes = proposal.votes.all()

        results_data = {
            'approve_count': votes.filter(choice='APPROVE').count(),
            'reject_count': votes.filter(choice='REJECT').count(),
            'abstain_count': votes.filter(choice='ABSTAIN').count(),
            'approve_power': votes.filter(choice='APPROVE').aggregate(total=Sum('voting_power_at_snapshot'))['total'] or 0,
            'reject_power': votes.filter(choice='REJECT').aggregate(total=Sum('voting_power_at_snapshot'))['total'] or 0,
            'abstain_power': votes.filter(choice='ABSTAIN').aggregate(total=Sum('voting_power_at_snapshot'))['total'] or 0,
        }
        results_data['total_votes_cast'] = sum(results_data[key] for key in ['approve_count', 'reject_count', 'abstain_count'])
        results_data['total_voting_power_cast'] = sum(results_data[key] for key in ['approve_power', 'reject_power', 'abstain_power'])

        serializer = VoteResultSerializer(data=results_data)
        serializer.is_valid(raise_exception=True) # Should be valid as we construct it
        return Response(serializer.data)

class MyVotesViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = VoteSerializer # Or a custom serializer for this view
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Vote.objects.filter(voter=user).select_related('proposal')

# TODO: Add filtering capabilities to ProposalViewSet (e.g., using django-filter)
# for status, type, etc.

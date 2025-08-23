from rest_framework import serializers
from .models import Proposal, Vote
from django.contrib.auth import get_user_model
from django.utils import timezone

User = get_user_model()

class ProposerSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email'] # Adjust as needed

class VoteSerializer(serializers.ModelSerializer):
    voter = ProposerSerializer(read_only=True) # Display voter details
    voter_id = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(), source='voter', write_only=True, required=False, allow_null=True
    )

    class Meta:
        model = Vote
        fields = [
            'id', 'proposal', 'voter', 'voter_id', 'voter_wallet_address',
            'voting_power_at_snapshot', 'choice', 'voted_at', 'snapshot_vote_id'
        ]
        read_only_fields = ['id', 'voted_at', 'voter']

    def validate(self, data):
        """Additional validation for votes."""
        # Ensure either voter_id (for platform users) or voter_wallet_address is provided
        if not data.get("voter") and not data.get("voter_wallet_address"):
            raise serializers.ValidationError(
                "Either platform user (voter_id) or voter_wallet_address must be provided."
            )

        proposal = self.context.get("proposal") or data.get("proposal")
        request = self.context.get("request")

        if proposal:
            # 1. Check if proposal is active for voting
            if proposal.status != "ACTIVE":
                raise serializers.ValidationError("Voting is not active for this proposal.")

            if proposal.voting_starts_at and proposal.voting_starts_at > timezone.now():
                raise serializers.ValidationError("Voting has not started yet.")

            if proposal.voting_ends_at and proposal.voting_ends_at < timezone.now():
                raise serializers.ValidationError("Voting period has ended.")

            # 2. Check if user has already voted
            user = getattr(request, "user", None)
            if user and Vote.objects.filter(proposal=proposal, voter=user).exists():
                raise serializers.ValidationError("You have already voted on this proposal.")

        # 3. Check if voting_power_at_snapshot is provided and valid
        if data.get("voting_power_at_snapshot") is None:
            raise serializers.ValidationError("voting_power_at_snapshot is required.")

        return data

class ProposalSerializer(serializers.ModelSerializer):
    proposer = ProposerSerializer(read_only=True)
    proposer_id = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(), source='proposer', write_only=True, required=False, allow_null=True
    )
    # votes = VoteSerializer(many=True, read_only=True) # Optionally embed votes directly

    class Meta:
        model = Proposal
        fields = [
            'id', 'title', 'summary', 'proposal_type', 'status',
            'proposer', 'proposer_id', 'created_at', 'voting_starts_at', 'voting_ends_at',
            'quorum_percentage', 'funding_ask_amount', 'funding_ask_token_symbol',
            'reference_links', 'snapshot_proposal_id', 'snapshot_space_id' #, 'votes'
        ]
        read_only_fields = ['id', 'created_at', 'proposer', 'status'] # Status might be updatable by admin actions later

class ProposalListSerializer(ProposalSerializer):
    # Could be a lighter version for list views if needed
    class Meta(ProposalSerializer.Meta):
        pass

class ProposalDetailSerializer(ProposalSerializer):
    votes = VoteSerializer(many=True, read_only=True) # Embed votes in detail view

    class Meta(ProposalSerializer.Meta):
        fields = ProposalSerializer.Meta.fields + ['votes']


class VoteResultSerializer(serializers.Serializer):
    approve_count = serializers.IntegerField()
    reject_count = serializers.IntegerField()
    abstain_count = serializers.IntegerField()
    approve_power = serializers.DecimalField(max_digits=28, decimal_places=18)
    reject_power = serializers.DecimalField(max_digits=28, decimal_places=18)
    abstain_power = serializers.DecimalField(max_digits=28, decimal_places=18)
    total_votes_cast = serializers.IntegerField()
    total_voting_power_cast = serializers.DecimalField(max_digits=28, decimal_places=18)
    # Add quorum status, proposal status etc. if needed

from django.db import models
from django.conf import settings # To get the User model

# It's good practice to use settings.AUTH_USER_MODEL
# Ensure your Django settings have AUTH_USER_MODEL defined if it's custom
# If not, from django.contrib.auth.models import User might be an alternative
# but settings.AUTH_USER_MODEL is more flexible.
# For this plan, we'll assume settings.AUTH_USER_MODEL is appropriate.

class Proposal(models.Model):
    PROPOSAL_TYPES = [
        ('FEATURE', 'Feature Enhancement'),
        ('BUDGET', 'Budget Allocation'),
        ('COMMUNITY_GRANT', 'Community Grant'),
        ('GENERAL', 'General Proposal'), # Added a general type
    ]

    STATUS_CHOICES = [
        ('PENDING_REVIEW', 'Pending Review'), # Initial state before it's open for voting
        ('ACTIVE', 'Active (Voting Open)'),
        ('CLOSED_SUCCESSFUL', 'Closed (Successful)'), # Voting ended, quorum met, approved
        ('CLOSED_FAILED_QUORUM', 'Closed (Failed - Quorum Not Met)'),
        ('CLOSED_FAILED_REJECTED', 'Closed (Failed - Rejected)'),
        ('EXECUTED', 'Executed'), # Approved and implemented
        ('QUEUED_FOR_EXECUTION', 'Queued for Execution'), # Approved, waiting for implementation
        ('CANCELED', 'Canceled'), # Canceled before voting or during
    ]

    title = models.CharField(max_length=255)
    summary = models.TextField()
    proposal_type = models.CharField(max_length=20, choices=PROPOSAL_TYPES, default='GENERAL')
    status = models.CharField(max_length=30, choices=STATUS_CHOICES, default='PENDING_REVIEW')

    # Using settings.AUTH_USER_MODEL which typically points to django.contrib.auth.models.User
    # or a custom user model.
    # If direct wallet addresses can propose without being a platform user,
    # this might need to be a CharField for the address and allow null/blank for user.
    # For now, assuming proposers are registered users.
    proposer = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True, related_name='governance_proposals')

    created_at = models.DateTimeField(auto_now_add=True)
    voting_starts_at = models.DateTimeField(null=True, blank=True) # Can be set when proposal moves to ACTIVE
    voting_ends_at = models.DateTimeField(null=True, blank=True)   # Can be set when proposal moves to ACTIVE

    # Quorum percentage: e.g., 0.20 for 20%. Store as a float.
    # This might be % of total token supply, or % of staked tokens, or % of registered voters.
    # The exact calculation of whether quorum is met will be in the business logic.
    quorum_percentage = models.FloatField(null=True, blank=True, help_text="Required participation rate (e.g., 0.20 for 20%). Calculation depends on governance rules.")

    funding_ask_amount = models.DecimalField(max_digits=19, decimal_places=4, null=True, blank=True)
    funding_ask_token_symbol = models.CharField(max_length=10, null=True, blank=True, help_text="e.g., USD, ETH, ZION$")

    reference_links = models.JSONField(default=list, null=True, blank=True, help_text='List of URLs, e.g., ["http://example.com/doc1"]')

    snapshot_proposal_id = models.CharField(max_length=100, null=True, blank=True, help_text="ID of the proposal on Snapshot.org, if applicable")
    snapshot_space_id = models.CharField(max_length=100, null=True, blank=True, help_text="Snapshot space ID (e.g., yourproject.eth)")


    def __str__(self):
        return f"{self.title} ({self.get_status_display()})"

    class Meta:
        ordering = ['-created_at']
        verbose_name_plural = "Proposals"

class Vote(models.Model):
    VOTE_CHOICES = [
        ('APPROVE', 'Approve'),
        ('REJECT', 'Reject'),
        ('ABSTAIN', 'Abstain'),
    ]

    proposal = models.ForeignKey(Proposal, related_name='votes', on_delete=models.CASCADE)

    # Similar to proposer, assuming voters are registered users.
    # If voting is purely by external wallet, this might be a CharField for the address.
    voter = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True, related_name='governance_votes')
    voter_wallet_address = models.CharField(max_length=42, null=True, blank=True, help_text="Voter's blockchain wallet address, if vote is cast via wallet signature.")

    # Voting power at the time of vote, or based on a specific snapshot block.
    # This is crucial for weighted voting.
    voting_power_at_snapshot = models.DecimalField(max_digits=28, decimal_places=18, help_text="Voter's token balance or voting weight at the time of the relevant snapshot.")

    choice = models.CharField(max_length=10, choices=VOTE_CHOICES)
    voted_at = models.DateTimeField(auto_now_add=True)

    snapshot_vote_id = models.CharField(max_length=100, null=True, blank=True, help_text="ID of the vote on Snapshot.org, if applicable")

    def __str__(self):
        return f"Vote for \"{self.proposal.title}\" by {self.voter.username if self.voter else self.voter_wallet_address} - {self.get_choice_display()}"

    class Meta:
        ordering = ['-voted_at']
        # Ensures a user (or wallet address) can only vote once per proposal
        unique_together = [['proposal', 'voter'], ['proposal', 'voter_wallet_address']]
        verbose_name_plural = "Votes"

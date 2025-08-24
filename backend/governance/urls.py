from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProposalViewSet, MyVotesViewSet

router = DefaultRouter()
router.register(r'proposals', ProposalViewSet, basename='proposal')
router.register(r'my-votes', MyVotesViewSet, basename='my-votes')
# The proposal-specific vote submission and results are actions on ProposalViewSet

urlpatterns = [
    path('', include(router.urls)),
]

# Defines role-based permissions for accessing document sections.

SECTION_ROLE_PERMISSIONS = {
    'FINANCIALS': ['FINANCE', 'CEO', 'SUPERADMIN'],
    'CAP_TABLE': ['FINANCE', 'CEO', 'SUPERADMIN'],
    'LEGAL_DOCS': ['LEGAL', 'CEO', 'SUPERADMIN'],
    'STRATEGIC_PARTNERSHIPS': ['CEO', 'SUPERADMIN'],
    'PRESS_COVERAGE_PR_KIT': ['CEO', 'SUPERADMIN'], # Typically managed by marketing/CEO/Superadmin
    'OTHER': ['FINANCE', 'LEGAL', 'CEO', 'SUPERADMIN'], # Allow all roles for 'OTHER' for now, can be restricted
}

# Helper function to get allowed sections for a given user object
from .models import Document # Import Document to access its SECTION_CHOICES

def get_allowed_sections_for_user(user):
    if not user.is_authenticated:
        return []

    if user.is_superuser: # Superusers can access all sections
        return [section_id for section_id, _ in Document.SECTION_CHOICES]

    allowed_section_ids = []
    try:
        user_role = user.profile.role # Assumes user has a UserProfile and a role
        if not user_role:
            return []
    except AttributeError: # No profile or role
        return []

    for section_id, allowed_roles in SECTION_ROLE_PERMISSIONS.items():
        if user_role in allowed_roles:
            allowed_section_ids.append(section_id)

    return allowed_section_ids


# The SECTION_CHOICES_FOR_FORM list previously here was redundant.
# Document.SECTION_CHOICES from the Document model is the single source of truth.

# Permission check for general portal access (moved from views.py)
def is_portal_user(user):
    if not user.is_authenticated:
        return False
    if user.is_superuser:
        return True
    # Check if user is in 'Superadmin' group.
    # UserProfile.role is not used here as this is a general portal access check,
    # not for specific sub-sections.
    return user.groups.filter(name='Superadmin').exists()


def is_ceo_or_superadmin(user):
    if not user.is_authenticated:
        return False
    if user.is_superuser:
        return True
    try:
        return user.profile.role == 'CEO'
    except AttributeError: # No profile or role
        return False

def can_manage_investor_updates(user):
    """
    Checks if a user has permission to create, edit, or delete investor updates.
    Typically CEO or Superadmin.
    """
    if not user.is_authenticated:
        return False
    if user.is_superuser:
        return True
    try:
        # Check if user is in 'CEO' role or part of 'Superadmin' group
        # (though is_superuser check already covers superadmin users)
        # If 'Superadmin' is a group that non-superusers can be in:
        # if user.groups.filter(name='Superadmin').exists():
        #     return True
        return user.profile.role == 'CEO'
    except AttributeError: # User has no profile or role
        return False

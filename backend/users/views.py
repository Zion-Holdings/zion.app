from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.db import IntegrityError
from .serializers import UserRegistrationSerializer

class UserRegistrationView(APIView):
    permission_classes = [] # Allow any user (even unauthenticated) to access this endpoint

    def post(self, request, *args, **kwargs):
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            try:
                user = serializer.save()
                # Optionally, you might want to return some user data or a token here
                # For now, just a success message as per Task 1 (implicitly success is 201)
                # Task 1: "Make sure new users can be created"
                return Response({"message": "User registered successfully."}, status=status.HTTP_201_CREATED)
            except IntegrityError: # Should ideally be caught by serializer's email validation
                # Task 1: "Catch IntegrityError and return 409 instead of 500."
                return Response({"message": "A user with that email address already exists."}, status=status.HTTP_409_CONFLICT)
        else:
            # Serializer validation errors (including weak password from Task 2)
            # will automatically result in a 400 Bad Request.
            # DRF formats these errors typically as {"field_name": ["Error message."]}
            # For Task 2: "weak passwords return 422 with JSON {field, message}"
            # DRF's default 400 for serializer errors is fine. If 422 is a strict requirement
            # for *all* validation errors from this serializer, we might need to customize
            # the exception handler or response status for validation errors.
            # For now, relying on DRF's default error response structure for validation.
            # The UserRegistrationSerializer's validate_email already raises a specific message for duplicates.
            # Password validation errors will also be in serializer.errors.
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

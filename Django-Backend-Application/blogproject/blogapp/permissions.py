from rest_framework import permissions


class UpdateOwnProfile(permissions.BasePermission):
    """ Allow users to update their own profile """

    def has_object_permission(self, request, view, obj):
        """ check user is tryoing to edit their own profile."""

        if request.method in permissions.SAFE_METHODS:
            return True

        return obj.id == request.user.id



class PostOwnStatus(permissions.BasePermission):
    """ Allow users to update their own status posts """

    def has_object_permission(self, request, view, obj):
        """ Checks the user is trying to update their own status """

        if request.method in permissions.SAFE_METHODS:
            return True

        return obj.user_profile.id == request.user.id

from rest_framework.exceptions import PermissionDenied


def permission(permission):
    def wrapper(func):
        def check(view, request, *args, **kwargs):
            if not request.user.has_perm(permission):
                raise PermissionDenied()

            return func(view, request, *args, **kwargs)
        return check
    return wrapper

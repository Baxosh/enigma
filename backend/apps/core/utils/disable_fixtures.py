import sys
from functools import wraps


def disable_fixtures(signal_handler):
    """
    Decorator that turns off signal handlers when loading fixture data.
    """

    @wraps(signal_handler)
    def wrapper(*args, **kwargs):
        if kwargs.get('raw') or 'test' in sys.argv:
            return
        signal_handler(*args, **kwargs)

    return wrapper

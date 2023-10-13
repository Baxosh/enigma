from datetime import timedelta

from django.utils import timezone


def integers_only(text) -> str:
    """
    Removes all symbols except integers
    ex: +998(91) 333 33 33 -> 998913333333
    """
    return ''.join(x for x in text if x.isdigit())


def trial_period():
    return timezone.now() + timedelta(days=14)


def human_readable_num(string):
    """
    human_readable_num(int(12345)) -> "12 345"
    """
    if string is None:
        return ""

    num = str(string)
    return " ".join([num[::-1][i:i + 3] for i in range(0, len(num), 3)])[::-1]


def get_index(array, element, default=None):
    try:
        return array.index(element)
    except ValueError:
        return default

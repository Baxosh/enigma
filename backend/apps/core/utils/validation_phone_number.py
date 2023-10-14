import re


def validation_phone_number(txt: str) -> bool:
    if txt and bool(re.match(r'^([0-9]{12})$', txt)):
        return True

    return False

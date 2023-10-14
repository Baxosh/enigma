from django.core.management.base import BaseCommand
from django.core.management import call_command

from users.models import Token, User


class Command(BaseCommand):
    help = 'Playground for testing functions'

    def handle(self, *args, **options):
        user = User.objects.first()
        token = Token.objects.filter(user=user).first()

        print(token)

        print('*' * 20, 'End')

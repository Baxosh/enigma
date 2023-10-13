import uuid
from django.contrib.auth.models import AbstractUser
from core.models import BaseModel
from django.db import models

from users.querysets.user import UsersManager
from users.utils import tokens
from users.utils.fields import expires_default, expires_hour


class User(AbstractUser):
    email = models.EmailField(unique=True)  # override default email field
    confirmation_code = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    verified_at = models.DateTimeField(null=True, blank=True)
    objects = UsersManager()

    class Meta(AbstractUser.Meta):
        db_table = 'user_users'
        app_label = 'users'


class Token(BaseModel):
    key = models.CharField(max_length=40, unique=True)
    is_active = models.BooleanField(default=True)
    user = models.ForeignKey(User, models.CASCADE, related_name='tokens')
    expires_at = models.DateTimeField(default=expires_default)  # token expires in 30 days

    def save(self, *args, **kwargs):
        if not self.key:
            self.key = tokens.generate()
        return super(Token, self).save(*args, **kwargs)

    def __str__(self):
        return self.key

    class Meta:
        db_table = 'user_tokens'


class ResetPassword(BaseModel):
    key = models.CharField(max_length=40, unique=True)
    user = models.ForeignKey(User, models.CASCADE)
    expires_at = models.DateTimeField(default=expires_hour)

    def save(self, *args, **kwargs):
        if not self.key:
            self.key = tokens.generate()
        return super(ResetPassword, self).save(*args, **kwargs)

    def __str__(self):
        return self.key

    class Meta:
        db_table = 'user_reset_password'

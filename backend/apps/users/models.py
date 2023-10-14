from django.contrib.auth.models import AbstractUser
from django.db.models import PROTECT

from core.models import BaseModel
from django.db import models

from core.utils.files import FilePath
from users.querysets.user import UsersManager
from users.utils import tokens
from users.utils.fields import expires_default, expires_hour


class User(AbstractUser):
    email = models.EmailField(unique=True)  # override default email field
    full_name = models.CharField(max_length=255)
    phone = models.CharField(max_length=255)
    age = models.PositiveIntegerField()
    five_year = models.CharField(max_length=255)
    lifetime = models.CharField(max_length=255)
    objects = UsersManager()

    class Meta(AbstractUser.Meta):
        db_table = 'user_users'
        app_label = 'users'


class Analyses(BaseModel):
    user = models.ForeignKey(User, PROTECT,related_name='analyses')
    date = models.DateTimeField(auto_now_add=True)
    image = models.FileField(upload_to=FilePath('analyses'), null=True, blank=True, max_length=255)
    cyst = models.BooleanField(default=False)
    calcination = models.BooleanField(default=False)
    mastopaty = models.BooleanField(default=False)
    cancer = models.BooleanField(default=False)
    fibroadenoma = models.BooleanField(default=False)


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

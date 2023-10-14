from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

from core.utils.serializers import BaseSerializer
from core.utils.validation_phone_number import validation_phone_number
from users.models import User


class SignInSerializer(BaseSerializer):
    phone = serializers.CharField(required=True)

    def validate(self, attrs):
        phone = attrs.get('phone')
        if not validation_phone_number(phone):
            msg = 'Указан неправильный Телефон номер! Пример: 998998887766'
            raise serializers.ValidationError(msg, code='authorization')

        return attrs


class UserSimpleSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'phone', 'full_name')

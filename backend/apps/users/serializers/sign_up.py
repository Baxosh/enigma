from django.contrib.auth.models import Group
from rest_framework import serializers
from rest_framework.validators import UniqueValidator

from core.utils.serializers import ValidatorSerializer
from staff.models import Employee
from users.models import User
from core.models import Company


class SignUpSerializer(serializers.ModelSerializer):
    company_name = serializers.CharField(write_only=True)
    company_phone = serializers.CharField(write_only=True)

    def validate_email(self, email):
        User.objects.remove_unverified(email)
        return email

    def create(self, data):
        data['email'] = data['email'].lower()
        data['username'] = data['email']  # Use email as username
        company = Company.objects.create(name=data.pop('company_name'), phone=data.pop('company_phone'))
        Company.objects.default_data(company)
        user = User.objects.create_user(**data, company=company, is_active=False)
        user.groups.add(Group.objects.get(name='admin'))  # add user to admin group
        Employee.objects.create(
            user=user,
            company=company,
            salary=0,
            seller_share=5,
            positions=[Employee.ADMIN, Employee.TEACHER],
            name=data.get('first_name') + ' ' + data.get('last_name')
        )
        return user

    class Meta:
        model = User
        fields = ('id', 'email', 'password', 'first_name', 'last_name', 'company_name', 'company_phone')
        extra_kwargs = {
            'email': {'required': True, 'validators': [UniqueValidator(
                queryset=User.objects.unique_query(),
                message="User with this email already exists."
            )]},
            'first_name': {'required': True},
            'last_name': {'required': True},
            'password': {'write_only': True},
        }


class ConfirmationValidator(ValidatorSerializer):
    confirmation_code = serializers.CharField(required=True)

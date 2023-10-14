from django.utils import timezone
from rest_framework.generics import GenericAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from users.models import Token, User
from users.serializers.sign_in import SignInSerializer, UserSimpleSerializer


class SignInView(GenericAPIView):
    permission_classes = (AllowAny,)
    serializer_class = SignInSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(sign_in_response(serializer.data['phone']), 200)


def sign_in_response(phone):
    user, _ = User.objects.get_or_create(phone=phone)
    token, _ = Token.objects.get_or_create(expires_at__gte=timezone.now(), user=user)

    user = UserSimpleSerializer(user)
    return {'token': token.key, 'user': user.data}

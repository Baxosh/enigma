from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from users.serializers.calculate import CalculateSerializer


class CalculateView(APIView):
    permission_classes = (AllowAny, )

    def post(self, request):
        serializer = CalculateSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({}, 201)

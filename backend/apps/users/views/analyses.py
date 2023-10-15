from rest_framework.permissions import AllowAny
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from users.serializers.analyses import AnalysesSerializer

from rest_framework.views import APIView

from users.models import Analyses


class AnalysesView(APIView):
    def get(self, request):
        queryset = Analyses.objects.all()
        serializer = AnalysesSerializer(queryset, many=True)
        return Response({'results': serializer.data})

    def post(self, request):
        serializer = AnalysesSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(created_by=request.user)
        return Response(serializer.data, 201)


class AnalysesDetailView(APIView):
    def get(self, request, pk):
        instance = get_object_or_404(Analyses, id=pk)
        data = AnalysesSerializer(instance).data
        return Response(data)

    def put(self, request, pk):
        instance = get_object_or_404(Analyses, id=pk)
        serializer = AnalysesSerializer(instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(updated_by=request.user)
        return Response(serializer.data)

    def delete(self, request, pk):
        instance = get_object_or_404(Analyses, id=pk)
        instance.delete()
        return Response({}, 204)

from rest_framework.response import Response
from rest_framework.views import APIView
from task.models import Task
from core.serializers.company import CompanySerializer


class GeneralView(APIView):
    def get(self, request):
        company = CompanySerializer(request.user.company).data
        tasks = Task.objects.list(company=request.user.company, status=Task.WAITING, assigned=request.user).count()
        return Response({'tasks_count': tasks, 'company': company})

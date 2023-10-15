from users.models import Analyses
from rest_framework import serializers


class AnalysesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Analyses
        fields = ('id', 'user', 'date', 'image', 'cyst', 'calcination', 'mastopathy', 'cancer', 'fibroadenoma')

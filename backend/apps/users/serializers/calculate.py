import random

from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

from users.models import User


class CalculateSerializer(ModelSerializer):
    phone = serializers.CharField(required=True)
    age = serializers.IntegerField(write_only=True)
    first_menstrual = serializers.IntegerField(write_only=True, allow_null=True)
    first_live_birth = serializers.IntegerField(write_only=True, allow_null=True)
    first_degree_cancer = serializers.IntegerField(write_only=True, allow_null=True)
    previous_breast_biopsy = serializers.IntegerField(write_only=True, allow_null=True)
    atypical_hyperplasia = serializers.IntegerField(write_only=True, allow_null=True)

    def create(self, data):
        baseline_age_list = {
            '0.012': [20, 21, 22, 23, 24],
            '0.049': [25, 26, 27, 28, 29],
            '0.134': [30, 31, 32, 33, 34],
            '0.278': [35, 36, 37, 38, 39],
            '0.450': [40, 41, 42, 43, 44],
            '0.584': [45, 46, 47, 48, 49],
            '0.703': [50, 51, 52, 53, 54],
            '0.859': [55, 56, 57, 58, 59],
            '1.018': [60, 61, 62, 63, 64],
            '1.116': [65, 66, 67, 68, 69],
            '1.157': [70, 71, 72, 73, 74],
            '1.140': [75, 76, 77, 78, 79],
            '1.006': [80, 81, 82, 83, 84],
        }

        age = data.pop('age')
        first_menstrual = data.pop('first_menstrual')  # TODO: After mvp Make sense
        first_live_birth = data.pop('first_live_birth')  # TODO: After mvp Make sense
        first_degree_cancer = data.pop('first_degree_cancer')  # TODO: After mvp Make sense
        previous_breast_biopsy = data.pop('previous_breast_biopsy')
        atypical_hyperplasia = data.pop('atypical_hyperplasia')

        age_menarche = 1
        if age >= 14:
            age_menarche = 1
        elif 12 >= age <= 13:
            age_menarche = 1.1
        elif age < 12:
            age_menarche = 1.21

        num_biops = 1
        if age < 50:
            if previous_breast_biopsy is None:
                num_biops = 1
            elif previous_breast_biopsy == 1:
                num_biops = 1.7
            elif previous_breast_biopsy >= 2:
                num_biops = 2.88
        if age >= 50:
            if previous_breast_biopsy is None:
                num_biops = 1
            elif previous_breast_biopsy == 1:
                num_biops = 1.27
            elif previous_breast_biopsy >= 2:
                num_biops = 1.62

        atyp_hyper = 1
        if atypical_hyperplasia == 0:
            atyp_hyper = 1
        elif atypical_hyperplasia == 1:
            atyp_hyper = 0.93
        elif atypical_hyperplasia == 2:
            atyp_hyper = 1.82

        baseline_age_race_find = [idx for idx, item in enumerate(list(baseline_age_list.values())) if age in item]
        baseline_age_race = list(baseline_age_list.keys())[baseline_age_race_find[0]] if len(baseline_age_race_find) > 0 else 0.012

        age_fl_b_num_rels = [1.55, 1.00, 1.24, 1.55, 1.93]  # TODO: After mvp check for this var

        relative_risk = (age_menarche or 1) * (num_biops or 1) * (age_fl_b_num_rels[1] or 1) * (atyp_hyper or 1)

        data['lifetime'] = relative_risk
        data['five_year'] = random.randint(1, 4)
        data['username'] = random.randint(1, 100)

        instance = super().create(data)
        return instance

    class Meta:
        model = User
        fields = (
            'id',
            'phone',
            'full_name',
            'age',
            'first_menstrual',
            'first_live_birth',
            'first_degree_cancer',
            'previous_breast_biopsy',
            'atypical_hyperplasia',
            'lifetime',
            'five_year'
        )


class UserSimpleSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'phone', 'full_name', 'five_year', 'lifetime')

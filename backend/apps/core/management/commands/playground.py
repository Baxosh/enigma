from django.core.management.base import BaseCommand


class Command(BaseCommand):
    help = 'Playground for testing functions'

    def handle(self, *args, **options):
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
        age = 31
        idx = [idx for idx, item in enumerate(list(baseline_age_list.values())) if age in item][0]
        print(list(baseline_age_list.keys())[idx])

        print('*' * 20, 'End')

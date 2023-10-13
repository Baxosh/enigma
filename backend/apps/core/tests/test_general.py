from django.urls import reverse
from core.tests.base_test import BaseTestCase
from users.tests.constants import USER_TOKEN


class GeneralTest(BaseTestCase):
    fixtures = ('company.yaml', 'users_and_tokens.yaml', 'task.yaml', )

    def setUp(self):
        self.client.credentials(HTTP_AUTHORIZATION='Token ' + USER_TOKEN)

    def test_general(self):
        response = self.client.get(reverse('core:general'))
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data['tasks_count'], 2)

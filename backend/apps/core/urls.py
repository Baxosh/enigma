from django.urls import path

from core.views.configurations import ConfigurationsView
from core.views.playground import DummyDataView
from core.views.general import GeneralView


urlpatterns = [
    path('configurations', ConfigurationsView.as_view(), name='configurations'),
    path('dummy_data', DummyDataView.as_view(), name='dummy-data'),
    path('general/', GeneralView.as_view(), name='general'),
]

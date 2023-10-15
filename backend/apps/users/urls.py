from django.urls import path

from users.views.analyses import AnalysesView
from users.views.calculate import CalculateView
from users.views.sign_in import SignInView

urlpatterns = [
    path('sign-in', SignInView.as_view(), name='signin'),
    path('calculate', CalculateView.as_view(), name='calculate'),
    path('analyses', AnalysesView.as_view(), name='analyses-list'),
    # path('analyses/<int:pk>', AnalysesDetailView.as_view(), name='analyses-detail'),
]

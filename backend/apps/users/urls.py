from django.urls import path

from users.views.sign_in import SignInView

urlpatterns = [
    path('sign-in', SignInView.as_view(), name='signin'),
]

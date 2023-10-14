from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    # path('', include(('web.urls', 'web'), namespace='web')),
    # path('docs/', include(('docs.urls', 'docs'), namespace='docs')),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/v1/', include([
        path('core/', include(('core.urls', 'core'), namespace='core')),
        path('users/', include(('users.urls', 'user'), namespace='users')),
    ])),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

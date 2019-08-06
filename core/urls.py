from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include

from apps.individual.api.individual.individual_endpoint import individualRouter

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(individualRouter.urls)),

]

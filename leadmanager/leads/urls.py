from xml.etree.ElementInclude import include
from django.urls import path, include
from rest_framework import routers
from .api import LeadViewSet

router = routers.DefaultRouter()
router.register("leads",LeadViewSet,"leads")

urlpatterns = [
    path("",include(router.urls))
]

from django.conf.urls import url, include
from .views import *

from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('hello-viewset', HelloViewSet, base_name='hello-viewset')
router.register('profile', UserProfileViewSet)
router.register('login', LoginViewSet, base_name='login')
router.register('feed', UserPostFeedViewSet)

urlpatterns =[
    url(r'hello-view/',HelloAPIView.as_view()),
    url(r'',include(router.urls)),
]

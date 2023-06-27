from django.urls import path
from . import views
from rest_framework.routers import SimpleRouter
from .views import SerialsPage, FilmsPage, AllMoviesPage, SomeFilmPage, SomeSerialPage, SomeSerialSeasonPage
from .views import MyTokenObtainPairView, RegisterView
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)


router = SimpleRouter()
router.register('api/serials', SerialsPage)
router.register('api/films', FilmsPage)
router.register('api/allmovie', AllMoviesPage, basename='MyModel')
router.register(r'api/movie', SomeFilmPage)
router.register(r'api/serialseason', SomeSerialSeasonPage)
router.register(r'^api/serial', SomeSerialPage, basename='serial')



urlpatterns = [
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.RegisterView.as_view(), name='auth_register'),
    path('', views.getRoutes)
]
urlpatterns += router.urls
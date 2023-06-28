import json
from collections import namedtuple

from django.http import HttpResponse
from django.contrib.auth.models import User
from rest_framework import views, viewsets, generics, status
from rest_framework.decorators import action, api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.views import TokenObtainPairView

from .serializers import SerialsSerializer, FilmsSerializer, AllMovieSerializer, OneMovieSerializer, OneSerialSerializer, SerialSeasonSerializer
from .serializers import MyTokenObtainPairSerializer, RegisterSerializer
from rest_framework.viewsets import ModelViewSet
from .models import Serials, Films, SerialSeason


class SerialsPage(viewsets.ModelViewSet):
    queryset = Serials.objects.all()
    serializer_class = SerialsSerializer
    lookup_field = 'slug'

class FilmsPage(ModelViewSet):
    queryset = Films.objects.all()
    serializer_class = FilmsSerializer


QuerySet = namedtuple('QuerySet', ('model_1', 'model_2'))


class AllMoviesPage(viewsets.ViewSet):

    def list(self, request):
        queryset = QuerySet(
            model_1 = Serials.objects.all(),
            model_2 = Films.objects.all(),
        )
        serializer = AllMovieSerializer(queryset)
        return Response(serializer.data)

class SomeFilmPage(viewsets.ModelViewSet):
    queryset = Films.objects.all()
    serializer_class = OneMovieSerializer
    lookup_field = 'slug'

class SomeSerialSeasonPage(viewsets.ModelViewSet):
    queryset = SerialSeason.objects.all().order_by('-id')
    serializer_class = SerialSeasonSerializer
    lookup_field = 'slug'

class SomeSerialPage(viewsets.ModelViewSet):
    queryset = Serials.objects.all()
    serializer_class = OneSerialSerializer
    lookup_field = 'slug'

    def all_service_json(request, name):
        video = SerialSeason.objects.all()
        data = OneSerialSerializer(video, many=True).data
        return HttpResponse(data)



# Auth-model view START

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token/',
        '/api/register/',
        '/api/token/refresh/',
        '/api/test/'
    ]
    return Response(routes)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def testEndPoint(request):
    if request.method == 'GET':
        data = f"Congratulation {request.user}, your API just responded to GET request"
        return Response({'response': data}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        try:
            body = request.body.decode('utf-8')
            data = json.loads(body)
            if 'text' not in data:
                return Response("Invalid JSON data", status.HTTP_400_BAD_REQUEST)
            text = data.get('text')
            data = f'Congratulation your API just responded to POST request with text: {text}'
            return Response({'response': data}, status=status.HTTP_200_OK)
        except json.JSONDecodeError:
            return Response("Invalid JSON data", status.HTTP_400_BAD_REQUEST)
    return Response("Invalid JSON data", status.HTTP_400_BAD_REQUEST)


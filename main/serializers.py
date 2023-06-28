from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Serials, Films, SerialSeason
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from rest_framework.validators import UniqueValidator


class SerialsSerializer(ModelSerializer):
    class Meta:
        model = Serials
        fields = '__all__'
        lookup_field = 'slug'
        extra_kwargs = {
            'url': {'lookup_field': 'slug'},
        }


class SerialSeasonSerializer(ModelSerializer):
    class Meta:
        model = SerialSeason
        fields = '__all__'
        lookup_field = 'slug'
        extra_kwargs = {
            'url': {'lookup_field': 'slug'},
        }


class FilmsSerializer(ModelSerializer):
    class Meta:
        model = Films
        fields = '__all__'


class AllMovieSerializer(serializers.Serializer):
    model_1 = SerialsSerializer(many=True)
    model_2 = FilmsSerializer(many=True)

class OneMovieSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Films
        fields = '__all__'
        lookup_field = 'slug'
        extra_kwargs = {
            'url': {'lookup_field': 'slug'}
        }


# class OneSerialSerializer(serializers.HyperlinkedModelSerializer):
#     video = SerialSeasonSerializer(many=True)
#
#     class Meta:
#         model = Serials
#         fields = '__all__'
#         lookup_field = 'slug'
#         extra_kwargs = {
#             'url': {'lookup_field': 'slug'}
#         }
#
class OneSerialSerializer(serializers.HyperlinkedModelSerializer):
    video = serializers.SerializerMethodField()

    class Meta:
        model = Serials
        fields = '__all__'
        lookup_field = 'slug'
        extra_kwargs = {
            'url': {'lookup_field': 'slug'}
        }

    def get_video(self, instance):
        videos = instance.video.all().order_by('id')
        return SerialSeasonSerializer(videos, many=True).data



class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['username'] = user.username
        token['email'] = user.email
        return token

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('username', 'password', 'password2')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Поля пароля не збігаються."})
        return attrs

    def create(self, validated_data):
        user = User.objects.create(username=validated_data['username'])
        user.set_password(validated_data['password'])
        user.save()
        return user


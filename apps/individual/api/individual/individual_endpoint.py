from rest_framework import serializers
from rest_framework.routers import DefaultRouter
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import DjangoModelPermissions

from apps.individual.models.individual import Individual


class IndividualSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Individual
        fields = '__all__'


class IndividualViewSet(ModelViewSet):
    queryset = Individual.objects.all()
    serializer_class = IndividualSerialiser
    permission_class = [DjangoModelPermissions]
    #filterset_fields = ('author', 'post')


individualRouter = DefaultRouter()
individualRouter.register(r'individual', IndividualViewSet)

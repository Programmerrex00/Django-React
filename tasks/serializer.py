from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        #   fields = ('id', 'title', 'description', 'done')
        # con esto traemos todos los datos del modelo sin tener que dijitalos uno por uno
        fields = '__all__'

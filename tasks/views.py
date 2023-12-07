from rest_framework import viewsets
from .serializer import TaskSerializer
from .models import Task

# Create your views here.
# Mediante esta clase puedo hacer el crud
class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()


from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from tasks import views

# todo este codigo me ayuda generar las rutas para los metodo
# GET POST POST DELETE

# api versioning
router = routers.DefaultRouter()
router.register(r'tasks', views.TaskView, 'tasks')

# Urls a traer los datos desde la de api/v1 genera metodos como GET POST PUT DELETE
# la otra docs/ es para ver los metodos que puedo hacer
urlpatterns = [
    path("api/v1/", include(router.urls)) ,
    path('docs/', include_docs_urls(title="Tasks API"))
]





from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from tasks import views

# definir rutas
# versionado de api
router = routers.DefaultRouter()
router.register(r'tasks', views.TareaView, 'tasks')

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path("docs/", include_docs_urls(title="Doc Api de Tareas"))
]


# Todo lo anterior está generando las rutas GET, Post, Put, Delete
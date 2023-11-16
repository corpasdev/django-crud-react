# import function viwsets
from rest_framework import viewsets
from .serializer import TareaSerializer
from .models import Tarea

# Create your views here.
# Esto crea todo el crud que vamos a necesitar
class TareaView(viewsets.ModelViewSet):
    serializer_class = TareaSerializer
    queryset = Tarea.objects.all()
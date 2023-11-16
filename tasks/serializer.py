# modulo permite seleccionar campos
from rest_framework import serializers
from .models import Tarea

class TareaSerializer(serializers.ModelSerializer):
    class Meta:
        # 1er froma de seleccionar -> fields = ('id', 'titulo', 'descripcion', 'estado')
        # 2do forma: selecciona todos los campos para convertir a JSON
        # indicar el modelo
        model = Tarea
        fields = '__all__'
        
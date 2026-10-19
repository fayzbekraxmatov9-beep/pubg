from django.db import models


class Mahsulot(models.Model):
    name = models.CharField(max_length=100)
    price = models.IntegerField()
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name
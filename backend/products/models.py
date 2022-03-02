from django.db import models

# Create your models here.
class Product(models.Model):
    image = models.ImageField(upload_to='uploads/images', null=True, blank=True)
    name  = models.CharField(max_length=100, null=False, blank=False)
    description =models.TextField()
    price = models.DecimalField(max_digits=7,decimal_places=2)
    category= models.TextField(max_length=50,blank=True, null=True)
    #files = models.FileField(upload_to='uploads/images')

    def __str__(self):
        return self.name

    
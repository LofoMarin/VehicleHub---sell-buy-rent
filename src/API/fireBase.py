from webscrapping import NombresCarros, url_imagenes, añoCarro, precios, kilometrajeCarro
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate(r"C:\Users\kevin\Downloads\vehiculehub-firebase-adminsdk-mziy5-5eaed68c9e.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

for i in range(len(NombresCarros)):
    datos={
        'carName': NombresCarros[i],
        'imgUrl': url_imagenes[i],
        'model': añoCarro[i],
        'price': precios[i],
        'speed': kilometrajeCarro[i] 
    }
    doc_ref = db.collection('vehicule').document()
    doc_ref.set(datos)
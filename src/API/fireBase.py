from webscrapping import NombresCarros, url_imagenes, añoCarro, precios, kilometrajeCarro, caja, combustible, cilindraje, color, estado, Descripciones
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore


cred = credentials.Certificate(r"Diseño\vehiculehub-firebase-adminsdk-mziy5-5eaed68c9e.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

for i in range(len(url_imagenes)):
    datos={
        'carName': NombresCarros[i],
        'imgUrl': url_imagenes[i],
        'model': añoCarro[i],
        'description': Descripciones[i],
        'price': precios[i],
        'speed': kilometrajeCarro[i],
        'fuel': combustible[i],
        'cilynder': cilindraje[i],
        'state': estado[i],
        'box': caja[i],
        'color': color[i]
        
    }
    doc_ref = db.collection('vehicule').document()
    doc_ref.set(datos)
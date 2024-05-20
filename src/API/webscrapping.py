import time
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.service import Service

global driver
#Obtener el HTML
options = webdriver.ChromeOptions()
options.add_argument("start-maximized")
options.add_experimental_option("excludeSwitches", ["enable-automation"])
options.add_experimental_option("detach", True)
options.add_experimental_option('useAutomationExtension', False) 
service = Service(executable_path=r'C:\Users\kevin\OneDrive\Documentos\Vs Files\Diseño\chromedriver.exe')
driver = webdriver.Chrome(options=options, service=service)
url_imagenes = [] 
NombresCarros = []
Descripciones = []
añoCarro = []
kilometrajeCarro = []
precios = []

URL_BASE = 'https://www.carroya.com/automoviles-y-camionetas?page='
for i in range(2,5):
    URL_FINAL = f"{URL_BASE}{i}"
    driver.get(URL_FINAL)
    time.sleep(7)
    html = driver.page_source
    
    #"Parsear" ese HTML
    soup = BeautifulSoup(html, "html.parser")
    divsNombreDescrip = soup.find_all('div', class_='cy-publication-card-ds-milla__content-container')
    divsPrecio = soup.find_all('div', class_='cy-publication-card-ds-milla__publication-price')
    divsImages = soup.select('img[src^="https://carroya-commons.avaldigitallabs.com/"]')
    divKiloAño = soup.select('.cy-publication-card-ds-milla__publication-detail span')

    for div1 in divsNombreDescrip:
        #Este if sirve para direnciar el precio y el nombre de los productos, es importante fijarse de qué manera están expuestos estos mismos en el html
        NombreCarro = div1.h1.get_text(strip=True)
        Descripcion = div1.h2.get_text(strip=True)
        # Se puede agregar filtros
        NombresCarros.append(NombreCarro)
        Descripciones.append(Descripcion)
    for div2 in divsPrecio:
        precio = div2.h2.get_text(strip=True).replace('$', '')
        precios.append(precio)
    for div3 in divsImages:
        image = div3['src']
        url_imagenes.append(image)
    for div4 in divKiloAño:
        if('Km' in div4.text):
            kilometraje = div4.text
            kilometrajeCarro.append(kilometraje)
        if(div4.text.isdigit()):
            año = div4.text
            añoCarro.append(año)
driver.close()
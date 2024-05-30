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
caja = []
combustible = []
cilindraje = []
color = []
estado = []
control = 1
controlvar1 = 1
controlvar2 = 1
controlvar3 = 1
controlvar4 = 1
controlPos = [1, 2, 3, 24, 25, 26, 47, 48, 49]
controlAño= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 14, 17, 18, 21, 22, 25, 26, 29, 30, 33, 34, 37, 38, 41, 42, 45, 46, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 61, 62, 65, 66, 69, 70, 73, 74, 77, 78, 81, 82, 85, 86, 89]
entrar = True
counter = -2
null = ""

URL_BASE = 'https://www.carroya.com/automoviles-y-camionetas?page='
for i in range(2,5):
    URL_FINAL = f"{URL_BASE}{i}"
    driver.get(URL_FINAL)
    time.sleep(5)
    html = driver.page_source
    
    #"Parsear" ese HTML
    soup = BeautifulSoup(html, "html.parser")
    divsNombreDescrip = soup.find_all('div', class_='cy-publication-card-ds-milla__content-container')
    divsPrecio = soup.find_all('div', class_='cy-publication-card-ds-milla__publication-price')
    divsImages = soup.select('img[src^="https://carroya-commons.avaldigitallabs.com/"]')
    divKiloAño = soup.select('.cy-publication-card-ds-milla__publication-detail span')
    divDetalles = soup.find_all("a", class_="cy-publication-card-ds-milla__image-container")

    for div1 in divsNombreDescrip:
        for i in range(len(controlPos)):
            if(controlvar1 == controlPos[i]):
                entrar = False
                controlvar1 += 1
                break
            else:
                entrar = True
        if(entrar == True):
            NombreCarro = div1.h1.get_text(strip=True)
            Descripcion = div1.h2.get_text(strip=True)
            NombresCarros.append(NombreCarro)
            Descripciones.append(Descripcion)
            controlvar1 += 1
    for div2 in divsPrecio:
        for i in range(len(controlPos)):
            if(controlvar2 == controlPos[i]):
                entrar = False
                controlvar2 += 1
                break
            else:
                entrar = True
        if(entrar == True):
            precio = div2.h2.get_text(strip=True).replace('$', '')
            precios.append(precio)
            controlvar2 += 1
    for div3 in divsImages:
        for i in range(len(controlPos)):
            if(controlvar3 == controlPos[i]):
                entrar = False
                controlvar3 += 1
                break
            else:
                entrar = True
        if(entrar == True):
            image = div3['src']
            url_imagenes.append(image)
            controlvar3 += 1
    for div4 in divKiloAño:
        for i in range(len(controlAño)):
            if(controlvar4 == controlAño[i]):
                entrar = False
                controlvar4 += 1
                break
            else:
                entrar = True
        if(entrar == True):
            if('Km' in div4.text):
                kilometraje = div4.text
                kilometrajeCarro.append(kilometraje)
            if(div4.text.isdigit()):
                año = div4.text
                añoCarro.append(año)
            controlvar4 += 1
    for div5 in divDetalles:
        link = div5['href']
        URL_DETALLES_BASE = 'https://www.carroya.com'
        URL_DETALLES_FINAL = f"{URL_DETALLES_BASE}{link}"
        driver.get(URL_DETALLES_FINAL)
        time.sleep(2)
        html_details = driver.page_source
        soup_details = BeautifulSoup(html_details, "html.parser")
        divsDetails = soup_details.find_all('div', class_='information')
        for div6 in divsDetails:
            condicional = div6.h5.get_text(strip=True)
            dato = div6.h4.get_text(strip=True)
            if('TIPO' in condicional):
                caja.append(dato)
            if('COMBUSTIBLE' in condicional):
                combustible.append(dato)
            if('CILINDRAJE' in condicional):
                cilindraje.append(dato)
            if('COLOR' in condicional):
                color.append(dato)
            if('ESTADO' in condicional):
                estado.append(dato)
            if (counter > len(color)) and (control % 8 == 0):
                color.append(null)
            control = control + 1
            if control % 8 == 0:
                counter = counter + 1
driver.close()

print(NombresCarros)
print(precios)
print(añoCarro)
print(kilometraje)
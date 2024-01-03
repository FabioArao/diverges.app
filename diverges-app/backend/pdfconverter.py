import PyPDF2
from PyPDF2 import PdfReader
reader = PdfReader("/Users/fabio.arao/Downloads/Fabio_Arao.pdf")
number_of_pages = len(reader.pages)
page = reader.pages[0]
text = page.extract_text()


print(text)
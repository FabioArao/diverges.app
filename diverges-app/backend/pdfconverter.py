import PyPDF2

def extract_pdf_to_txt(pdf_filename: str) -> str:
    text_utput = ""
    with open(pdf_filename, 'rb') as pdf_object:
        pdf_reader = PyPDF2.PdfFileReader(pdf_object)
        for i in range(pdf_reader.numPages):
            page = pdf_reader.getPage(i)
            text_output += page.extractText()
    return text_output


def save_converted_text(text_file: str, filename: str) -> None:
    with open(filename, 'w+', encoding='utf8') as output_file:
        output_file.write(text)
        print("Text saved to file: " + filename)

if __name__ == "__main__":
    text = extract_pdf_to_txt("test.pdf")
    save_converted_text(text, "test.txt")

# ResumuX

### Resumux helps the Talent Acquisition Team of an organization to go through the resumes as per required skills and suggests the suitable designation for the candidate.

#### It is a deep learning model using Natural Language Processing(NER) and Named-entity recognition(NER) which goes through each and every resume that is applied for a big corporate company, collect the details, structure them and specify a job position based on the collected details with a simple user interface.

## Process Flow:
![](https://github.com/JahnaviKommaraju/ResumuX/blob/main/process_flow.jpeg)

## Technical Process:
  1)File upload in the frontend built using Reactjs 

  2)Data processing  in backend built using Flask:

  3)Store the Resume or CV in Directory or preferred Location

  4)Check for the format of uploaded file 

  5)Extraction of data:
  
      ->Apply word tokenization and regex
      
      ->NER using spaCy

  6)Transfer of json data to frontend using flask server

  7)Frontend renders the data in structured format and displays it on the web page

## Software Requirements:
   
   FRONTEND:
     React Js Framework || Bootstrap 5 UI KIT || Material UI Icons 
   
   BACKEND:
    Python3 || Flask Framework || Custom Ner Spacy Model || Nltk for StopWords || re for regex || pdfminer modules || docx2txt || Json For Passing Data




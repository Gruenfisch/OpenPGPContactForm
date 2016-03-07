OpenPGPContacForm - secform 
===========================

Beschreibung
------------

OpenPGP-Verschlüsselung im eigenen Kontaktformular auf der Webseite verwenden.
Entwickelt für ein Standard-Contao-Kontaktformular. 

Anforderungen
-------------

* JQuery 1.11.3
* jquery.cookie.js
* openpgp.min.js (https://github.com/openpgpjs/openpgpjs/blob/master/dist/openpgp.min.js)
* Spezifische Markup-Struktur mit (die hier genannten Standard-IDs können natürlich später angepasst werden)
    * einem Formular (ID = 'secform') 
    * mit Nachrichten-Feld (ID = 'message')
    * mit einem Absenden-Button 
    * sowie einem pre-Tag (ID = 'secformkey'), der den zu verwendenden GnuPG-Schlüssel enthält.  
    
    

Installation
------------

Aufruf/Instanzierung: 

```
jQuery(document).ready(function () 
    {
        var encryptedForm1 = new encryptedForm.init({
            // Definieren Sie hier Ihre Optionen:
             
            // formID: 'form#secform', 
            // keyContainer: '#secformkey',
            // formSubmitButtonLabel: 'Ihre Nachricht verschlüsselt senden'
            // und so weiter...
        });
    });
```


Optionen
--------


Bezeichner                      |   Standard-Wert oder Beispiel                                                     |   Erklärung
----------                          ---------------------------                                                         --------- 
formID                          |   "form#secform"                                                                  |   Geben Sie einen ID-Selektor für das zu bearbeitende Formular an
formSubmitButton                |   "form#secform input[type='submit']"                                             | Geben Sie einen Selektor für den Versenden-Button im zu bearbeitenden Formular an. 
formMessageTextarea             |   "form#secform textarea[name='message']"                                         | Geben Sie einen Selektor für das Nachrichten-Eingabefeld an. Als Standard wird innerhalb des zu bearbeitenden Formulars nach einem Textarea mit dem Name-Attribut mit dem "message" gesucht.  
keyContainer                    |   "#secformkey"                                                                   | ID-Selektor für den GnuPG-Schlüssel-Container 
formSubmitButtonLabel           |   "Ihr Nachricht verschlüsselt versenden"                                         | Optional (wird nur gesetzt, wenn angegeben): Das Label für den Versenden-Button, wenn die Verschlüsslungsfunktion verfügbar ist 
formMessageTextareaPlaceholder  |   "Bitte geben Sie hier Ihren Namen an und beschreiben Sie mir kurz Ihr Anliegen" | Optional (wird nur gesetzt, wenn angegeben): Der Platzhalter-Text für das Textarea-Eingabefeld, wenn die Verschlüsslungsfunktion verfügbar ist 


Lizenz 
------

OpenPGPContacForm - secform ist ein Projekt von 
Gruenfisch Webdesign: Oliver Richter http://www.gruenfisch-webdesign.de

Dieses Werk bzw. Inhalt (jquery.secform.js) steht unter einer 
Creative Commons Namensnennung - Nicht-kommerziell -
Weitergabe unter gleichen Bedingungen 3.0 Deutschland Lizenz

Beachten Sie auch die Rechte der Entwickler bzw. die Lizenzen der Dokumente 
jquery.cookie.js und openpgp.min.js, deren Inhaber ich nicht bin. 

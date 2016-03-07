OpenPGPContacForm - secform 
===========================

Beschreibung
------------

OpenPGP-Verschl�sselung im eigenen Kontaktformular auf der Webseite verwenden.
Entwickelt f�r ein Standard-Contao-Kontaktformular. 

Anforderungen
-------------

* JQuery 1.11.3
* jquery.cookie.js
* openpgp.min.js (https://github.com/openpgpjs/openpgpjs/blob/master/dist/openpgp.min.js)
* Spezifische Markup-Struktur mit 
    * einem Formular (ID = 'secform') 
    * mit Nachrichten-Feld (ID = 'message')
    * mit einem Absenden-Button 
    * sowie einem pre-Tag (ID = 'secformkey'), der den zu verwendenden GnuPG-Schl�ssel enth�lt.  
    * (die IDs k�nnen angepasst werden)
    

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
            // formSubmitButtonLabel: 'Ihre Nachricht verschl�sselt senden'
            // und so weiter...
        });
    });
```


Lizenz 
------

OpenPGPContacForm - secform ist ein Projekt von 
Gruenfisch Webdesign: Oliver Richter http://www.gruenfisch-webdesign.de

Dieses Werk bzw. Inhalt (jquery.secform.js) steht unter einer 
Creative Commons Namensnennung - Nicht-kommerziell -
Weitergabe unter gleichen Bedingungen 3.0 Deutschland Lizenz

Beachten Sie auch die Rechte der Entwickler bzw. die Lizenzen der Dokumente 
jquery.cookie.js und openpgp.min.js, deren Inhaber ich nicht bin. 

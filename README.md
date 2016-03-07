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
* Spezifische Markup-Struktur mit 
    * einem Formular (ID = 'secform') 
    * mit Nachrichten-Feld (ID = 'message')
    * mit einem Absenden-Button 
    * sowie einem pre-Tag (ID = 'secformkey'), der den zu verwendenden GnuPG-Schlüssel enthält.  
    * (die IDs können angepasst werden)
    

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


Lizenz 
------

OpenPGPContacForm - secform ist ein Projekt von 
Gruenfisch Webdesign: Oliver Richter http://www.gruenfisch-webdesign.de

Dieses Werk bzw. Inhalt (jquery.secform.js) steht unter einer 
Creative Commons Namensnennung - Nicht-kommerziell -
Weitergabe unter gleichen Bedingungen 3.0 Deutschland Lizenz

Beachten Sie auch die Rechte der Entwickler bzw. die Lizenzen der Dokumente 
jquery.cookie.js und openpgp.min.js, deren Inhaber ich nicht bin. 

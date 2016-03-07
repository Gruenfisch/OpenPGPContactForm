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
* Spezische Markup-Struktur mit einem Formular (ID = 'secform') mit Nachrichten (ID = 'message')- und einem E-Mailadresse-Feld (ID = 'email'), sowie einem pre-Tag (ID = 'secformkey'), der den zu verwendenden GnuPG-Schlüssel enthält.  

Installation
------------

* Initialisierung

`
jQuery(document).ready(function () 
    {
        var encryptedForm1 = new encryptedForm.init({
            // define your options here:  
             
            // formID: 'form#secform', 
            // keyContainer: "#secformkey"
            // and so on...
        });
    });
`


Lizenz 
------

OpenPGPContacForm - secform ist ein Projekt von 
Gruenfisch Webdesign: Oliver Richter http://www.gruenfisch-webdesign.de

Dieses Werk bzw. Inhalt (jquery.secform.js) steht unter einer 
Creative Commons Namensnennung - Nicht-kommerziell -
Weitergabe unter gleichen Bedingungen 3.0 Deutschland Lizenz

Beachten Sie auch die Rechte der Entwickler bzw. die Lizenzen der Dokumente 
jquery.cookie.js und openpgp.min.js, deren Inhaber ich nicht bin. 

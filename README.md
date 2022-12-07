# OpenPGPContacForm - secform #


## Beschreibung ##


OpenPGP-Verschlüsselung im eigenen Kontaktformular auf der Webseite verwenden.

Inspiriert durch den Artikel unter https://www.privacy-handbuch.de/handbuch_32v.htm (vielen Dank an die Autoren dort) 
habe ich mir mal die JavaScript-Implementierung von OpenPGP (siehe http://openpgpjs.org) angesehen und eine kleine 
JavaScript-Klasse für das Standard-Contao-Kontaktformular geschrieben. Diese erweitert, sofern technisch
möglich (je nach Browser und Einstellungen), das Kontaktformular so, dass die Daten im Nachrichten-Eingabefeld 
vor dem Versenden mit meinem öffentlichen GnuPG-Schlüssel für meine E-Mailadresse verschlüsselt werden.
Sollten die technischen Voraussetzungen nicht erfüllt sein, wird das Standard-Kontaktformular angezeigt.

Ursprünglich entwickelt für ein Standard-Contao-Kontaktformular. 

Ich freue mich über Hinweise und Kritiken. 

## Anforderungen ##


* JQuery 1.11.3
* jquery.cookie.js
* openpgp.min.js (https://github.com/openpgpjs/openpgpjs/blob/master/dist/openpgp.min.js)
* Spezifische Markup-Struktur mit (die hier genannten Standard-IDs können natürlich später angepasst werden)
    * einem Formular (ID = 'secform') 
    * mit Nachrichten-Feld (ID = 'message')
    * mit einem Absenden-Button 
    * sowie einem pre-Tag (ID = 'secformkey'), der den zu verwendenden GnuPG-Schlüssel enthält.  
    
    

## Installation ##


#### 1. JS-Framework und Skripte/Klassen bereit stellen ####

Binden Sie diese Anweisungen z.B. im Header Ihrer Webseite ein: 

```
<script src="/jquery.cookie.min.js"></script>
<script src="/openpgp.min.js"></script>
<script src="/jquery.secform.min.js"></script>
```


#### 2. Aufruf/Instanzierung ####

Fügen Sie diesen Code unterhalb des Formulars oder am Ende der Seite vor dem
abschließenden Body-Tag ein: 

```
<script>
jQuery(document).ready(function () 
    {
        var encryptedForm1 = new encryptedForm.init({
            // Definieren Sie hier Ihre Optionen (siehe Dokumentation):
             
            // formID: 'form#secform', 
            // keyContainer: '#secformkey',
            // formSubmitButtonLabel: 'Ihre Nachricht verschlüsselt senden'
            // und so weiter...
        });
    });
</script>
```


#### 3. Gestaltung anpassen ####

Passen Sie zuletzt optional das CSS entsprechend an. Sofern die technischen Voraussetzungen für die Verwendung der
Verschlüsselung im Browser erfüllt zu sein scheinen, wird dem Formular die CSS-Klasse "secform-on" zugewiesen. Sie 
können also über den Selector "form.secform-on" das Formular und seine Unterelemente entsprechend anpassen (siehe meine
 Beispielgrafiken ganz oben) und den Schlüssel und ggf. weitere Hinweise zur Verschlüsselung ein- oder ausblenden.
 Verwenden Sie beispielsweise folgendes:
 
```
/* Hier Standard-Styles für das Formular definieren */
form.secform { }
 
/* Styles für den Fall, dass Verschlüsselungsoption verfügbar ist definieren */
form.secform-on { }
 
/* Ein- und Ausblenden des Keys und der Hinweismeldungen */
form.secform .hidden { display: none }
form.secform-on .hidden { display: block }
 
/* Styles fuer das bereits verschluesselte Textarea hier definieren: */
form.secform-on textarea[name='message'].encrypted { background: #f8fff3; }
```


## Optionen ##



Bezeichner                      |   Standard-Wert oder Beispiel                                                     |   Erklärung
----------                      |   ---------------------------                                                     |   --------- 
formID                          |   "form#secform"                                                                  |   Geben Sie einen ID-Selektor für das zu bearbeitende Formular an
formSubmitButton                |   "form#secform input[type='submit']"                                             |   Geben Sie einen Selektor für den Versenden-Button im zu bearbeitenden Formular an. 
formMessageTextarea             |   "form#secform textarea[name='message']"                                         |   Geben Sie einen Selektor für das Nachrichten-Eingabefeld an. Als Standard wird innerhalb des zu bearbeitenden Formulars nach einem Textarea mit dem Name-Attribut mit dem "message" gesucht.  
keyContainer                    |   "#secformkey"                                                                   |   ID-Selektor für den GnuPG-Schlüssel-Container 
formSubmitButtonLabel           |   "Ihr Nachricht verschlüsselt versenden"                                         |   Optional (wird nur gesetzt, wenn angegeben): Das Label für den Versenden-Button, wenn die Verschlüsslungsfunktion verfügbar ist 
formMessageTextareaPlaceholder  |   "Bitte geben Sie hier Ihren Namen an und beschreiben Sie mir kurz Ihr Anliegen" |   Optional (wird nur gesetzt, wenn angegeben): Der Platzhalter-Text für das Textarea-Eingabefeld, wenn die Verschlüsslungsfunktion verfügbar ist 


## Lizenz ##


OpenPGPContacForm - secform ist ein Projekt von 
Gruenfisch Webdesign: http://www.gruenfisch-webdesign.de

Dieses Werk bzw. Inhalt (jquery.secform.js) steht unter einer 
Creative Commons Namensnennung - Nicht-kommerziell -
Weitergabe unter gleichen Bedingungen 3.0 Deutschland Lizenz

Beachten Sie auch die Rechte der Entwickler bzw. die Lizenzen der Dokumente 
jquery.cookie.js und openpgp.min.js, deren Inhaber ich nicht bin. Vielen Dank 
an die Entwickler dort!

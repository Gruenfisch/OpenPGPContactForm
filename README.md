# OpenPGPContacForm - secform #


## Beschreibung ##


OpenPGP-Verschl�sselung im eigenen Kontaktformular auf der Webseite verwenden.
Urspr�nglich entwickelt f�r ein Standard-Contao-Kontaktformular. 

Ich freue mich �ber Hinweise und Kritiken. 

## Anforderungen ##


* JQuery 1.11.3
* jquery.cookie.js
* openpgp.min.js (https://github.com/openpgpjs/openpgpjs/blob/master/dist/openpgp.min.js)
* Spezifische Markup-Struktur mit (die hier genannten Standard-IDs k�nnen nat�rlich sp�ter angepasst werden)
    * einem Formular (ID = 'secform') 
    * mit Nachrichten-Feld (ID = 'message')
    * mit einem Absenden-Button 
    * sowie einem pre-Tag (ID = 'secformkey'), der den zu verwendenden GnuPG-Schl�ssel enth�lt.  
    
    

## Installation ##


#### 1. JS-Framework und Skripte/Klassen bereit stellen ####

Binden Sie diese Anweisungen z.B. im Header Ihrer Webseite ein: 

```
<script src="/jquery.cookie.min.js"></script>
<script src="/openpgp.min.js"></script>
<script src="/jquery.secform.min.js"></script>
```


#### 2. Aufruf/Instanzierung ####

F�gen Sie diesen Code unterhalb des Formulars oder am Ende der Seite vor dem
abschlie�enden Body-Tag ein: 

```
<script>
jQuery(document).ready(function () 
    {
        var encryptedForm1 = new encryptedForm.init({
            // Definieren Sie hier Ihre Optionen (siehe Dokumentation):
             
            // formID: 'form#secform', 
            // keyContainer: '#secformkey',
            // formSubmitButtonLabel: 'Ihre Nachricht verschl�sselt senden'
            // und so weiter...
        });
    });
</script>
```


#### 3. Gestaltung anpassen ####

Passen Sie zuletzt optional das CSS entsprechend an. Sofern die technischen Voraussetzungen f�r die Verwendung der
Verschl�sselung im Browser erf�llt zu sein scheinen, wird dem Formular die CSS-Klasse "secform-on" zugewiesen. Sie 
k�nnen also �ber den Selector "form.secform-on" das Formular und seine Unterelemente entsprechend anpassen (siehe meine
 Beispielgrafiken ganz oben) und den Schl�ssel und ggf. weitere Hinweise zur Verschl�sselung ein- oder ausblenden.
 Verwenden Sie beispielsweise folgendes:

```
/* Hier Standard-Styles f�r das Formular definieren */
form.secform { }
 
/* Styles f�r den Fall, dass Verschl�sselungsoption verf�gbar ist definieren */
form.secform-on { }
 
/* Ein- und Ausblenden des Keys und der Hinweismeldungen */
form.secform .hidden { display: none }
form.secform-on .hidden { display: block }
 
/* Styles fuer das bereits verschluesselte Textarea hier definieren: */
form.secform-on textarea[name='message'].encrypted { background: #f8fff3; }
```


## Optionen ##



Bezeichner                      |   Standard-Wert oder Beispiel                                                     |   Erkl�rung
----------                      |   ---------------------------                                                     |   --------- 
formID                          |   "form#secform"                                                                  |   Geben Sie einen ID-Selektor f�r das zu bearbeitende Formular an
formSubmitButton                |   "form#secform input[type='submit']"                                             |   Geben Sie einen Selektor f�r den Versenden-Button im zu bearbeitenden Formular an. 
formMessageTextarea             |   "form#secform textarea[name='message']"                                         |   Geben Sie einen Selektor f�r das Nachrichten-Eingabefeld an. Als Standard wird innerhalb des zu bearbeitenden Formulars nach einem Textarea mit dem Name-Attribut mit dem "message" gesucht.  
keyContainer                    |   "#secformkey"                                                                   |   ID-Selektor f�r den GnuPG-Schl�ssel-Container 
formSubmitButtonLabel           |   "Ihr Nachricht verschl�sselt versenden"                                         |   Optional (wird nur gesetzt, wenn angegeben): Das Label f�r den Versenden-Button, wenn die Verschl�sslungsfunktion verf�gbar ist 
formMessageTextareaPlaceholder  |   "Bitte geben Sie hier Ihren Namen an und beschreiben Sie mir kurz Ihr Anliegen" |   Optional (wird nur gesetzt, wenn angegeben): Der Platzhalter-Text f�r das Textarea-Eingabefeld, wenn die Verschl�sslungsfunktion verf�gbar ist 


## Lizenz ##


OpenPGPContacForm - secform ist ein Projekt von 
Gruenfisch Webdesign: Oliver Richter http://www.gruenfisch-webdesign.de

Dieses Werk bzw. Inhalt (jquery.secform.js) steht unter einer 
Creative Commons Namensnennung - Nicht-kommerziell -
Weitergabe unter gleichen Bedingungen 3.0 Deutschland Lizenz

Beachten Sie auch die Rechte der Entwickler bzw. die Lizenzen der Dokumente 
jquery.cookie.js und openpgp.min.js, deren Inhaber ich nicht bin. Vielen Dank 
an die Entwickler dort!

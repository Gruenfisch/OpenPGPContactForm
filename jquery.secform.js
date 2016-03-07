/*!
********************************************************************************
OpenPGPContacForm - secform by 
Gruenfisch Webdesign: Oliver Richter http://www.gruenfisch-webdesign.de

Dieses Werk bzw. Inhalt (jquery.secform.js) steht unter einer 
Creative Commons Namensnennung - Nicht-kommerziell -
Weitergabe unter gleichen Bedingungen 3.0 Deutschland Lizenz

Beachten Sie auch die Rechte der Entwickler bzw. die Lizenzen der Dokumente 
jquery.cookie.js und openpgp.min.js, deren Inhaber ich nicht bin. 
********************************************************************************
*/

var encryptedForm = 
    {
                        
                        
        ////////////////////////////////////////////////////////////////////////
        init: function(arg) 
            { 
                (arg.formID) ? formID = arg.formID : formID = 'form#secform'; // FORM-ID-CSS-Selektor
                (arg.formSubmitButton) ? formSubmitButton = arg.formSubmitButton : formSubmitButton = "form#secform input[type='submit']"; // Submit-Button-Selektor
                (arg.formMessageTextarea) ? formMessageTextarea = arg.formMessageTextarea : formMessageTextarea = "form#secform textarea.message"; // Message-Textarea-Selektor z.B: "form#secform textarea[name='message']"
                (arg.formMessageTextareaLabelAttachment) ? formMessageTextareaLabelAttachment = arg.formMessageTextareaLabelAttachment : formMessageTextareaLabelAttachment = " (wird verschlüsselt übertragen)"; /* Label-Text */ 
                (arg.keyContainer) ? keyContainer = arg.keyContainer : keyContainer = "#secformkey"; // ID-Selektor fuer das GnuPG-Key-Container-Element
                                    
                // Funktion zum Prüfen, ob Cookie-Support gewaehrleistet ist 
                function cookieSupportCheck() 
                    { 
                        return (  $.cookie('checkforcookiesupport', 'valid', { expires: 1 }) && $.cookie('checkforcookiesupport') == 'valid' && $.removeCookie('checkforcookiesupport') )
                    }
            
                // ...wenn das Formular (ID) vorhanden ist auf der Seite 
                if (  formID.length  )
                    {
                        // ...wenn Zufallsgenerator verfuegbar, Key-Container vorhanden und nicht leer und Cookie-Support verfuegbar ist 
                        if (  (window.crypto.getRandomValues) && (keyContainer.length) && (! $(keyContainer).is(':empty') ) && cookieSupportCheck() )
                            {     
                                // alert("Die Verschlüsselung sollte funktionieren!")

                                // CSS-Klasse fuer 'Bereit zur Verschluesselung' im Form-Tag hinzufuegen
                                $(formID).addClass('secform-on');
                                
                                // Den Beschreibungstext fuer den Button anpassen, sofern vorhanden 
                                if (arg.formSubmitButtonLabel) 
                                    {
                                        $(formSubmitButton).val(arg.formSubmitButtonLabel);
                                    }
                                    
                                // Den Placeholder-Text fuer das Textarea anpassen, sofern vorhanden 
                                if (arg.formMessageTextareaPlaceholder)
                                    {
                                         $(formMessageTextarea).attr('placeholder', arg.formMessageTextareaPlaceholder);
                                    }
                               
                                // Verschluesselungsinfo im Label fur das Textarea hinzufuegen 
                                if (  $(formMessageTextarea).attr('id')  )
                                    {
                                     if (  $("label[for='"+$(formMessageTextarea).attr('id')+"']").length  )
                                        {
                                            var labelElement = $("label[for='"+$(formMessageTextarea).attr('id')+"']");
                                            labelElement.html( labelElement.html() + formMessageTextareaLabelAttachment);
                                        }
                                    }                                     
                                                
                                // Pruefen, ob Cookie vorhanden ist von vorheriger Verschluesselung und auch Text im Textarea steht (steht naemlich nicht, wenn die Seite manuell abermals direkt via URL aufgerufen wurde)                
                                if (  $.cookie("secform-encryptionInProgress")  &&  ($(formMessageTextarea).val().length)  )
                                    {
                                        // Textarea anpassen (nur-lesen setzen und CSS-Klasse hinzufuegen)
                                        $(formMessageTextarea).prop('readonly', true); 
                                        $(formMessageTextarea).addClass('encrypted');  
                                    }   
                                else 
                                    {
                                        // ...sonst Cookie loeschen, da die Seite vermutlich einfach neu direkt via URL aufgerufen wurde (z.B. um eine Neueingabe zu ermoeglichen)
                                        $.removeCookie('secform-encryptionInProgress'); 
                                    }
                                                
                                // Eventhandler fuer Submit-Button anpassen                 
                                $(formSubmitButton).on("click",function(event)
                                    {                      
                                        // Standard-Eventhandler (Submit) verhindern
                                        event.preventDefault();
                                        
                                        // ...wenn Text im Textarea vorhanden ist, Verschluesselung starten bzw. Methode encryptAndSend() aufrufen 
                                        if (  $(formMessageTextarea).val().length  )
                                            {
                                                encryptedForm.encryptAndSend(formID, keyContainer, formSubmitButton, formMessageTextarea)
                                            }
                                        else 
                                            {
                                                alert("Bitte geben Sie einen Nachrichtentext in das markierte Feld ein.");
                                                $(formMessageTextarea).focus();
                                            }                                                        

                                    });

                            }        
                        else 
                            {
                                // alert("Nicht bereit zur Verschluesselung")
                                // $(formSubmitButton).val("Ihre Nachricht versenden");
                            }
                    }
                // ...sonst Cookie loeschen, wenn es also "nicht mehr um das Formular geht", weil z.B. eine Seite ohne diesem Formular aufgerufen wurde   
                else 
                    { 
                        $.removeCookie('secform-encryptionInProgress');   
                    }
             
            },
        
        
        ////////////////////////////////////////////////////////////////////////
        encryptAndSend: function(formID, keyContainer, formSubmitButton, formMessageTextarea)
            {

                // wenn ein Cookie vorhanden ist und somit schon verschluesselt wurde, das Formular einfach nur noch versenden
                if (  $.cookie("secform-encryptionInProgress")  )
                    {
                        window.setTimeout(  "$('"+formID+"').submit()"  , 600);
                    }
                    
                // wenn noch kein Cookie vorhanden ist und somit noch nicht verschluesselt wurde, Formular verschluesseln und versenden    
                else 
                    {
                        var openpgp = typeof window != 'undefined' && window.openpgp ? window.openpgp : require('openpgp'); // siehe openpgp.js   
                        var message = $(formMessageTextarea).val(); // Nachrichtentext erhalten
                        var key = openpgp.key.readArmored(  $(keyContainer).text()  ); // Key erhalten 
                        
                        openpgp.encryptMessage(key.keys, message).then(function(ciphertext) 
                            {
                                // Chiffre-Text in Textarea eintragen
                                $(formMessageTextarea).val( ciphertext );

                                // Cookie setzen: Verschluesselung ausgefuehrt
                                $.cookie("secform-encryptionInProgress", "1", { expires: 1 });
                                
                                // Formular-Submit()
                                window.setTimeout(  "$('"+formID+"').submit()"  , 600);
                                
                                return true;
                                
                            // Fehler abfangen und ggf. trotz Fehler / unverschluessel versenden     
                            }).catch(function(error) 
                                { 
                                if (confirm("Es gab leider einen Fehler bei der Verschlüsselung.\n" +
                                            "Die Nachricht konnte nicht korrekt verschlüsselt werden.\n\n" +
                                            "Der Fehler lautet:\n"+error+"\n\n" +
                                            "Die Nachricht wird nun unverschlüsselt gesendet.\n" +
                                            "Klicken Sie auf ABBRECHEN, um die Nachricht NICHT zu versenden und den Sendevorgang zu beenden.")) 
                                        {
                                            window.setTimeout(  "$('"+formID+"').submit()"  , 900);
                                        }
                                 
                                }); 
                    }  
            }
    }

       
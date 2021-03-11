
const filmer = document.getElementById('filmer');
const antall = document.getElementById('antall');
const fornavn = document.getElementById('fornavn');
const etternavn = document.getElementById('etternavn');
const telefonnr = document.getElementById('telefonnr');
const epost = document.getElementById('epost');
const buy = document.getElementById('buy');

const utskrift = document.getElementById('utskrift');
const slett = document.getElementById('slett');

var liste = [];




buy.onclick = function() {

    if (antall.value == '')
    {
        document.getElementById('feltAntall').innerHTML = 'Må skrive noe inn i antall';

    }

    else
    {
        document.getElementById('feltAntall').innerHTML = '';

    }




    if (fornavn.value == '')
    {
        document.getElementById('feltFornavn').innerHTML = 'Må skrive noe inn i fornavnet';

    }

    else
    {
        document.getElementById('feltFornavn').innerHTML = '';

    }





    if (etternavn.value == '')
    {
        document.getElementById('feltEtternavn').innerHTML = 'Må skrive noe inn i etternavnet';

    }
    else
    {
        document.getElementById('feltEtternavn').innerHTML = '';

    }







    if (telefonnr.value == '')
    {
        document.getElementById('feltTLF').innerHTML = 'Må skrive noe inn i telefonnr';

    }

    else
    {
        document.getElementById('feltTLF').innerHTML = '';

    }




    if (epost.value == '')
    {
        document.getElementById('feltEpost').innerHTML = 'Må skrive noe inn i epost';


    }
    else
    {
        document.getElementById('feltEpost').innerHTML = '';

    }







    if ( filmer.value == 'Velg en film' || antall.value == '' || fornavn.value == '' || etternavn.value == '' || telefonnr.value == '' || epost.value == '') {
        resultat.innerHTML += '';

        if (filmer.value == 'Velg en film') {
            alert('Vennligst velg en film!');
            resultat.innerHTML += 'Velg en film';
        }
    }




    else {





        const billett = {
            film: $("#filmer").val(),
            antall: $("#antall").val(),
            fornavn: $("#fornavn").val(),
            etternavn: $("#etternavn").val(),
            telefonnr: $("#telefonnr").val(),
            epost: $("#epost").val(),
        }



        $.post("/lagre", billett, function(){
            hent();
        });

        $("#filmer").val("Velg en film");
        $("#antall").val("");
        $("#fornavn").val("");
        $("#etternavn").val("");
        $("#telefonnr").val("");
        $("#epost").val("");


        function hent() {
            $.get( "/hent", function( billetter ) {
                SkrivUtFormatering(billetter);
            });
        }

        function SkrivUtFormatering(billetter) {
            let utskrift = "<table class=\"table table-info table-striped\"><tr><th>Film</th><th>Antall</th><th>Fornavn</th>" +
                "<th>Etternavn</th><th>Telefonnr</th><th>Epost</th></tr>";

            for (const enBillett of billetter) {
                utskrift += "<tr><td>" + enBillett.film + "</td><td>" + enBillett.antall + "</td><td>" + enBillett.fornavn + "</td>" +
                    "<td>" + enBillett.etternavn + "</td><td>" + enBillett.telefonnr + "</td><td>" + enBillett.epost + "</td></tr>";
            }
            utskrift += "</table>";
            $("#resultat").html(utskrift);
        }



    }

}






slett.onclick = function slett() {

    $.get( "/slett", function() {
        hent();

    });
    resultat.innerHTML = '';
    filmer.value = 'Velg en film';
}

package com.example.demo;


public class Bestilling {
    private String film;
    private String antall;
    private String fornavn;
    private String etternavn;
    private String telefonnr;
    private String epost;



    public Bestilling(String film, String antall, String fornavn,
     String etternavn, String telefonnr, String epost) {

        this.film = film;
        this.antall = antall;
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.telefonnr = telefonnr;
        this.epost = epost;
    }



    public Bestilling() {}



    public String getfilm() {
        return film;
    }

    public void setfilm(String film) {
        this.film = film;
    }


    public String getantall() {
        return antall;
    }

    public void setantall(String antall) {
        this.antall = antall;
    }



    public String getfornavn() {
        return fornavn;
    }

    public void setfornavn(String fornavn) {
        this.fornavn = fornavn;
    }



    public String getetternavn() {
        return etternavn;
    }

    public void setetternavn(String etternavn) {
        this.etternavn = etternavn;
    }



    public String gettelefonnr() {
        return telefonnr;
    }

    public void settelefonnr(String telefonnr) {
        this.telefonnr = telefonnr;
    }



    public String getepost() {
        return epost;
    }

    public void setepost(String epost) { this.epost = epost;
    }
}

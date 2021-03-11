package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BestillingsController {

    public List<Bestilling> alleBestillinger = new ArrayList<>();

    @PostMapping("lagre")
    public void lagreBestilling(Bestilling billett) {
        alleBestillinger.add(billett);
    }

    @GetMapping("/hent")
    public List<Bestilling> hent(){
        return alleBestillinger;
    }

    @GetMapping("/slett")
    public void slett(){
        alleBestillinger.clear();
    }
}

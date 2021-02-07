---
layout: default
title: Individuals
permalink: /individuals/form/
thisname: Individual
theothername: Organisation
theotherpage: "/organisations/form"
image: /assets/images/logo.png
---


<div class="row">

    <!-- left-hand column contains the contact form -->
    <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12 lhcol">
        {% include form.html %}
    </div>

    <!-- RH column allows switching to the other type (org/ind), and lists supporters -->
    <div class="col rhcol">
    
    <!-- switch -->
    <div class="switchtype">
        <h3>{{ page.theothername}} support </h3>
        <p>I would like to sign as an <a href="{{ page.theotherpage }}"> {{ page.theothername }}</a></p>
    </div>

    <!-- List a subset of the existing supporters in text-only, miniature form -->
    {% include supporters-sm.html %}

    </div>
</div>
{% include thecharter.md %}


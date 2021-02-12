---
layout: default
title: Organisations
permalink: /organisations/form/
thisname: Organisation
theothername: Individual
theotherpage: "/individuals/form"
image: /assets/images/logo.png
privacystatement: 'When you confirm your support, we will publish the name of your organisation on this website. Your email address, sector and postcode will not be displayed. We will use your email address to confirm your support. We will use your postcode to assess the geographical distribution of supporters. If you opt-in to email updates by ticking the box below, will we email you subsequent updates about the Charter. You can unsubscribe at any time.'
---

<div class="row">

    <!-- left-hand column contains the contact form -->
    <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12 lhcol">
        {% include form.html %}
    </div>

    <!-- RH column  -->
    <div class="col rhcol">

    <!-- List a subset of the existing supporters in text-only, miniature form -->
    {% include org-supporters-sm.html %}

    </div>
</div>
{% include thecharter.md %}


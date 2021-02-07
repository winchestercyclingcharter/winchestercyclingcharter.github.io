---
layout: default
title: Supporters
permalink: /supporters/
image: /assets/images/logo.png
---

{{ site.data.orgs.orgs.size }} [organisations](#organisations) and {{ site.data.people.people.size }} [individuals](#individuals) have signed the Charter. 

## Organisations
{% include logogrid.html %}

## Individuals
<ul class="card-columns">
  {% for person in site.data.people.people %}
    <li class="card">{{ person.firstname }} {{ person.lastname }}</li>
  {% endfor %}
</ul>






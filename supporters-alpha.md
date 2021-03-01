---
layout: default
title: Supporters
permalink: /supporters/alphabetical/
image: /assets/images/logo.png
sitemap: false
---

{{ site.data.orgs.orgs.size }} [organisations](#organisations) and {{ site.data.people.people.size }} [individuals](#individuals) have signed the Charter. 

## Individuals
<ul class="card-columns">
  {% assign people = site.data.people.people | sort_natural: "lastname" %}
  {% for person in people %}
    <li class="card">{{ person.firstname }} {{ person.lastname }}</li>
  {% endfor %}
</ul>






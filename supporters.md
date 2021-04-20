---
layout: default
title: Supporters
permalink: /supporters/
image: /assets/images/logo.png
---

{{ site.data.orgs.orgs.size }} [organisations](#organisations) and {{ site.data.people.people.size }} [individuals](#individuals) have signed the Charter. View the location of supporters on a [map of Winchester City Council electoral wards](/map).

## Organisations
{% include logogrid.html %}

## Individuals
<ul class="card-columns">
  {% assign people = site.data.people.people | sort: "dt" %}
  {% for person in people reversed %}
    <li class="card">{{ person.firstname }} {{ person.lastname }}</li>
  {% endfor %}
</ul>






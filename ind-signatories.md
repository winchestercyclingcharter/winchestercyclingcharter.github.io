---
layout: default
title: Individuals
permalink: /individuals/signatories

---

{{ site.data.people.people.size }} individuals have signed the Charter. 

  <ul class="card-columns">
    {% for person in site.data.people.people %}
      <li class="card">{{ person.firstname }} {{ person.lastname }}</li>
    {% endfor %}
  </ul>






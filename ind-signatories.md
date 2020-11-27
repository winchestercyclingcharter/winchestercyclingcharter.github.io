---
layout: default
title: Individuals
permalink: /individuals/signatories

---

{{ site.data.people.people.size }} individuals have signed the Charter. (* = founding signatories.)


{% for person in site.data.people.people %}
  - {{ person.firstname }} {{ person.lastname }} {% if person.founding %} * {% endif %}
{% endfor %}




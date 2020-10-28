---
layout: default
title: Individuals
permalink: /individuals/signatories

---

{{ site.data.people.people.size }} individuals have signed the Charter.


{% for person in site.data.people.people %}
  - {{ person.firstname }} {{ person.lastname }}
{% endfor %}




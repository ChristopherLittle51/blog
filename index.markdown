---
layout: page
title: home
type: ""
---

<div class="journal-container">
  {% assign posts_by_day = site.posts | group_by_exp: "post", "post.date | date: '%Y-%m-%d'" %}

  {% for day_group in posts_by_day reversed %}
  {% assign group_date = day_group.name | date: "%s" | as_integer %}

  <h2>{{ group_date | date: "%A, %B %d, %Y" }}</h2>
  <ul class="journal-list">
    {% for post_entry in day_group.items reversed %}
    {% if post_entry.journal_text %}
    <li
      class="journal-entry type-{{ post_entry.type | default: 'note' }} {% if post_entry.status %}status-{{ post_entry.status }}{% endif %} {% if post_entry.priority %}priority-{{ post_entry.priority }}{% endif %}">
      <span class="journal-symbol"></span>
      {% assign entry_content_display = post_entry.journal_text | markdownify | strip_html | normalize_whitespace %}

      <div class="journal-item-content">
        {% if post_entry.journal_only %}
        <span class="journal-item-text">{{ entry_content_display }}</span>
        {% elsif post_entry.external_url %}
        <a href="{{ post_entry.external_url }}" target="_blank" rel="noopener noreferrer" class="journal-item-text">{{
          entry_content_display }}</a>
        {% else %}
        <a href="{{ post_entry.url | relative_url }}" class="journal-item-text">{{ entry_content_display }}</a>
        {% assign post_preview = post_entry.excerpt | strip_html | normalize_whitespace | truncatewords: 20, "..." %}
        {% if post_preview and post_preview != "" %}
        <span class="journal-item-preview">{{ post_preview }}</span>
        {% endif %}
        {% endif %}
      </div>

      {% if post_entry.image_url %}
      <div class="journal-media">
        {% if post_entry.journal_only %}
        <img src="{{ post_entry.image_url | relative_url }}" alt="{{ post_entry.image_alt | escape }}">
        {% else %}
        {% if post_entry.external_url %}
        <a href="{{ post_entry.external_url }}" target="_blank" rel="noopener noreferrer">
          <img src="{{ post_entry.image_url | relative_url }}" alt="{{ post_entry.image_alt | escape }}">
        </a>
        {% else %}
        <a href="{{ post_entry.url | relative_url }}">
          <img src="{{ post_entry.image_url | relative_url }}" alt="{{ post_entry.image_alt | escape }}">
        </a>
        {% endif %}
        {% endif %}
      </div>
      {% endif %}
    </li> 
    {% endif %}
    {% endfor %}
  </ul> 
  {% endfor %}
</div>
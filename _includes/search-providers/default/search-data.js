window.TEXT_SEARCH_DATA={
  {%- for _collection in site.collections -%}
    {%- unless forloop.first -%},{%- endunless -%}
    '{{ _collection.label }}':[
      {%- for _article in _collection.docs -%}
      {%- unless forloop.first -%},{%- endunless -%}
      {'title':{{ _article.title | jsonify }},
      {%- assign _url = _article.url -%}
      'url':{{ _url | jsonify }}}
      {%- endfor -%}
    ]
  {%- endfor -%}
};

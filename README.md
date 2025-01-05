# List Tags

A List Tags with jQuery 

# How to use

HTML:

```html
<input type="text" id="list-tags" class="tag-input" placeholder="Add a tag...">
```

Style:

```css
.container {
    display: flex;
    flex-wrap: wrap;
    border: 1px solid #ccc;
    padding: 5px;
    border-radius: 5px;
}
.tag {
    background-color: #e0e0e0;
    padding: 5px 10px;
    margin: 5px;
    border-radius: 3px;
    display: flex;
    align-items: center;
}
.tag-remove {
    margin-left: 5px;
    cursor: pointer;
}
.tag-input {
    border: none;
    outline: none;
    padding: 5px;
    flex-grow: 1;
}
```

JavaScript (jQuery) :

```js
jQuery(document).ready(function($) {
    $('.tag-input').on('keypress', function(e) {
        if (e.which === 13) { 
            const tagText = $(this).val().trim();
            if (tagText !== '') {
                const tag = $('<div class="tag"></div>').text(tagText);
                const removeButton = $('<span class="tag-remove">×</span>').click(function() {
                    $(this).parent().remove();
                });
                tag.append(removeButton);
                $('.container').prepend(tag);
                $(this).val(''); 
            }
        }
    });
});
```

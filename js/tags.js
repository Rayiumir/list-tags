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
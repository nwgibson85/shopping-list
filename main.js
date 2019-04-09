$(function() {
    $('ul').on('click', ".shopping-item-toggle", function(event) {
        let targetItem = $(this).closest('li').children('span');
        if (targetItem.hasClass("shopping-item")) {
            targetItem.toggleClass('shopping-item__checked')
       }
        else {
            targetItem.toggleClass('shopping-item')
        }
        console.log(targetItem);
    });
    $('ul').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
    });

    $("#js-shopping-list-form").submit(function(event) {
        event.preventDefault();
        $("ul").append(
            `<li> <span class="shopping-item">${$(this).find("#shopping-list-entry").val()}</span> <div class="shopping-item-controls"> 
          <button class="shopping-item-toggle"> <span class="button-label">check</span> </button> 
           <button class="shopping-item-delete"> <span class="button-label">delete</span> </button> </div> </li>`
          ); 
          console.log($(this).find("#shopping-list-entry").val())
        });
});
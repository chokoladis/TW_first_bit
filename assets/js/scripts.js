function tooltip_toggle(label){
    var tooltip = label.parent().find(".tooltip")[0];
    var tooltip_hidden = tooltip.classList.contains("ch_hidden");
    
    $('.tooltip').each(function(i, obj) {
        if (obj.classList.contains("ch_hidden") == false ){
            obj.classList.add("ch_hidden");
        } 
    });

    if (tooltip_hidden){
        tooltip.classList.remove("ch_hidden");
    } else {
        tooltip.classList.add("ch_hidden");
    }
}

function getParents(el, parentSelector /* optional */) {

    // If no parentSelector defined will bubble up all the way to *document*
    if (parentSelector === undefined) {
        parentSelector = document;
    }

    var parents = [];
    var p = el.parentNode;
    
    while (p !== parentSelector) {
        var o = p;
        parents.push(o);
        p = o.parentNode;
    }
    parents.push(parentSelector); // Push that parentSelector you wanted to stop at
    
    return parents;
}


$(document).ready(function(){

    $("label[for=shape]").on("click",function(){
        tooltip_toggle($(this));
    });
    $("label[for=type_processing]").on("click",function(){
        tooltip_toggle($(this));
    });

    // Нажатие на любое место кроме всплывающей подсказки
    $(document).mouseup(function (e) {

        $('.tooltip').each(function(i, obj) { 
            
            var parents = getParents(e.target);
            var is_parent = false;
            
            for (let parent of parents) {
                if (parent == obj){
                    is_parent = true;
                    return is_parent;
                }
            }

            if (obj != e.target  || !parent ){
                obj.classList.add("ch_hidden");
            }

        });

    });

    $("button").on("click",function(e){
        
        e.preventDefault();

        var quantity_val = $("input[name=quantity]").val();

        if ($(this)[0].id == "minus"){
            if (quantity_val<1){
                quantity_val = 0;
            } else {
                quantity_val = Number(quantity_val) - 1;
            }
            $("input[name=quantity]").val(quantity_val);
            
        } else if ($(this)[0].id == "plus"){
            if($("input[name=quantity]").val()>=99){
                $("input[name=quantity]").val(99);
            } else {
                quantity_val = Number(quantity_val) + 1;
                $("input[name=quantity]").val(quantity_val);
            }
        }

    });

    $("input[name=quantity]").keyup(function() {
        
        if( $(this).val() > 99){
            $(this).val(99);
        } else if ( $(this).val() < 0 ){
            $(this).val(0)
        } else if ($(this).val().length > 2){
            $(this).val(0);
        }
        
    });
    

});

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

function sum(){

    var kv_metr = 1500; // Стоимость кв.метра
    var length = Number($("input#length").val());
    var width = Number($("input#width").val());
    var error = '';

    if (!length) {
        $("input#length").addClass("uk-form-danger");
        error = "length";
    } else {
        $("input#length").removeClass("uk-form-danger");
        error = '';
    }

    if (!width){
        $("input#width").addClass("uk-form-danger");
        error += "width";
    } else {
        $("input#width").removeClass("uk-form-danger");
        error += "";
    }
    
    if (error){
        $(".empty_input").css("display","flex");
    } else {
        $(".empty_input").css("display","none");

        var shape = $("select#shape").val();
        var ratio_square = 1;
        if ( shape == "Круг" ){
            ratio_square = 1.5;
        }
    
        var processing = $("select#type_processing").val();
        var ratio_processing = 1;
        if ( processing == "С шлифофкой" ){
            ratio_processing = 1.5;
        } else if ( processing == "С полировкой"){
            ratio_processing = 1.8;
        }
    
        var quantity = Number($("input#quantity").val());
    
        if (length != "" && width != ""){
            var square = (length * 0.001) * (width * 0.001 ); 
            var price = kv_metr * square * ratio_square * ratio_processing * quantity;
        
            $(".sum p").text(Math.round(price)+" ₽");
        }
    } 
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
        } else{
            return true;
        }

        sum();

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
    
    $('input#length, input#width, input#quantity').on("input",function(){
        sum();
    });

    $("form select").change(function(){
        sum();
    })

    $(".sum img").on("click",function(){
        $("form")[0].reset();
        $(".sum p").text("0 ₽");
    });
});

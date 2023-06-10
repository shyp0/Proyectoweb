$("#newrecipe").validate({
    rules: {
        nombre_receta:{
        required: true,
        maxlength: 50
      },
      desc_receta:{   
        required: true,
        maxlength: 256
      },
      desc_ingredientes:{
        required: true
      },
      desc_preparacion:{
        required: true
      },
      
    },
    messages:{
        nombre_receta:{
            required:"Por favor ingrese el nombre de la receta",
            maxlength: "El nombre de la receta debe contener menos de 50 caracteres",
        },
        desc_receta:{
            required:"Por favor ingrese descripcion a su receta",
            maxlength: "La descripción de la receta no puede contener más de 256 caracteres",
        },
        desc_ingredientes:{
            required:"Por favor ingrese los ingredientes necesarios para su receta",
        },
        desc_preparacion:{
            required:"Por favor ingrese la preparacion de su receta"
        },
        inlineFormCustomSelect:{
            required:"Por favor ingrese un nivel de dificultad"
          }
    },
    submitHandler: function(form) {
        form.submit(alert("Registro exitoso"));
    }
  }); 
$( "#registro" ).validate({
    rules: {
        nombre:{
        lettersonly: true,    
        required: true,
        maxlength: 30
      },
      apellido:{
        lettersonly: true,    
        required: true,
        maxlength: 30
      },
      correo:{
        required: true
      },
      contrasena: "required",
        recontrasena:{
          equalTo: "#contrasena"
        }
      
    },
    messages:{
        nombre:{
            required:"Por favor ingrese su nombre",
            maxlength: "El nombre debe contener menos de 30 caracteres",
            lettersonly:"El nombre solo debe contener letras"
        },
        apellido:{
            required:"Por favor ingrese su apellido",
            maxlength: "El apellido debe contener menos de 30 caracteres",
            lettersonly:"El apellido solo debe contener letras"
        },
        correo:{
            required:"Ingrese un email",
            email:"Ingrese un mail valido"
        },
        contrasena:{
            required:"Ingrese una contraseña"
        },
        recontrasena:{
            equalTo:"Las contraseñas no son iguales"
        }
        
    },
    submitHandler: function(form) {
        form.submit(alert("Registro exitoso"));
    }
  }); 
jQuery.validator.addMethod("lettersonly", function(value, element) 
{
return this.optional(element) || /^[a-z]+$/i.test(value);
}, "Ingrese solo letras por favor");
 
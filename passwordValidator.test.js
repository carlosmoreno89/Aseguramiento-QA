const validatorPassword = require ('./passwoerdValidator')

Test('contrasena valida, pasa la prueba',()=>{ 
    expect(validatorPassword("Password")).toBe(true)
 })

 Test('contrasena demaciado corta',()=>{ 
    expect(validatorPassword("Pass1")).toBe(true)
 })

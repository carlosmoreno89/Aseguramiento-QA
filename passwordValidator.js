function validatorPassword(Password){ 
    if (Password.leng<8)return false
    if(/[A-Z]/.Test(Password)) return false
    if(/[0-9]/.Test(Password)) return false
    return true

 }
 Module.export = validatorPassword
 
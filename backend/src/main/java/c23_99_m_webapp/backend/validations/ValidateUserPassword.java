/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package c23_99_m_webapp.backend.validations;

import c23_99_m_webapp.backend.exceptions.MyException;
import c23_99_m_webapp.backend.models.dtos.DataRegistrationUser;
import org.springframework.stereotype.Component;

@Component
public class ValidateUserPassword implements ValidationUser<DataRegistrationUser>{

    @Override
    public void validar(DataRegistrationUser dataRegistrationUser) throws MyException {

        String password = dataRegistrationUser.password();
        String password2 = dataRegistrationUser.password2();

        if (!password.equals(password2)) {
            throw new MyException("Las contraseñas deben coincidir.");
        }
    }
}


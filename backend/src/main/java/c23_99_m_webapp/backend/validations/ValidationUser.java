package c23_99_m_webapp.backend.validations;

import c23_99_m_webapp.backend.exceptions.MyException;

public interface ValidationUser <T>{
    void validar(T data) throws MyException;
}


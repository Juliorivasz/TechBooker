package c23_99_m_webapp.backend.exceptions;

import c23_99_m_webapp.backend.exceptions.BadCustomerRequestException;
import io.swagger.v3.oas.annotations.Hidden;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.method.annotation.HandlerMethodValidationException;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;
@Hidden
@RestControllerAdvice
public class CustomExceptionHandler{

    @ExceptionHandler(BadCustomerRequestException.class)
    public ResponseEntity<?> handleBadCustomerRequestException(BadCustomerRequestException ex) {
        return ResponseEntity.status(ex.getStatus()).body(Map.of(
                "status", "error",
                "message", ex.getMessage()
        ));
    }

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<?> handleResourceNotFoundException(ResourceNotFoundException ex) {
        return ResponseEntity.status(ex.getStatus()).body(Map.of(
                "status", "error",
                "message", ex.getMessage()
        ));
    }

    @ExceptionHandler(ResourceUnavailableException.class)
    public ResponseEntity<?> handleResourceUnavailableException(ResourceUnavailableException ex) {
        return ResponseEntity.status(ex.getStatus()).body(Map.of(
                "status", "error",
                "message", ex.getMessage()
        ));
    }
    @ExceptionHandler(DuplicateResourceException.class)
    public ResponseEntity<?> handleDuplicateResourceException(DuplicateResourceException ex) {
        return ResponseEntity.status(ex.getStatus()).body(Map.of(
                "status", "error",
                "message", ex.getMessage()
        ));
    }

    @ExceptionHandler(ResourceConflictException.class)
    public ResponseEntity<?> handleResourceConflictException(ResourceConflictException ex) {
        return ResponseEntity.status(ex.getStatus()).body(Map.of(
                "status", "error",
                "message", ex.getMessage()
        ));
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidationExceptions(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getFieldErrors().forEach(error ->
                errors.put(error.getField(), error.getDefaultMessage())
        );
        return ResponseEntity.badRequest().body(errors);
    }

}
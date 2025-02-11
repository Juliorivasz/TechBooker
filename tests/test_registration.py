import pytest
from data.generate_data import generate_test_data
from pages.registration_page import RegistrationPage

@pytest.fixture
def registration_page(page, base_url):
    reg_page=RegistrationPage(page)
    reg_page.navigate(base_url)
    return reg_page


@pytest.mark.parametrize("missing_field", ["name", "DNI", "aemail", "password", "cpassword", "institution",
                                           "CUE", "iemail", "elevel", "address", "tel"])
def test_required_fields(registration_page, missing_field):
    test_data=generate_test_data(missing_field=missing_field)

    registration_page.fill_registration_form(**test_data)
    registration_page.submit_form()

    assert not registration_page.is_field_filled(getattr(registration_page, f"{missing_field}_input")), \
        f"El campo '{missing_field}' debería estar en estado inválido y mostrando tooltip"
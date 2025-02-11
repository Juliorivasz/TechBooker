from playwright.sync_api import Page

class RegistrationPage:
    def __init__(self, page:Page):
        self.page=page

        self.name_field=page.locator('[name="full_name_admin"]')
        self.DNI_field=page.locator('[name="dniAdmin"]')
        self.aemail_field=page.locator('[name="email_admin"]')
        self.password_field=page.locator('[name="password_admin"]')
        self.cpassword_field=page.locator('[name="password2_admin"]')
        self.institution_field=page.locator('[name="name"]')
        self.CUE_field=page.locator('[name="cue"]')
        self.iemail_field=page.locator('[name="email"]')
        self.elevel_field=page.locator('[name="educational_level"]')
        self.address_field=page.locator('[name="address"]')
        self.tel_field=page.locator('[name="phone"]')
        self.website_field=page.locator('[name="website"]')
        self.submit_button=page.get_by_text('Registrarse')
        self.error_message=page.locator('[id="swal2-html-container"]')
        self.error_message_confirm=page.locator(".swal2-confirm")


    def navigate(self, base_url):
        self.page.goto(f"{base_url}/register")


    def fill_registration_form(self, name=None, DNI=None, aemail=None, password=None,
                               cpassword=None, institution=None, CUE=None, iemail=None,
                               elevel=None, address=None, tel=None, website=None):
        form_data= {
            self.name_field: name,
            self.DNI_field: DNI,
            self.aemail_field: aemail,
            self.password_field: password,
            self.cpassword_field: cpassword,
            self.institution_field: institution,
            self.CUE_field: CUE,
            self.iemail_field: iemail,
            self.address_field: address,
            self.tel_field: tel,
            self.website_field: website
        }

        for field, value in form_data.items():
            if value is not None:
                field.wait_for(state='visible')
                field.fill(value)

        if elevel is not None:
            self.elevel_field.wait_for(state='visible')
            self.elevel_field.select_option(elevel)


    def submit_form(self):
        self.submit_button.click()


    def is_field_filled(self, field):
        return field.evaluate("element => element.checkValidity()")


    def get_error_message(self):
        self.error_message.wait_for(state="visible", timeout=5000)
        return self.error_message.inner_text()


    def close_error_message(self):
        self.error_message_confirm.wait_for(state="visible", timeout=5000)
        self.error_message_confirm.click()
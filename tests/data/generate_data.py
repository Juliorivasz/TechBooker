import random
import string

def generate_random_string(nchars=5):
    reteurn ''.join(random.choices(string.ascii_letters+string.digits, k=nchars))

def generate_random_digits(length):
    return ''.join(random..choices(string.digits, k=length))

def generate_valid_data():
    random_part=generate_random_string()
    dni=generate_random_digits(8)
    cue=generate_random_digits(7)
    phone_length=random.randint(4, 10)
    tel=generate_random_digits(phone_length)

    return {
        "name" : f"Nombre Admin {random_part}",
        "DNI" : dni,
        "aemail" : f"piacrosa27+admin{random_part}@gmail.com",
        "password" : "Password1!",
        "cpassword" : "Password1!",
        "institution" : f"Nombre Inst {random_part}",
        "CUE" : cue,
        "iemail" : f"piacrosa27+inst{random_part}@gmail.com",
        "elevel" : random.choice(["PRIMARY", "SECONDARY", "TERTIARY", "UNIVERSITY"]),
        "address" : f"Av. {random_part}",
        "tel" : tel,
        "website" : f"www.{random_part}.com"
    }

def generate_test_data(missing_field=None, custom_values=None):
    test_data=generate_valid_data()

    if missing_field:
        test_data[missing_field]=None

    if custom_values:
        test_data.update(custom_values)

    return test_data 
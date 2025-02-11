import pytest
import os
from playwright.sync_api import sync_playwright


@pytest.fixture(params=["chromium", "firefox", "webkit"])
def page(request):
    browser_type=request.param
    with sync_playwright() as p:
        browser=getattr(p,browser_type).launch(headless=False)
        context=browser.new_context()
        page=context.new_page()
        yield page
        browser.close()

@pytest.fixture()
def base_url():
    return os.getenv("BASE_URL", "https://class-kit.vercel.app")
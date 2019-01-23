package com.nopcommerce;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;

public class MyStepdefs extends Utils {
    @Given("^user on home page$")
    public void userOnHomePage() {

    }


    @When("^I click on \"([^\"]*)\" category$")
    public void iClickOnCategory(String Categories) {
        select_element(By.linkText(Categories));
    }

    @Then("^I should be able see \"([^\"]*)\" sub-category$")
    public void iShouldBeAbleSeeSubCategory(String respective) {
        softAssert.assertEquals(respective, getTextFromElement(By.xpath("//strong[contains(text(),'" + respective + "')]")));
        softAssert.assertAll();

    }

    @And("^I should see url with \"([^\"]*)\"$")
    public void iShouldSeeUrlWith(String extension) {
        softAssert.assertEquals("https://demo.nopcommerce.com/" + extension + "", driver.getCurrentUrl());
        softAssert.assertAll();

    }
}

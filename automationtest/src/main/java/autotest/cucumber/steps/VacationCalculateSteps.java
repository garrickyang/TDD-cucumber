package autotest.cucumber.steps;

import autotest.cucumber.utils.BrowserDriver;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import java.util.concurrent.TimeUnit;

import static org.junit.Assert.assertEquals;

public class VacationCalculateSteps {
    static WebDriver webDriver;
    @Given("^User Navigate to vacation quary Page \"([^\"]*)\"$")
    public void user_Navigate_to_vacation_quary_Page(String url) throws Throwable {
        webDriver = BrowserDriver.getCurrentDriver();
        webDriver.get(url);
    }

    @When("^User enter job band \"([^\"]*)\" and service year (\\d+)$")
    public void user_enter_job_band_and_service_year(String jobBand, String serviceYear) throws Throwable {
        webDriver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        webDriver.findElement(By.name(("jobband"))).sendKeys(jobBand);
        webDriver.findElement(By.name(("serviceyears"))).sendKeys(serviceYear);
    }



    @When("^User submit query form$")
    public void user_submit_quary_form() throws Throwable {
        webDriver.findElement(By.xpath("/html/body/div/form/input[2]")).click();
    }


    @Then("^Result page shows (\\d+) days for this case$")
    public void result_page_shows_days_for_this_case(String expectedDays) throws Throwable {
        String vacationResult=webDriver.findElement(By.name("vacationdays")).getText();
        validateResult(expectedDays,vacationResult);
    }

    private void validateResult(String expectedResult, String actualResult) {
        assertEquals(expectedResult,actualResult);
    }


}

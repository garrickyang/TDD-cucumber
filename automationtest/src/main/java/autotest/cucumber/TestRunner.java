package autotest.cucumber;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

    @RunWith(Cucumber.class)
    @CucumberOptions(
            features = "src/main/resources/feature",
            glue = "autotest/cucumber/steps",
            plugin = "html:target/cucumber-report/"
    )
public class TestRunner {}

package com.nopcommerce;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

import java.util.concurrent.TimeUnit;

public class Hooks extends Utils {

    @Before

    public void openwindow() {

        System.setProperty("webdriver.chrome.driver", "src\\test\\Resources\\Browserdriver\\chromedriver.exe");
        //asign driver
        driver = new ChromeDriver();
        //30second implicitywait
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        // open full screen
        // driver.manage().window().fullscreen();
        //open url
        driver.get("https://demo.nopcommerce.com/");
    }

    @After
    public void closeBrowser() {
        driver.quit();
    }

}


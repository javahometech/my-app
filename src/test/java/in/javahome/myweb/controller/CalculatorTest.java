package in.javahome.myweb.controller;


import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.Properties;

import junit.framework.Assert;
import junit.framework.TestCase;

public class CalculatorTest extends TestCase {
	Calculator cal = new Calculator();

	public void testAdd() {
		Properties prop = new Properties();
		
		OutputStream output = null;

		try
		{

			output = new FileOutputStream("../config.properties");

			// set the properties value
			prop.setProperty("database", "localhost");
			prop.setProperty("dbuser", "hari");
			prop.setProperty("dbpassword", "password");

			// save properties to project root folder
			prop.store(output, null);

		}catch(
		IOException io)
		{
			io.printStackTrace();
		}finally
		{
			if (output != null) {
				try {
					output.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}

		}
	}

	public void testMultiply() {
		Assert.assertEquals(cal.multiply(10, 20), 200);
	}
	public void testMultiply1() {
		Assert.assertEquals(cal.multiply(20, 20), 400);
	}
	public void testMultiply2() {
		Assert.assertEquals(cal.multiply(30, 20), 600);
	}
	public void testMultiply3() {
		Assert.assertEquals(cal.multiply(40, 20), 800);
	}
	public void testMultiply4() {
		Assert.assertEquals(cal.multiply(50, 20), 1000);
	}
}

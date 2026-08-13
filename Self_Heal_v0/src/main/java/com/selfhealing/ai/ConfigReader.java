package com.selfhealing.ai;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

public class ConfigReader {

    private static final Properties properties =
            new Properties();
    public static FileInputStream fis;

     
            

       
        
    

    public static String get(String key) throws IOException {
    try {
		 fis= new FileInputStream(System.getProperty("user.dir")+"\\src\\main\\java\\config.properties");
	} catch (FileNotFoundException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
		System.out.println("Not able to find config.properties");
	}
     properties.load(fis);
        String value =
                properties.getProperty(key);

        if (value == null) {

            throw new RuntimeException(
                    "Missing configuration: " + key
            );
        }

        return value.trim();
    }
}
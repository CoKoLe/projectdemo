package com.learning.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * User: pengsheng
 * Date: 15-01-09
 * Time: 11:47
 */
public class FileUtil {

	private static Log logger = LogFactory.getLog(FileUtil.class);
	
	public static Properties loadProperty(String propPATH) {

		Properties prop = new Properties();
		File propFile = new File(propPATH);
		if (!propFile.exists()) {
			return null;
		}
		
		InputStream stream = null;
		try {
			stream = new FileInputStream(propFile);
			prop.load(stream);
		} catch (FileNotFoundException e) {
			logger.error(e);
		} catch (IOException e) {
			logger.error(e);
		} finally {
			
			if (stream != null) {
				try {
					stream.close();
				} catch (IOException e) {
					logger.error(e);
				}
			}
		}

		return prop;

	}
	
}

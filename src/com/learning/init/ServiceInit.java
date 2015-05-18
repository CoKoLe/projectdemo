package com.learning.init;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.logging.log4j.core.config.Configurator;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;


/**
 * User: pengsheng
 * Date: 15-01-09
 * Time: 10:47
 */
public class ServiceInit implements ServletContextListener {

	private static Log logger = LogFactory.getLog(ServiceInit.class);
	
    public void contextInitialized(ServletContextEvent servletContextEvent) {
        init(servletContextEvent);
    }

    public void contextDestroyed(ServletContextEvent servletContextEvent) {
    }

    private void init(ServletContextEvent servletContextEvent) {


        logger.info("loading Log4j configure");
        // Log4j configure
        ClassLoader classLoader = Thread.currentThread().getContextClassLoader();
        Configurator.initialize("log4j", classLoader, "log4j.xml");
    }

}

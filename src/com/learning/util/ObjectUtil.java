package com.learning.util;

import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * 对象操作
 * User: pengsheng
 * Date: 15-01-09
 * Time: 16:05
 */
public class ObjectUtil {

    private static Log logger = LogFactory.getLog(ObjectUtil.class);

    /**
     * 返回一个对象的属性和属性值
     */
    public static Map<String, Object> getProperty(Object entityName) {

        Map<String, Object> map = new HashMap<String, Object>();
        try {
            Class c = entityName.getClass();
            // 获得对象属性
            Field fieldArray[] = c.getDeclaredFields();
            for (Field field : fieldArray) {
                Object fieldValue = invokeMethod(entityName, field.getName());
                map.put(field.getName().toLowerCase(), fieldValue);
            }
        } catch (Exception e) {
            logger.error(e);
            map = null;
        }

        return map;
    }

    /**
     *  获取字段值
     * @param object
     * @param fieldName
     * @return
     * @throws InvocationTargetException
     * @throws IllegalAccessException
     */
    private static Object invokeMethod(Object object, String fieldName) throws InvocationTargetException, IllegalAccessException {

        Class ownerClass = object.getClass();
        fieldName = fieldName.substring(0, 1).toUpperCase() + fieldName.substring(1);
        Method method = null;
        try {
            method = ownerClass.getMethod("get" + fieldName);
        } catch (SecurityException e) {
            logger.error(e);
            return null;
        } catch (NoSuchMethodException e) {
            logger.error(e);
            return null;
        }

        return method.invoke(object);
    }

}

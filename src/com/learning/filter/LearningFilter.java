package com.learning.filter;

import javax.servlet.*;
import java.io.IOException;

/**
 * Created by Administrator on 2015/5/27.
 */
public class LearningFilter implements Filter {

    private String charset;

    public void init(FilterConfig filterConfig) throws ServletException {
        this.charset = filterConfig.getInitParameter("charset");
    }

    public void doFilter(ServletRequest request, ServletResponse response, FilterChain filterChain) throws IOException, ServletException {
        request.setCharacterEncoding(this.charset);
    }

    public void destroy() {

    }
}

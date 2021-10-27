package com.ashwin.orkestra.currencyConverter.service.Impl;

import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

import com.ashwin.orkestra.currencyConverter.service.DataBaseConnection;
import com.ashwin.orkestra.currencyConverter.service.LoginService;

import java.sql.Connection;
import java.sql.DriverManager;

/**
 * <p>
 * Implementation class of {@link DataBaseConnection}
 * </p>
 * <p>
 * copyright & copy : 2021 Orkestra
 * </p>
 * 
 * @author Ashwin Rishi.
 */
@Service
public class DataBaseConnectionImpl implements DataBaseConnection {

	@Autowired
	private Environment env;

	private final static String url = "spring.datasource.url";
	private final static String username = "spring.datasource.username";
	private final static String password = "spring.datasource.password";

	@Override
	public Connection connectDatabase() {
		Connection connection = null;

		try {
			connection = DriverManager.getConnection(env.getProperty(url), env.getProperty(username),
					env.getProperty(password));
			if (connection != null) {
				System.out.println("Connected to the database!");
			} else {
				System.out.println("Failed to make connection!");
			}

		} catch (SQLException e) {
			System.err.format("SQL State: %s\n%s", e.getSQLState(), e.getMessage());
		} catch (Exception e) {
			e.printStackTrace();
		}

		return connection;
	}
}

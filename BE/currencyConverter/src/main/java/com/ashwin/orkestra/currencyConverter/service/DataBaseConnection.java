package com.ashwin.orkestra.currencyConverter.service;

import java.sql.Connection;

public interface DataBaseConnection {
	/**
	 * Database connection to create an connection and to to get the current working
	 * database.
	 * 
	 * @throws SqlException if the port is out of range or connection error.
	 * @return Connection which represents the current working database.
	 */
	public Connection connectDatabase();
}

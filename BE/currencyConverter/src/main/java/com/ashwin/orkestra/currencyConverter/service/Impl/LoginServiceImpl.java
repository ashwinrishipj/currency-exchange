package com.ashwin.orkestra.currencyConverter.service.Impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ashwin.orkestra.currencyConverter.model.UserCredential;
import com.ashwin.orkestra.currencyConverter.service.DataBaseConnection;
import com.ashwin.orkestra.currencyConverter.service.LoginService;

/**
 * <p>
 * Implementation class of {@link LoginService}
 * </p>
 * <p>
 * copyright & copy : 2021 Orkestra
 * </p>
 * 
 * @author Ashwin Rishi.
 */
@Service
public class LoginServiceImpl implements LoginService {

	@Autowired
	private DataBaseConnection dataBaseConnection;
	private static final String searchEmail = "SELECT COUNT(*) FROM users where useremail=?";
	private static final String searchPassword = "SELECT * FROM users where useremail = ? and userpassword=?";
	private Connection connection = null;
	private PreparedStatement statement = null;
	private int count = 0;
	private ResultSet result;

	@Override
	public void executeQuery() {
		count = 0;
		try {
			result = statement.executeQuery();
			if (result.next()) {
				count = result.getInt(1);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	@Override
	public void validateEmail(UserCredential userCredential) {
		try {
			statement = connection.prepareStatement(searchEmail);
			statement.setString(1, userCredential.getEmailId());
			executeQuery();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	@Override
	public int validateCredentials(UserCredential userCredential) {

		try {
			connection = dataBaseConnection.connectDatabase();
			validateEmail(userCredential);
			if (count > 0) {
				statement = connection.prepareStatement(searchPassword);
				statement.setString(1, userCredential.getEmailId());
				statement.setString(2, userCredential.getPassword());
				executeQuery();
				connection.close();
				if (count > 0) {
					return count;
				} else {
					return 0;
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		System.out.println("login Details: " + userCredential.getEmailId());
		return -1;
	}
}

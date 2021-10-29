package com.ashwin.orkestra.currencyConverter.service.Impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ashwin.orkestra.currencyConverter.model.UserCredential;
import com.ashwin.orkestra.currencyConverter.service.DataBaseConnection;
import com.ashwin.orkestra.currencyConverter.service.RegisterService;

/**
 * <p>
 * Implementation class of {@link RegisterService}
 * </p>
 * <p>
 * copyright & copy : 2021 Orkestra
 * </p>
 * 
 * @author Ashwin Rishi.
 */
@Service
public class RegisterServiceImpl implements RegisterService {

	@Autowired
	private DataBaseConnection dataBaseConnection;

	private static final String registerUser = "INSERT INTO users(userEmail,userPassword)"
			+ "VALUES (?,?) RETURNING *;";
	private static final String searchEmail = "SELECT COUNT(*) FROM users where useremail=?";

	private Connection connection = null;
	private PreparedStatement statement = null;
	private int count = 0;
	private ResultSet result;

	@Override
	public int validateEmail(UserCredential userCredential) {
		try {
			statement = connection.prepareStatement(searchEmail);
			statement.setString(1, userCredential.getEmailId());
			result = statement.executeQuery();
			if (result.next()) {
				count = result.getInt(1);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return count;
	}

	@Override
	public int registerUser(UserCredential userCredential) {
		try {
			connection = dataBaseConnection.connectDatabase();
			validateEmail(userCredential);

			if (count <= 0) {
				statement = connection.prepareStatement(registerUser);
				statement.setString(1, userCredential.getEmailId());
				statement.setString(2, userCredential.getPassword());
				result = statement.executeQuery();
				connection.close();
				if (result.next()) {
					count = result.getInt(1);
					return count;
				} else {
					throw new SQLException();
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return 0;
	}
}

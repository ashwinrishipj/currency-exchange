package com.ashwin.orkestra.currencyConverter.service.Impl;

import java.sql.Array;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;
import java.util.stream.IntStream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ashwin.orkestra.currencyConverter.model.Currency;
import com.ashwin.orkestra.currencyConverter.service.BuildCurrency;
import com.ashwin.orkestra.currencyConverter.service.CurrencyUpdateService;
import com.ashwin.orkestra.currencyConverter.service.DataBaseConnection;

@Service
public class CurrencyUpdateServiceImpl implements CurrencyUpdateService {

	@Autowired
	private BuildCurrency buildCurrency;
	@Autowired
	private DataBaseConnection dataBaseConnection;

	private Currency currency;
	private int userId;
	private ResultSet result;
	private String[] currencies;
	private List<String> arrayList;

	private Connection connection = null;
	private PreparedStatement statement = null;
	private static final String insertQuery = "UPDATE currency SET currencies = ? WHERE userId = ? RETURNING *";

	@Override
	public Currency insert(Map<String, Object> userData) {
		userId = (int) userData.get("userId");
		arrayList = (List<String>) userData.get("currencies");
		currencies = new String[arrayList.size()];
		IntStream.range(0, arrayList.size()).forEach(index -> currencies[index] = arrayList.get(index));

		try {
			connection = dataBaseConnection.connectDatabase();
			Array array = connection.createArrayOf("VARCHAR", currencies);
			statement = connection.prepareStatement(insertQuery);
			statement.setArray(1, array);
			;
			statement.setInt(2, userId);
			result = statement.executeQuery();
			if (result.next()) {
				currency = buildCurrency.buildCurrency(result);
				connection.close();
			} else {
				throw new Error("SQL exception");
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}

		return currency;
	}
}

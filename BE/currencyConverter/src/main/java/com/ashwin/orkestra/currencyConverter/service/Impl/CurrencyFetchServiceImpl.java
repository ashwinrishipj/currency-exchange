package com.ashwin.orkestra.currencyConverter.service.Impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ashwin.orkestra.currencyConverter.model.Currency;
import com.ashwin.orkestra.currencyConverter.service.BuildCurrency;
import com.ashwin.orkestra.currencyConverter.service.CurrencyFetchService;
import com.ashwin.orkestra.currencyConverter.service.DataBaseConnection;

@Service
public class CurrencyFetchServiceImpl implements CurrencyFetchService {
	@Autowired
	private DataBaseConnection dataBaseConnection;

	@Autowired
	private BuildCurrency buildCurrency;

	private Currency currency;
	private static final String fetchCurrencies = "SELECT * FROM currency where userid = ?";
	private Connection connection = null;
	private PreparedStatement statement = null;
	private ResultSet result;

	List<Currency> currencyLists = new ArrayList<Currency>();

	@Override
	public Currency findById(int id) {
		try {
			connection = dataBaseConnection.connectDatabase();
			statement = connection.prepareStatement(fetchCurrencies);
			statement.setInt(1, id);

			result = statement.executeQuery();
			if (result.next()) {
				currency = buildCurrency.buildCurrency(result);
				return currency;
			} else {
				throw new Error("DB fetch error:");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
}

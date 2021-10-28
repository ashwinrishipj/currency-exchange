package com.ashwin.orkestra.currencyConverter.service.Impl;

import java.sql.Array;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.stereotype.Service;

import com.ashwin.orkestra.currencyConverter.model.Currency;
import com.ashwin.orkestra.currencyConverter.model.Impl.CurrencyImpl;
import com.ashwin.orkestra.currencyConverter.service.BuildCurrency;

@Service
public class BuildCurrencyImpl implements BuildCurrency {

	private int userId, currencyId;
	private String[] currencies;
	private Currency currency;

	@Override
	public Currency buildCurrency(ResultSet result) {
		try {
			currencyId = result.getInt(1);
			userId = result.getInt(2);
			Array arrayCurrency = result.getArray(3);
			currencies = (String[]) arrayCurrency.getArray();
			currency = new CurrencyImpl.Builder().currencyId(currencyId).userId(userId).currencies(currencies).build();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return currency;
	}
}

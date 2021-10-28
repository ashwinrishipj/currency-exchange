package com.ashwin.orkestra.currencyConverter.service;

import java.sql.ResultSet;

import org.springframework.stereotype.Service;

import com.ashwin.orkestra.currencyConverter.model.Currency;

@Service
public interface BuildCurrency {

	public Currency buildCurrency(ResultSet result);
}

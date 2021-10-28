package com.ashwin.orkestra.currencyConverter.controller.Impl;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.ashwin.orkestra.currencyConverter.controller.CurrencyController;
import com.ashwin.orkestra.currencyConverter.model.Currency;
import com.ashwin.orkestra.currencyConverter.service.CurrencyFetchService;
import com.ashwin.orkestra.currencyConverter.service.CurrencyUpdateService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class CurrencyControllerImpl implements CurrencyController {

	@Autowired
	private CurrencyFetchService currencyFetchService;

	@Autowired
	private CurrencyUpdateService currencyUpdateService;

	@Override
	public Currency fetchById(int id) {
		return currencyFetchService.findById(id);
	}

	@Override
	public Currency update(Map<String, Object> userData) {
		return currencyUpdateService.insert(userData);
	}
}

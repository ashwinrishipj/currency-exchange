package com.ashwin.orkestra.currencyConverter.controller.Impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.ashwin.orkestra.currencyConverter.controller.CurrencyController;
import com.ashwin.orkestra.currencyConverter.model.Currency;
import com.ashwin.orkestra.currencyConverter.service.CurrencyService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class CurrencyControllerImpl implements CurrencyController {

	@Autowired
	private CurrencyService currencyService;

	@Override
	public List<Currency> fetchAll() {
		System.out.println("inside fetch:");
		return currencyService.findAll();
	}

	@Override
	public Optional<Currency> findById() {
		return currencyService.findByIdCurrencies();
	}

}

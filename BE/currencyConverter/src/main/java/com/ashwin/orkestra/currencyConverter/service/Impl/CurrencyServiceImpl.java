package com.ashwin.orkestra.currencyConverter.service.Impl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ashwin.orkestra.currencyConverter.model.Currency;
import com.ashwin.orkestra.currencyConverter.repository.CurrencyRepository;
import com.ashwin.orkestra.currencyConverter.service.CurrencyService;

@Service
public class CurrencyServiceImpl implements CurrencyService {

	@Autowired
	CurrencyRepository currencyRepository;

	@Override
	public List<Currency> findAll() {
		System.out.println("inside find all");
		List<Currency> currency = new ArrayList<Currency>();
		currency = currencyRepository.findAll();
		System.out.println(Arrays.toString(currency.toArray()));
		return currency;
	}

	@Override
	public Optional<Currency> findByIdCurrencies() {
		System.out.println("inside find by Id");
		Optional<Currency> currency = currencyRepository.findById(1);
		return currency;
	}

}

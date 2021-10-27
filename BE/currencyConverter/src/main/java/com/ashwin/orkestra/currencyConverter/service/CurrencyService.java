package com.ashwin.orkestra.currencyConverter.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.ashwin.orkestra.currencyConverter.model.Currency;

@Service
public interface CurrencyService {
	List<Currency> findAll();

	Optional<Currency> findByIdCurrencies();
}

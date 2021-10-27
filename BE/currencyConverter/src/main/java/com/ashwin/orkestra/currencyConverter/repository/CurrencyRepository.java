package com.ashwin.orkestra.currencyConverter.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ashwin.orkestra.currencyConverter.model.Currency;

@Repository
public interface CurrencyRepository extends JpaRepository<Currency, Integer> {
	@Override
	@Query(value = "select * from sample", nativeQuery = true)
	public List<Currency> findAll();
}

package com.ashwin.orkestra.currencyConverter.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.annotation.ManagedBean;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;

@ManagedBean
@Entity
@Table(name = "currency")
@TypeDef(name = "list-array", typeClass = ArrayList.class)
public class Currency {

	@Id
	@Column(name = "currencyid")
	public int currencyId;

	@Column(name = "userId")
	public int userId;

	@Type(type = "list-array")
	@Column(name = "currencies", columnDefinition = "text[]")
	public List<String> currencies;

	public int getCurrencyId() {
		return currencyId;
	}

	public void setCurrencyId(int currencyId) {
		this.currencyId = currencyId;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public List<String> getCurrencies() {
		return currencies;
	}

	public void setCurrencies(List<String> currencies) {
		this.currencies = currencies;
	}
}

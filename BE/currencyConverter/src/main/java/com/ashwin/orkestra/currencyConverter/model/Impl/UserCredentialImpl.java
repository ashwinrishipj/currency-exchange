package com.ashwin.orkestra.currencyConverter.model.Impl;

import java.util.Objects;

import com.ashwin.orkestra.currencyConverter.exception.ArgumentChecker;
import com.ashwin.orkestra.currencyConverter.exception.Validator;
import com.ashwin.orkestra.currencyConverter.model.UserCredential;
import com.ashwin.orkestra.currencyConverter.model.UserCredentialBuilder;

/**
 * <p>
 * Implementation class of {@link UserCredential}
 * </p>
 * <p>
 * copyright & copy : 2021 Orkestra
 * </p>
 * 
 * @author Ashwin Rishi.
 */
public class UserCredentialImpl implements UserCredential {

	private final String emailId;
	private final String password;

	private UserCredentialImpl(Builder builder) {
		this.emailId = builder.emailId;
		this.password = builder.password;
	}

	@Override
	public String getEmailId() {
		return emailId;
	}

	@Override
	public String getPassword() {
		return password;
	}

	@Override
	public int hashCode() {
		return Objects.hash(emailId, password);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj) {
			return true;
		}
		if (!(obj instanceof UserCredentialImpl)) {
			return false;
		}
		UserCredentialImpl other = (UserCredentialImpl) obj;
		return Objects.equals(emailId, other.emailId) && Objects.equals(password, other.password);
	}

	/**
	 * <p>
	 * Builder class Implementation of {@link UserCredentialBuilder}
	 * </p>
	 * <p>
	 * copyright & copy : 2021 Orkestra
	 * </p>
	 * 
	 * @author Ashwin Rishi
	 */

	public static class Builder implements UserCredentialBuilder {

		private String emailId;
		private String password;

		@Override
		public UserCredentialBuilder emailId(String emailId) {
			this.emailId = ArgumentChecker.rejectIfNullOrEmpty(emailId);
			return this;
		}

		@Override
		public UserCredentialBuilder password(String password) {
			this.password = ArgumentChecker.rejectIfNullOrEmpty(password);
			return this;
		}

		@Override
		public UserCredential build() {
			Validator.validateNotNullOrEmpty(emailId);
			Validator.validateNotNullOrEmpty(password);
			return new UserCredentialImpl(this);
		}
	}
}

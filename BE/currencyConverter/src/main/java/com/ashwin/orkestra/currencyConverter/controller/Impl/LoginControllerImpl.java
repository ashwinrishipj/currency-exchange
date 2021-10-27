package com.ashwin.orkestra.currencyConverter.controller.Impl;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ashwin.orkestra.currencyConverter.controller.LoginController;
import com.ashwin.orkestra.currencyConverter.model.UserCredential;
import com.ashwin.orkestra.currencyConverter.model.Impl.UserCredentialImpl;
import com.ashwin.orkestra.currencyConverter.service.LoginService;

/**
 * <p>
 * Implementation class of {@link LoginController}
 * </p>
 * <p>
 * copyright & copy : 2021 Orkestra
 * </p>
 * 
 * @author Ashwin Rishi.
 */
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController

public class LoginControllerImpl implements LoginController {

	@Autowired
	private LoginService loginService;
	private UserCredential userCredentials;

	@Override
	public int validate(@RequestBody Map<String, Object> userData) {
		userCredentials = new UserCredentialImpl.Builder().emailId(userData.get("emailId").toString())
				.password(userData.get("password").toString()).build();

		return loginService.validateCredentials(userCredentials);
	}
}

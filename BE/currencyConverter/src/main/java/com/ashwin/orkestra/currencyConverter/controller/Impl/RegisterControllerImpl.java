package com.ashwin.orkestra.currencyConverter.controller.Impl;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.ashwin.orkestra.currencyConverter.controller.RegisterController;
import com.ashwin.orkestra.currencyConverter.model.UserCredential;
import com.ashwin.orkestra.currencyConverter.model.Impl.UserCredentialImpl;
import com.ashwin.orkestra.currencyConverter.service.RegisterService;

/**
 * <p>
 * Implementation class of {@link RegisterController}
 * </p>
 * <p>
 * copyright & copy : 2021 Orkestra
 * </p>
 * 
 * @author Ashwin Rishi.
 */
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class RegisterControllerImpl implements RegisterController {

	@Autowired
	private RegisterService registerService;
	private UserCredential userCredentials;

	@Override
	public int registerUser(Map<String, Object> userData) {
		userCredentials = new UserCredentialImpl.Builder().emailId(userData.get("emailId").toString())
				.password(userData.get("password").toString()).build();
		return registerService.registerUser(userCredentials);
	}
}

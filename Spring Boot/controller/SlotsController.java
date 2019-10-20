package com.scb.retail.parkinglot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.scb.retail.parkinglot.bean.Slots;
import com.scb.retail.parkinglot.service.SlotsService;

@RestController
public class SlotsController {
	@Autowired
	private SlotsService slotService;

	@GetMapping("/getcarcount")
	public List<Slots> getAllCars() {
		System.out.println("Listing Cars");
		return slotService.getAllCars();
	}

	@GetMapping("/getcarcountbytype/{type}")
	public Slots getAppById(@PathVariable String type) {
		return slotService.getCarByType(type);
	}
}
